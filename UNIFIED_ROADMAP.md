Unified 24-Week Roadmap — Next.js + RAG (project-first, practical)

Goal
- Become production-ready with Next.js (TypeScript + App Router) and build a production-ready RAG assistant integrated into your portfolio within 24 weeks.

Assumptions
- Weekly time: 8–12 hours (adjustable)
- Preference: practical projects, cost-aware, learn-by-doing
- Weekly feedback day: every Saturday dedicate 1–2 hours to evaluate model outputs, label failures, and update priorities

High-level breakdown (24 weeks)

Weeks 1–4: Foundations — Next.js + TypeScript
- Week 1: React/JS refresher + Todo app (TS basics)
- Week 2: Hooks deep dive + Weather app (API integration)
- Week 3: Next.js App Router fundamentals (SSR/SSG/Server Components)
- Week 4: Task Manager CRUD with MongoDB (API routes)

Weeks 5–8: Polish + Deploy (Portfolio ready)
- Week 5: Styling with Tailwind + responsive layout
- Week 6: Form validation, error handling (Zod/React Hook Form)
- Week 7: Authentication basics (NextAuth/JWT) + small auth flow for Task Manager
- Week 8: Polish + Deploy one project (portfolio entry) + write short post

Weeks 9–12: LLM Basics + Ingestion (RAG prep)
- Week 9: LLM inference basics — integrate LiteLLM/OpenAI and build /api/summarize
- Week 10: Tokenization and chunking (tiktoken or fast-tokenizers)
- Week 11: Embeddings pipeline — batch embedding + vector DB choice (pgvector/Redis/Chroma)
- Week 12: Ingestion CLI/API for PDFs/Markdown + index sample dataset

Weeks 13–16: Retrieval + RAG Chat (core)
- Week 13: Retrieval endpoint + nearest-neighbor search + metadata
- Week 14: Prompt templates, context assembly, include source attribution
- Week 15: Reranker (TF-IDF or model-based) + hybrid search experiments
- Week 16: Chat UI that uses /api/qa with streaming/citations

Weeks 17–20: Quality, Evaluation & Infra
- Week 17: Create evaluation set (20–50 queries) + label correctness
- Week 18: Tune retrieval params, temperature, and reranker; reduce hallucinations
- Week 19: Monitoring, logging, token/cost tracking; secrets management
- Week 20: Dockerize core services, CI/CD basics, rate-limits and quotas

Weeks 21–24: Finalize, Portfolio, Job Prep
- Week 21: Polish advanced project (TubeOnAI mini or similar) + add RAG features requested
- Week 22: Final UX polish, accessibility, performance tweaks
- Week 23: Portfolio + resume update, 2–3 targeted job/freelance applications
- Week 24: Mock interviews, write final post-mortem, plan next quarter

Weekly micro-routine (every week)
- 1-hour sprint planning (Monday): pick 3 small tasks
- Daily: 20–40 minutes focused coding or reading
- Saturday: 1–2 hours evaluation & labeling (feedback loop for RAG)

Deliverables (by Week 8)
- One deployed Next.js project (portfolio entry)
- Repo with clear Week-by-week notes and status

Deliverables (by Week 16)
- Working RAG assistant with ingestion pipeline and chat UI
- Evaluation set + basic reranker

Deliverables (by Week 24)
- Production-ready demos in portfolio, tests, CI, and job-ready materials

How I’ll support (what I’ll do for you)
- Daily 20:00 Asia/Dhaka reminders mapped to current week tasks (logged to MEMORY.md)
- Maintain GitHub project board and issues for each week (I’ve started seeding these)
- Create scaffolds, PRs, and clear checklists; I will not complete coding tasks for you

If this looks good I’ll: create a branch roadmap/unify, add UNIFIED_ROADMAP.md, update README.md Start-Here section, and open a PR for your review.
