from fastapi import FastAPI

from .routers import health

app = FastAPI(title="AccessAI Backend")

app.include_router(health.router)
