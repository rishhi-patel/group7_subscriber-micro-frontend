import os
from opentelemetry import trace
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor
from opentelemetry.exporter.otlp.proto.http.trace_exporter import OTLPSpanExporter
from opentelemetry.instrumentation.fastapi import FastAPIInstrumentor
from opentelemetry.instrumentation.mysql import MySQLInstrumentor


def setup_opentelemetry():
    """Initialize OpenTelemetry with OTLP HTTP exporter"""

    # Get configuration from environment variables
    otel_endpoint = os.getenv(
        "OTEL_EXPORTER_OTLP_ENDPOINT", "https://otel.exotrend.live/v1/traces")
    service_name = os.getenv("OTEL_SERVICE_NAME", "subscriber-micro-frontend")

    # Initialize tracing
    trace.set_tracer_provider(TracerProvider())
    trace.get_tracer_provider().add_span_processor(
        BatchSpanProcessor(OTLPSpanExporter(endpoint=otel_endpoint))
    )

    return trace.get_tracer(__name__)


def instrument_fastapi(app):
    """Instrument FastAPI application"""
    FastAPIInstrumentor.instrument_app(app)


def instrument_mysql():
    """Instrument MySQL operations"""
    MySQLInstrumentor().instrument()
