import os
from opentelemetry import trace
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor
from opentelemetry.sdk.resources import Resource
from opentelemetry.exporter.otlp.proto.http.trace_exporter import OTLPSpanExporter
from opentelemetry.instrumentation.fastapi import FastAPIInstrumentor
from opentelemetry.instrumentation.mysql import MySQLInstrumentor


def setup_opentelemetry():
    """Initialize OpenTelemetry with OTLP HTTP exporter and explicit service.name"""
    # Endpoint can be full path for HTTP exporter, e.g. http(s)://host:4318/v1/traces
    otel_endpoint = os.getenv(
        "OTEL_EXPORTER_OTLP_ENDPOINT", "https://otel.exotrend.live/v1/traces")

    # Prefer OTEL_SERVICE_NAME if provided; default to a stable name
    service_name = os.getenv("OTEL_SERVICE_NAME", "subscriber-service")

    resource = Resource.create({
        "service.name": service_name,
        # nice-to-haves:
        "service.namespace": "microfrontend",
        "service.version": os.getenv("SERVICE_VERSION", "1.0.0"),
        "deployment.environment": os.getenv("ENV", "local"),
    })

    provider = TracerProvider(resource=resource)
    trace.set_tracer_provider(provider)

    # HTTPS ok; for HTTP use insecure=True
    exporter = OTLPSpanExporter(endpoint=otel_endpoint)
    provider.add_span_processor(BatchSpanProcessor(exporter))

    return trace.get_tracer(service_name)


def instrument_fastapi(app):
    """Instrument FastAPI application"""
    FastAPIInstrumentor.instrument_app(app)


def instrument_mysql():
    """Instrument MySQL operations"""
    MySQLInstrumentor().instrument()
