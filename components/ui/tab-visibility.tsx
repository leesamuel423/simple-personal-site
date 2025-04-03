'use client'

import { useEffect } from 'react'

export function TabVisibilityHandler() {
  useEffect(() => {
    // Get or create favicon link element
    const favicon = document.createElement('link')
    favicon.rel = 'icon'
    favicon.id = 'favicon'
    favicon.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">✨</text></svg>'
    
    // Replace any existing favicon or add a new one
    const existingFavicon = document.querySelector("link[rel='icon']")
    if (existingFavicon) {
      document.head.replaceChild(favicon, existingFavicon)
    } else {
      document.head.appendChild(favicon)
    }

    const handleVisibilityChange = () => {
      const newFavicon = document.createElement('link')
      newFavicon.rel = 'icon'
      newFavicon.id = 'favicon'
      
      if (document.hidden) {
        // When tab is not active/visible
        document.title = "come back! | it's sam"
        newFavicon.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">😢</text></svg>'
      } else {
        // When tab becomes active/visible again
        document.title = "it's sam"
        newFavicon.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">✨</text></svg>'
      }
      
      // Replace existing favicon
      const existingFavicon = document.querySelector("link[rel='icon']")
      if (existingFavicon) {
        document.head.replaceChild(newFavicon, existingFavicon)
      } else {
        document.head.appendChild(newFavicon)
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

