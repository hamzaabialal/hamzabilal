---
date: '2026-03-27'
title: 'Revolut Business ↔ Notion Reservations'
github: ''
external: ''
tech:
  - n8n
  - Revolut Business API
  - Notion API
  - Webhooks
  - OAuth2
description: 'An n8n workflow that automates payments and reporting between Revolut Business and Notion, reconciling reservations against transactions and generating automated financial reports.'
showInProjects: true
---

An **n8n workflow** that connects **Revolut Business** and **Notion** to automate payments, reconciliation, and reporting for a short-term rental operator. Incoming Revolut transactions are matched to Notion reservation records, mismatches are flagged, and daily/weekly financial summaries are generated automatically.

## Key Features

- Revolut Business webhook listener for real-time transaction ingestion
- Auto-matching of transactions to Notion reservation IDs
- Exception queue for unmatched payments
- Scheduled daily and weekly reports written back to Notion
- OAuth2 and API key security with rotating credentials
