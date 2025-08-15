// Custom OpenTelemetry implementation - no external package dependencies
// Implements the OpenTelemetry span interface directly

console.log("Initializing custom OpenTelemetry implementation...")

// Custom span implementation
class CustomSpan {
  constructor(name, options = {}) {
    this.name = name
    this.startTime = Date.now()
    this.attributes = {}
    this.events = []
    this.status = { code: 0 } // 0 = OK, 1 = ERROR, 2 = UNSET
    this.links = options.links || []
    this.kind = options.kind || 1 // 1 = INTERNAL

    console.log(`🌐 Custom span created: ${name}`, options)
  }

  setAttribute(key, value) {
    this.attributes[key] = value
    console.log(`📝 Span attribute set: ${key} = ${value}`)
    return this
  }

  setAttributes(attributes) {
    Object.assign(this.attributes, attributes)
    console.log(`📝 Span attributes set:`, attributes)
    return this
  }

  addEvent(name, attributes = {}) {
    this.events.push({ name, attributes, time: Date.now() })
    console.log(`📅 Span event added: ${name}`, attributes)
    return this
  }

  recordException(exception) {
    this.status.code = 2 // ERROR
    this.status.message = exception.message
    console.error(`❌ Span exception recorded:`, exception)
    return this
  }

  setStatus(status) {
    this.status = status
    console.log(`📊 Span status set:`, status)
    return this
  }

  end(endTime = Date.now()) {
    const duration = endTime - this.startTime
    console.log(`✅ Span ended: ${this.name} (duration: ${duration}ms)`, {
      attributes: this.attributes,
      events: this.events,
      status: this.status,
    })

    // Send span data to OTEL endpoint
    this.sendToOTEL(endTime)

    return this
  }

  async sendToOTEL(endTime) {
    try {
      const spanData = {
        resourceSpans: [
          {
            resource: {
              attributes: [
                {
                  key: "service.name",
                  value: { stringValue: "subscriber-micro-frontend" },
                },
                { key: "service.version", value: { stringValue: "1.0.0" } },
                {
                  key: "deployment.environment",
                  value: { stringValue: "development" },
                },
              ],
            },
            scopeSpans: [
              {
                scope: { name: "subscriber-form" },
                spans: [
                  {
                    traceId: this.generateTraceId(),
                    spanId: this.generateSpanId(),
                    name: this.name,
                    startTimeUnixNano: this.startTime * 1000000,
                    endTimeUnixNano: endTime * 1000000,
                    attributes: Object.entries(this.attributes).map(
                      ([key, value]) => ({
                        key,
                        value: { stringValue: String(value) },
                      })
                    ),
                    events: this.events.map((event) => ({
                      name: event.name,
                      timeUnixNano: event.time * 1000000,
                      attributes: Object.entries(event.attributes).map(
                        ([key, value]) => ({
                          key,
                          value: { stringValue: String(value) },
                        })
                      ),
                    })),
                    status: this.status,
                    kind: this.kind,
                    links: this.links,
                  },
                ],
              },
            ],
          },
        ],
      }

      console.log("📤 Sending custom span to OTEL:", spanData)

      const response = await fetch("https://otel.exotrend.live/v1/traces", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(spanData),
      })

      if (response.ok) {
        console.log("✅ Custom span sent successfully to OTEL")
      } else {
        console.warn(
          "⚠️ Failed to send custom span to OTEL:",
          response.status,
          response.statusText
        )
      }
    } catch (error) {
      console.warn("⚠️ Error sending custom span to OTEL:", error)
    }
  }

  generateTraceId() {
    return Array.from({ length: 32 }, () =>
      Math.floor(Math.random() * 16).toString(16)
    ).join("")
  }

  generateSpanId() {
    return Array.from({ length: 16 }, () =>
      Math.floor(Math.random() * 16).toString(16)
    ).join("")
  }
}

// Custom tracer implementation
const customTracer = {
  startSpan: (name, options = {}) => {
    console.log(`🌐 Starting custom span: ${name}`, options)
    return new CustomSpan(name, options)
  },

  startActiveSpan: (name, options = {}, fn) => {
    console.log(`🌐 Starting active custom span: ${name}`)
    const span = customTracer.startSpan(name, options)

    try {
      const result = fn(span)
      if (result && typeof result.then === "function") {
        // Handle async functions
        return result.finally(() => span.end())
      } else {
        span.end()
        return result
      }
    } catch (error) {
      span.recordException(error)
      span.end()
      throw error
    }
  },
}

console.log("✅ Custom OpenTelemetry tracer created successfully!")

export { customTracer as tracer }
