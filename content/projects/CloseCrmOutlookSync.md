---
date: '2026-01-20'
title: 'Close CRM ↔ Outlook Calendar Sync'
github: ''
external: ''
tech:
  - n8n
  - Close CRM API
  - Microsoft Graph API
  - OAuth2
  - Webhooks
  - JavaScript
description: 'A bi-directional n8n automation that keeps Close CRM tasks and Outlook Calendar events in sync in real time, with conflict resolution and webhook-driven updates.'
showInProjects: true
---

An **n8n** automation that keeps **Close CRM** tasks and **Microsoft Outlook Calendar** events in sync bi-directionally. Close task changes fan out to Outlook via the Microsoft Graph API, and calendar updates are pushed back into Close tasks. Built with webhook triggers, OAuth2 token refresh, and custom JavaScript nodes for conflict resolution.

## Key Features

- Bi-directional sync between Close CRM tasks and Outlook events
- Webhook-driven real-time updates (no polling)
- Conflict resolution for simultaneous edits on both sides
- OAuth2 token refresh handled inside the workflow
- Error handling with Slack alerts and retry queues
