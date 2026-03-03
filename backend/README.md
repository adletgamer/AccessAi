# Backend

This directory contains the FastAPI backend for AccessAI.

## Getting started

```bash
cd backend
python -m venv venv
# activate the environment
# Windows: venv\Scripts\activate
# macOS/Linux: source venv/bin/activate
pip install -r requirements.txt
```

Run the development server:

```bash
uvicorn app.main:app --reload
```

Health check endpoint: `GET /health`