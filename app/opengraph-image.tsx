import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Gaston Ginestet — Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const BG = '#f3f2f2'
const TEXT = '#201e1d'
const ACCENT = '#ec3013'
const ACCENT_700 = '#ae1800'

async function loadArchivo(weight: number, text: string) {
  const css = await (
    await fetch(
      `https://fonts.googleapis.com/css2?family=Archivo:wght@${weight}&text=${encodeURIComponent(text)}`,
    )
  ).text()
  const match = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/)
  if (!match) throw new Error('Could not resolve Archivo font URL')
  const res = await fetch(match[1])
  return res.arrayBuffer()
}

export default async function Image() {
  const kicker = "HI, I'M"
  const name = 'Gaston Ginestet'
  const role = 'SOFTWARE ENGINEER'
  const tagline =
    'Ruby on Rails · systems from architecture to production · AI-assisted workflows'

  const [bold, regular] = await Promise.all([
    loadArchivo(800, kicker + name + role),
    loadArchivo(400, tagline),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: BG,
          padding: '80px 96px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 22,
            letterSpacing: 4,
            color: ACCENT_700,
            fontFamily: 'Archivo',
            fontWeight: 800,
          }}
        >
          {kicker}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 112,
            lineHeight: 1.05,
            color: TEXT,
            fontFamily: 'Archivo',
            fontWeight: 800,
            letterSpacing: -2,
            marginTop: 16,
          }}
        >
          {name}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 32,
            color: TEXT,
            fontFamily: 'Archivo',
            fontWeight: 800,
            letterSpacing: 2,
            marginTop: 12,
          }}
        >
          {role}
        </div>
        <div
          style={{
            display: 'flex',
            width: 64,
            height: 6,
            background: ACCENT,
            marginTop: 40,
          }}
        />
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            color: TEXT,
            opacity: 0.75,
            fontFamily: 'Archivo',
            fontWeight: 400,
            marginTop: 28,
            maxWidth: 820,
          }}
        >
          {tagline}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Archivo', data: bold, weight: 800, style: 'normal' },
        { name: 'Archivo', data: regular, weight: 400, style: 'normal' },
      ],
    },
  )
}
