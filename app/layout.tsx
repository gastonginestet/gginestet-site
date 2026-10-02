import type { Metadata, Viewport } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from './language-context'
import { WEBSITE_URL } from '@/lib/constants'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f3f2f2' },
    { media: '(prefers-color-scheme: dark)', color: '#1c1a19' },
  ],
}

const title = 'Gastón Ginestet — Software Engineer'
const description =
  'Personal website of Gastón Ginestet, a Ruby on Rails software engineer based in Buenos Aires, Argentina.'

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title,
  description,
  openGraph: {
    title,
    description,
    url: WEBSITE_URL,
    siteName: 'Gastón Ginestet',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

const archivo = Archivo({
  variable: '--font-archivo',
  weight: ['400', '600', '800'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${archivo.variable} bg-bg text-text font-sans antialiased`}
      >
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          storageKey="theme"
          defaultTheme="light"
          forcedTheme="light"
        >
          <LanguageProvider>
            <div className="flex min-h-screen w-full flex-col">
              <Header />
              {children}
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
