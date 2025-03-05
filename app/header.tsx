'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center space-x-4">
      <Image
        src="/gaston.png"
        alt="Gaston Ginestet"
        width={125}
        height={125}
        className="rounded-full border border-zinc-300 dark:border-zinc-700 object-cover overflow-hidden aspect-square"
      />

      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Gaston Ginestet
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Software Engineer
        </TextEffect>
      </div>
    </header>
  )
}
