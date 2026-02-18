# ENN Opinion Submission Platform

A production-ready submission system built for Elon News Network.
# Overview

The ENN Opinion Submission Platform is a fully designed, end‑to‑end tool that streamlines how students submit opinion articles to Elon News Network. It replaces scattered email chains with a guided, reliable workflow that ensures every submission reaches the correct editor with all required information.

The platform is intentionally lightweight, maintainable, and built to last — even as ENN staff change every semester.
# Core Systems and Tackaways
##  Hybrid Architecture: Google Apps Script + Microsoft Power Automate

This platform uses a hybrid backend approach tailored to ENN’s environment:

  - Google Apps Script
    - Acts as a lightweight backend
    - Serves editor data as JSON
    - Integrates directly with Google Sheets
    - Allows ENN staff to update editor info without touching code

  - Microsoft Power Automate
    - Handles secure email delivery through ENN’s Outlook system
    - Ensures submissions come from a trusted elon.edu  sender
    - Avoids spoofing issues common with Google-based email scripts

This combination creates a reliable, campus‑friendly workflow that works with ENN’s existing tools.
##  Editor Directory Automatically Updated Through Google Sheets

Editor information is not hard‑coded.
It is live, editable, and maintained by ENN leadership.
    - Editors change every semester
    - Roles shift
    - New students join
    - Old students graduate

By using a Google Sheet as the source of truth, the platform stays accurate without requiring developer intervention. This makes the system sustainable long after the original developer graduates.
## Built With the Simple Web Dev Toolkit (HTML, CSS, JavaScript)

Although the developer is fully capable of using React, Python, SQL, and Go, this project intentionally uses vanilla web technologies.

The reason for this is beacuse:
    - The platform only requires two pages
    - React would add unnecessary complexity
    - Vanilla JS loads faster and is easier to maintain
    - Future students can understand the code without learning a framework
    - ENN doesn’t need a full SPA for this workflow

This reflects a practical engineering mindset:
Use the simplest tool that solves the problem cleanly.

# For Future Developers (Web Dev & Full‑Stack Track)

This project was intentionally designed to be a starting point for future Elon students interested in:
  - web development
  - frontend engineering
  - backend engineering
  - full‑stack development
  - workflow automation
  - newsroom technology

If you want real experience, this codebase is a perfect entry point due to the simplicity and clarity of the project. It demonstrates a full end‑to‑end workflow using real tools (Google Apps Script, Power Automate, Google Sheets, and vanilla web technologies).

For students who want to take the next step into modern web development or full‑stack engineering, I recommend building a new version of this platform using more advanced technologies, such as:
    - A React-based version of the platform
    - A Python FastAPI backend
    - SQL storage for submissions
    - An editor dashboard
    - Authentication for writers
    
This project is meant to show young developers a practical example of full‑stack development. You are encouraged to build your own version — whether it’s a redesign of this platform or a completely new website — using the recommendations listed above.

# Developer

- <strong>Diego Diaz</strong>  
- Full‑Stack Developer
- Elon University — Computer Science
- Focused on building practical, maintainable tools for real organizations
