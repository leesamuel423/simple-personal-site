'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src="/sam.png"
          alt="Samuel Lee"
          className="h-16 w-16 rounded-full"
        />
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            samuel lee
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            software engineer
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
