'use client'

import { useEffect, useState } from 'react'

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
      // Add loaded class to body
      document.body.classList.add('loaded')
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="preloader fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="spinner mb-4">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
        <div className="text-green-500 font-medium text-lg">Loading...</div>
      </div>
    </div>
  )
}
