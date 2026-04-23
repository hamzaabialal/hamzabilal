"""Build resume.pdf for Hamza Bilal using ReportLab.

AI Automation & Backend Engineer resume focused on:
- 3+ years at Techticks
- AI automation workflows (n8n, Make.com, Zapier)
- Backend development (Django, DRF, FastAPI, Flask)
- AWS deployment (SageMaker, Comprehend, Textract, EC2/Lambda/S3)
- Projects from Upwork / real client work
"""

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    HRFlowable,
    ListFlowable,
    ListItem,
    PageTemplate,
    Paragraph,
    Spacer,
)

OUTPUT_PATH = r"c:/Users/SONIC LAPTOPS/Downloads/hamzabilal/static/resume.pdf"

NAVY = HexColor("#0a192f")
GREEN = HexColor("#0d7a68")
SLATE = HexColor("#2f3e52")
LIGHT_SLATE = HexColor("#5a6b80")

styles = getSampleStyleSheet()

name_style = ParagraphStyle(
    "Name",
    parent=styles["Heading1"],
    fontName="Helvetica-Bold",
    fontSize=22,
    leading=26,
    textColor=NAVY,
    spaceAfter=2,
)
tagline_style = ParagraphStyle(
    "Tagline",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=11,
    leading=14,
    textColor=GREEN,
    spaceAfter=4,
)
contact_style = ParagraphStyle(
    "Contact",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=9,
    leading=12,
    textColor=SLATE,
    spaceAfter=10,
)
section_style = ParagraphStyle(
    "Section",
    parent=styles["Heading2"],
    fontName="Helvetica-Bold",
    fontSize=12,
    leading=14,
    textColor=NAVY,
    spaceBefore=8,
    spaceAfter=2,
)
role_style = ParagraphStyle(
    "Role",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=10.5,
    leading=13,
    textColor=NAVY,
    spaceBefore=4,
    spaceAfter=0,
)
company_style = ParagraphStyle(
    "Company",
    parent=styles["Normal"],
    fontName="Helvetica-Oblique",
    fontSize=9.5,
    leading=12,
    textColor=GREEN,
    spaceAfter=1,
)
meta_style = ParagraphStyle(
    "Meta",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.5,
    leading=11,
    textColor=LIGHT_SLATE,
    spaceAfter=3,
)
body_style = ParagraphStyle(
    "Body",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=9.5,
    leading=12.5,
    textColor=SLATE,
    spaceAfter=3,
)
bullet_style = ParagraphStyle(
    "Bullet",
    parent=body_style,
    leftIndent=10,
    bulletIndent=0,
    spaceAfter=1,
)
skills_style = ParagraphStyle(
    "Skills",
    parent=body_style,
    fontSize=9,
    leading=12,
    spaceAfter=2,
)


def bullets(items):
    return ListFlowable(
        [ListItem(Paragraph(t, bullet_style), leftIndent=10, bulletColor=GREEN) for t in items],
        bulletType="bullet",
        start="•",
        bulletFontName="Helvetica-Bold",
        bulletFontSize=8,
        leftIndent=12,
        spaceBefore=0,
        spaceAfter=4,
    )


def hr():
    return HRFlowable(width="100%", thickness=0.7, color=GREEN, spaceBefore=1, spaceAfter=4)


