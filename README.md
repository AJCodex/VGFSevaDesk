# VGF SevaDesk mockup

A dependency-free HTML/CSS/JavaScript mockup for the Vidya Grace Foundation assistance request and ticket management workflow.

## Run locally

Open `index.html` directly in a browser. No build step or package installation is required.

## Demo flow

1. Sign in with any valid email and password.
2. Review the Overview dashboard and recent activity.
3. Open All requests to search or filter the sample queue.
4. Open a request to change its status and save an applicant-visible update.
5. Use New request to create a new case; category-based routing is simulated in the browser.

## GitHub Pages

Push the contents of this folder to a repository, then choose **Settings → Pages → Deploy from a branch**, select the default branch and root folder, and save. The repository will be available as a static client demo.

## MVP assumptions represented

- Public request capture with basic applicant details.
- Six VGF-aligned focus areas: medical support, mentorship, scholarship, women empowerment, animal welfare and legal assistance.
- DOC, DOCX, PDF and image uploads, limited to 5 MB per file.
- Minimal roles represented by the administrator/caseworker workspace.
- Internal casework is hidden from applicants; status and a short remark are applicant-visible.
- No sensitive health data is requested in this first mockup.
- Demo data is stored in memory only and resets on refresh.
