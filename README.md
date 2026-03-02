# AccessAI

**Opportunity Intelligence for Women in Tech**

Talent is everywhere. Access is not.
AccessAI is an AI-powered career agent that helps women in tech discover opportunities, identify skill gaps, and build personalized growth roadmaps.

## ?? What It Does

AccessAI transforms a raw professional profile into strategic career guidance in minutes.

Given a LinkedIn profile or CV, the system:

- ?? Extracts and structures technical skills
- ?? Builds a dynamic skill graph
- ?? Matches relevant hackathons, grants, and programs
- ?? Identifies skill gaps
- ?? Generates a personalized roadmap (30 / 90 days)
- ? Improves the user’s professional pitch

This is not just matching.
It is AI-powered opportunity intelligence.

## ?? Why We Built This

Women remain underrepresented in technology globally.
The gap is even wider in emerging regions.

The problem is not talent.

The problem is:

- Lack of visibility
- Lack of guidance
- Lack of network access
- Unclear strategic direction

AccessAI democratizes access to structured career growth intelligence.

As a woman in cybersecurity from Peru, I experienced how difficult it is to navigate global tech ecosystems without strong mentorship or networks. This tool turns AI into a growth companion.

## ?? System Architecture

```text
Frontend (Next.js - v0)
        |
        v
FastAPI Backend
        |
        |---- OpenAI API (LLM)
        |---- Embeddings API
        |
        v
Supabase (Postgres + pgvector)
```

## ?? Core Features

### 1?? Profile Analyzer

**Input:** Raw LinkedIn profile or CV text  
**Output:**

- Structured skills
- Experience level
- Focus areas
- Interest categories

### 2?? Opportunity Matching Engine

- Uses embeddings + vector similarity search
- Returns Top 3 most relevant opportunities
- Explains why they match

### 3?? Skill Gap Detection

Compares user profile against selected opportunity requirements and identifies:

- Missing skills
- Improvement areas
- Recommended focus

### 4?? AI Roadmap Generator

Creates:

- 30-day plan
- 90-day plan
- Suggested learning stack

### 5?? Pitch Improver

Transforms raw self-description into:

- Clear technical pitch
- Impact-driven narrative
- Hackathon-ready summary

## ?? Tech Stack

### Backend

- FastAPI
- Python 3.11+
- OpenAI API (LLM + Embeddings)
- Supabase (PostgreSQL + pgvector)

### Frontend

- Next.js 15
- Tailwind CSS
- v0.dev (UI generation)

### Deployment

- Backend: Railway / Render
- Frontend: Vercel

## ?? Project Structure

```text
access-ai/
¦
+-- backend/
¦   +-- app/
¦   ¦   +-- main.py
¦   ¦   +-- routers/
¦   ¦   +-- services/
¦   ¦   +-- models/
¦   ¦   +-- database/
¦   +-- requirements.txt
¦   +-- README.md
¦
+-- frontend/
¦   +-- app/
¦   +-- components/
¦   +-- services/
¦
+-- README.md
```

## ?? Database Schema (Simplified)

### `users`

- `id`
- `email`
- `created_at`

### `profiles`

- `id`
- `user_id`
- `raw_text`
- `extracted_skills` (`jsonb`)
- `experience_level`
- `interests` (`jsonb`)
- `embedding` (`vector`)

### `opportunities`

- `id`
- `title`
- `type`
- `description`
- `required_skills` (`jsonb`)
- `region`
- `level`
- `embedding` (`vector`)

## ?? How It Works

1. User submits profile text.
2. LLM extracts structured skill data.
3. Embedding is generated for profile.
4. Vector similarity search retrieves best opportunities.
5. AI explains matches and generates roadmap.

## ?? Running Locally

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/access-ai.git
cd access-ai
```

### 2. Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate (Windows)
pip install -r requirements.txt
```

Create `.env` file:

```env
OPENAI_API_KEY=your_key
SUPABASE_URL=your_url
SUPABASE_KEY=your_key
```

Run:

```bash
uvicorn app.main:app --reload
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## ?? Roadmap

### Phase 1 (MVP)

- Profile analysis
- Opportunity matching
- Roadmap generation
- Pitch improvement

### Phase 2

- Mentor matching
- Progress tracking dashboard
- Reputation score
- Community integrations

### Phase 3

- University partnerships
- API for communities
- SaaS model

## ?? Built For

- Women in STEM
- Early-career technologists
- Hackathon builders
- Emerging market talent

## ?? Shipping Philosophy

Built following the **Ship > Perfect** principle.

- Time-boxed development
- Build in public
- Iterative releases
- Community-driven evolution

## ?? Contributing

This is a community-first project.
Contributions, feedback, and collaborations are welcome.