'use client'

import { useEffect } from 'react'

export function TabVisibilityHandler() {
  useEffect(() => {
    // Create favicon link element if it doesn't exist
    let favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement
    if (!favicon) {
      favicon = document.createElement('link')
      favicon.rel = 'icon'
      favicon.id = 'favicon'
      document.head.appendChild(favicon)
    }

    // Set initial favicon
    favicon.href =
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">✨</text></svg>'

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // When tab is not active/visible
        document.title = "come back! | it's sam"
        favicon.href =
          'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">😢</text></svg>'
      } else {
        // When tab becomes active/visible again
        document.title = "it's sam "
        favicon.href =
          'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">✨</text></svg>'
      }
    }

    // Add event listener for visibility change
    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Clean up
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return null // This component doesn't render anything
}

