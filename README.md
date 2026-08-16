# gginestet-site

Personal website of [Gastón Ginestet](https://gastonginestet.vercel.app), a Ruby on Rails software engineer based in Buenos Aires, Argentina. Built with Next.js 15, React 19, and Tailwind CSS v4, on top of the [Nim](https://github.com/ibelick/nim) template.

Live: [https://gastonginestet.vercel.app](https://gastonginestet.vercel.app)

## Features

- One-page portfolio: hero, stack, work experience, community contributions, "Off the Clock" photo carousel, and a freelance pitch with a contact form.
- EN / ES language toggle, translating all page copy.
- Light / dark / system theme toggle.
- Contact form sends email via [Resend](https://resend.com) (see [Installation Guide](./INSTALLATION.md)).
- Responsive, accessible, zero-border-radius "Modernist" visual style.

## Getting Started

For setup instructions (including the contact form's env vars), see the [Installation Guide](./INSTALLATION.md).

```bash
git clone git@github.com:gastonginestet/gginestet-site.git
cd gginestet-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

Deployed on [Vercel](https://vercel.com). The `RESEND_API_KEY` (and optionally `CONTACT_FROM_EMAIL`) environment variables must be set there for the contact form to work in production.

## Credits

Originally scaffolded from [Nim](https://github.com/ibelick/nim), a free and open-source personal website template by [@ibelick](https://x.com/Ibelick).
