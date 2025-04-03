'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <a 
        href="/" 
        className="flex items-center gap-3 group"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = '/';
        }}
      >
        <img
          src="/sam.png"
          alt="Samuel Lee"
          className="h-16 w-16 rounded-full transition-transform group-hover:scale-105"
        />
        <div>
          <span className="font-medium text-black dark:text-white">
            samuel lee
          </span>
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
      </a>
    </header>
  )
}
