# GeburtsFest — Vercel-ready website

Responsive bilingual (English/German) Next.js website. Uses the original GeburtsFest logo and original photograph, not an AI-generated replacement.

## Deploy on Vercel
1. Unzip this folder and upload it to a new GitHub repository.
2. In Vercel, select **Add New → Project**, import that GitHub repository and click **Deploy**. Vercel detects Next.js automatically.
3. Test both `/en` and `/de` and all links before connecting your domain.
4. In Vercel Project → Settings → Domains, add your existing domain. Update DNS records at your domain registrar using the exact instructions Vercel displays. Do not cancel Wix/domain service until DNS and email have been verified.

## Before publishing
- This is a reconstruction from supplied screenshots, not an export of Wix source code. Review all copy, layout, translations and historical event details.
- The contact button opens an email to geburtsfest@gmail.com; it does **not** send a form submission. If a web form is desired, connect a form backend (e.g. Formspree) before going live.
- The 2026 event has already taken place. No current ticket booking is advertised; add a verified ticket URL when a new event is scheduled.
- Add current speakers, schedule and privacy/legal pages as appropriate before public launch.

## Local development
`npm install` then `npm run dev`.
