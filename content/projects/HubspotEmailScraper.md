---
date: '2026-03-29'
title: 'HubSpot Email Scraper & Importer'
github: ''
external: ''
tech:
  - Python
  - n8n
  - HubSpot API
  - BeautifulSoup
  - Apify
  - CSV
description: 'An automation that scrapes hundreds of prospect emails from public sources and imports them as enriched contacts into HubSpot, with deduplication and list segmentation.'
showInProjects: true
---

An automation that **scrapes hundreds of prospect emails** from public sources and imports them as enriched contacts into **HubSpot**. Combines Python scrapers (BeautifulSoup, Apify actors) with an n8n pipeline that deduplicates, enriches, and segments contacts into HubSpot lists for targeted campaigns.

## Key Features

- Python + Apify scrapers for high-volume email extraction
- Email validation and dedup before HubSpot import
- Automatic list segmentation based on source and enrichment
- Idempotent imports safe to re-run after failures
- Structured logs for compliance and auditability