def build():
    doc = BaseDocTemplate(
        OUTPUT_PATH,
        pagesize=LETTER,
        leftMargin=0.55 * inch,
        rightMargin=0.55 * inch,
        topMargin=0.4 * inch,
        bottomMargin=0.4 * inch,
        title="Hamza Bilal - Resume",
        author="Hamza Bilal",
    )
    frame = Frame(
        doc.leftMargin,
        doc.bottomMargin,
        doc.width,
        doc.height,
        id="main",
        leftPadding=0,
        rightPadding=0,
        topPadding=0,
        bottomPadding=0,
    )
    doc.addPageTemplates([PageTemplate(id="resume", frames=frame)])

    story = []

    # Header
    story.append(Paragraph("HAMZA BILAL", name_style))
    story.append(Paragraph("AI Automation & Backend Engineer", tagline_style))
    story.append(
        Paragraph(
            "Bahawalpur, Pakistan &nbsp;|&nbsp; +92 304 767 0164 &nbsp;|&nbsp; "
            '<a href="mailto:hamzaabialal@gmail.com" color="#0d7a68">hamzaabialal@gmail.com</a> '
            '&nbsp;|&nbsp; <a href="https://hamzabilal.dev" color="#0d7a68">hamzabilal.dev</a> '
            '&nbsp;|&nbsp; <a href="https://linkedin.com/in/hamza-bilal-600968245/" color="#0d7a68">LinkedIn</a> '
            '&nbsp;|&nbsp; <a href="https://github.com/hamzaabialal" color="#0d7a68">GitHub</a> '
            '&nbsp;|&nbsp; <a href="https://www.upwork.com/freelancers/~016dcbde991464381d" color="#0d7a68">Upwork</a>',
            contact_style,
        )
    )

    # Summary
    story.append(Paragraph("SUMMARY", section_style))
    story.append(hr())
    story.append(
        Paragraph(
            "AI Automation & Backend Engineer with <b>3+ years</b> of experience at <b>Techticks</b> "
            "building production-grade backends and end-to-end AI automation platforms. Expert in "
            "<b>Python, Django, Django REST Framework, FastAPI,</b> and <b>Flask</b>, with deep "
            "experience shipping intelligent workflows on <b>n8n, Make.com,</b> and <b>Zapier</b>. "
            "Hands-on with <b>AWS deployment</b> — SageMaker for real-time ML inference, Comprehend "
            "and Textract for text/OCR, plus EC2, Lambda, S3, API Gateway, and CloudWatch for "
            "scalable services. 100% Upwork Job Success with a track record of replacing manual "
            "operations with self-healing, AI-driven systems.",
            body_style,
        )
    )

    # Skills
    story.append(Paragraph("TECHNICAL SKILLS", section_style))
    story.append(hr())
    skills = [
        ("Backend", "Python, Django, Django REST Framework, FastAPI, Flask, REST APIs, Celery, Redis, Pytest"),
        ("AI & ML", "OpenAI, LangChain, Agno, Hugging Face, Whisper, TensorFlow, Keras, PyTorch, CNNs, NER, Sentiment, Embeddings"),
        ("AI Automation", "n8n, Make.com, Zapier, Workflow Design, AI Agents, Webhook Orchestration, PDF Data Extraction"),
        ("AWS & Cloud", "AWS SageMaker, AWS Comprehend, AWS Textract, EC2, Lambda, S3, API Gateway, CloudWatch, IAM, SQS, ECR, Docker, CI/CD"),
        ("CRM & SaaS", "Close CRM, HubSpot, Salesforce, GoHighLevel, Notion API, Microsoft Graph, Revolut Business, Unipile, Dripify, Apify"),
        ("Frontend & Full-Stack", "Next.js 15, React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, NextAuth, Vercel"),
        ("Databases", "PostgreSQL, MySQL, SQLite, SQL, Notion as Backend"),
        ("Dev Tools", "Git, GitHub, GitLab, Linux, VS Code, Postman"),
    ]
    for label, values in skills:
        story.append(Paragraph(f"<b>{label}:</b> {values}", skills_style))

    # Experience
    story.append(Paragraph("EXPERIENCE", section_style))
    story.append(hr())

    # Company header (stacked dual-role)
    company_header_style = ParagraphStyle(
        "CompanyHeader",
        parent=role_style,
        fontSize=11.5,
        textColor=NAVY,
        spaceBefore=6,
        spaceAfter=0,
    )
    story.append(Paragraph("Techticks &mdash; On-site, Bahawalpur, Pakistan", company_header_style))
    story.append(Paragraph("April 2023 &ndash; Present &nbsp;|&nbsp; 3+ years", meta_style))

    # Sub-role 1: Trainer
    story.append(Paragraph("Trainer, AI Automation &amp; Backend Engineering", role_style))
    story.append(Paragraph("January 2024 &ndash; Present", meta_style))
    story.append(
        bullets([
            "Own the in-house training program for AI Automation and Backend Engineering, mentoring junior "
            "engineers and interns on Python backends (Django, DRF, FastAPI), n8n/Make.com workflow design, "
            "LLM and agent orchestration, and AWS deployment.",
            "Authored hands-on curriculum, runbooks, and code-review standards covering architecture patterns, "
            "testing with pytest, secure API design, and observability on AWS CloudWatch.",
            "Led technical onboarding and paired-programming sessions that reduced trainee ramp-up time and "
            "raised the team's baseline delivery quality on client engagements.",
        ])
    )

    # Sub-role 2: Engineering
    story.append(Paragraph("AI Automation &amp; Backend Engineer", role_style))
    story.append(Paragraph("April 2023 &ndash; Present", meta_style))
    story.append(
        bullets([
            "Designed and shipped end-to-end <b>AI automation workflows</b> on n8n, Make.com, and Zapier — "
            "orchestrating OpenAI, LangChain, and Agno agents with CRMs (Close, HubSpot, Salesforce, GoHighLevel) "
            "to replace manual ops with self-healing pipelines.",
            "Built and deployed custom <b>ML models to AWS SageMaker</b> (real-time image/text inference endpoints), "
            "consumed by Django/FastAPI services over HTTPS with IAM-scoped access.",
            "Integrated <b>AWS Comprehend</b> for sentiment, entities, key phrases, and topic detection, and "
            "<b>AWS Textract</b> for OCR on complex PDFs — achieving 100% extraction accuracy with LLM post-processing.",
            "Owned cloud deployment on AWS end-to-end: EC2/ECS, Lambda, S3, API Gateway, CloudWatch, SQS, ECR, "
            "with Docker containerization and zero-downtime CI/CD.",
            "Developed scalable backend services in <b>Python, Django, Django REST Framework, and FastAPI</b>, "
            "including OAuth2 flows, webhooks, and modular integration architecture (oauth.py, client.py, service.py).",
            "Built full-stack products including the <b>Hostyo Owner Portal</b> (Next.js 15 + Notion-as-backend) "
            "and automated outreach systems on Unipile + Dripify delivering measurable lead-volume increases.",
            "Operated Celery + Redis + SQS for async report generation, long-running AI inference, and webhook "
            "fan-out, with structured logging, retries, and alerting.",
            "Delivered 4+ successful Upwork engagements with 5.0/5 ratings and 100% Job Success across n8n, CRM, "
            "and data-extraction automations.",
        ])
    )

    story.append(Paragraph("Python Developer Intern", role_style))
    story.append(Paragraph("Enigmatix Pvt Ltd &nbsp;|&nbsp; Bahawalpur, Pakistan", company_style))
    story.append(Paragraph("January 2023", meta_style))
    story.append(
        bullets([
            "Built back-end services and data-analysis tooling in Python, Django, and Django REST Framework.",
            "Introduced unit testing with Django Unit Test and Pytest, catching regressions before production.",
            "Collaborated cross-functionally from idea to delivery, shipping optimizations that improved load times.",
        ])
    )

    # Featured Projects
    story.append(Paragraph("FEATURED PROJECTS", section_style))
    story.append(hr())

    projects = [
        (
            "Hostyo — Property Management Owner Portal",
            "Next.js 15, TypeScript, Notion API, Tailwind CSS, NextAuth, Vercel",
            "Multi-tenant owner portal using <b>Notion as a headless backend</b>. Hosts see live "
            "reservations, payouts, expenses, and property KPIs. Role-based auth, typed Notion API "
            "routes, preview environments per branch on Vercel.",
        ),
        (
            "Close CRM &lt;-&gt; Outlook Calendar Sync (n8n)",
            "n8n, Close CRM API, Microsoft Graph, OAuth2, Webhooks",
            "Bi-directional, webhook-driven sync between Close CRM tasks and Outlook events with "
            "conflict resolution, token refresh, and Slack-based alerting.",
        ),
        (
            "Revolut Business &lt;-&gt; Notion Reservations (n8n)",
            "n8n, Revolut Business API, Notion API, Webhooks",
            "Auto-matches Revolut transactions to Notion reservation records, flags mismatches to an "
            "exception queue, and generates daily/weekly financial reports back into Notion.",
        ),
        (
            "Automated Outreach System (Unipile + Dripify)",
            "n8n, Unipile, Dripify, OpenAI, LinkedIn, Google Sheets",
            "Multi-channel cold outreach with AI-personalized first lines, rate-limit-aware scheduling, "
            "and automatic reply detection that pauses campaigns and hands conversations to humans.",
        ),
        (
            "Complex PDF Data Extraction Service",
            "Python, AWS Textract, OpenAI, LangChain, FastAPI, Pydantic",
            "Turns mixed-layout PDFs into structured JSON with 100% accuracy via Textract OCR, "
            "LLM normalization, strict Pydantic schemas, and a human-in-the-loop fallback.",
        ),
        (
            "Social Media Assessment Pipeline",
            "Python, Apify, AWS SageMaker, AWS Comprehend, OpenAI Whisper, Agno",
            "End-to-end AI/ML pipeline ingesting TikTok/Instagram/Facebook/YouTube content. Routes to "
            "TextAnalyzer (Comprehend), ImageAnalyzer (CNN on SageMaker), VideoAnalyzer (frames every "
            "3s to batch analysis), Whisper transcription, and Agno agents for enrichment.",
        ),
    ]
    for title, tech, desc in projects:
        story.append(Paragraph(f"<b>{title}</b>", role_style))
        story.append(Paragraph(tech, meta_style))
        story.append(Paragraph(desc, body_style))

    # Education + Certification
    story.append(Paragraph("EDUCATION", section_style))
    story.append(hr())
    story.append(Paragraph("Bachelor's in Data Science", role_style))
    story.append(
        Paragraph("Islamia University of Bahawalpur &nbsp;|&nbsp; Bahawalpur, Pakistan", company_style)
    )
    story.append(Paragraph("2020 – 2024", meta_style))

    story.append(Paragraph("CERTIFICATIONS & HIGHLIGHTS", section_style))
    story.append(hr())
    story.append(
        bullets([
            "Python for Data Science — IBM",
            "Upwork: 100% Job Success, Rising Talent, $3K+ earnings, 5.0/5 rating across all completed jobs",
            "Specialties: AI Agents, LLM Orchestration, AWS SageMaker/Comprehend, Workflow Automation",
        ])
    )

    doc.build(story)
    print(f"Wrote {OUTPUT_PATH}")


if __name__ == "__main__":
    build()
