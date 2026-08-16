# Installation Guide

## Prerequisites

- Node.js 20.x or later
- Git

## Installation Steps

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment variables**

   Copy the example env file and fill in a [Resend](https://resend.com) API key (used by `app/api/contact/route.ts` to send messages from the freelance contact form):

   ```bash
   cp .env.local.example .env.local
   ```

   ```
   RESEND_API_KEY=            # required — from resend.com/api-keys
   CONTACT_FROM_EMAIL=        # optional — must be on a domain verified in Resend;
                               # leave blank to use Resend's shared onboarding@resend.dev sender
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Update the site data**

   Personal info, work experience, and social links live in `app/data.ts`. Page copy (English + Spanish) lives in `app/translations.ts`.

   ```ts
   export const EMAIL = 'your@email.com'

   export const SOCIAL_LINKS = [
     {
       label: 'Github',
       link: 'your-github-url',
     },
     // Add your social links
   ]
   ```

5. **Project structure**

   For a better understanding of the Next.js project structure, refer to the [Next.js documentation](https://nextjs.org/docs/app/getting-started/project-structure).

6. **Deployment**

   Deployed on [Vercel](https://vercel.com/new). Remember to set `RESEND_API_KEY` (and `CONTACT_FROM_EMAIL`, if used) as environment variables on the Vercel project — `.env.local` is not committed and won't carry over automatically.
