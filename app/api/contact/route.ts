import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { EMAIL } from '@/app/data'

const resend = new Resend(process.env.RESEND_API_KEY)
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string' ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: `Gaston Ginestet Site <${FROM_EMAIL}>`,
    to: EMAIL,
    replyTo: email,
    subject: `Freelance project inquiry from ${name}`,
    text: `${message}\n\n— ${name} (${email})`,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
