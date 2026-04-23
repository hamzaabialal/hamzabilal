---
date: '2025-11-05'
title: 'Complex PDF Data Extraction'
github: ''
external: ''
tech:
  - Python
  - AWS Textract
  - OpenAI
  - LangChain
  - FastAPI
  - Pydantic
description: 'A PDF data extraction service that turns complex, mixed-layout PDFs into 100% accurate structured JSON using OCR, LLM post-processing, and strict schema validation.'
showInProjects: true
---

A **PDF data extraction service** that turns complex, mixed-layout PDFs (invoices, contracts, reports) into **structured JSON with 100% accuracy**. Combines AWS Textract for OCR, OpenAI + LangChain for semantic post-processing, and Pydantic schemas for strict validation before handing data off to downstream automations.

## Key Features

- AWS Textract OCR with layout-aware parsing
- LLM post-processing to normalize and enrich fields
- Pydantic schema validation with human-in-the-loop fallback
- FastAPI endpoint with async batch support
- Audit log of every extraction for compliance
