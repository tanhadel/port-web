'use client'

import { useState, useEffect } from 'react'

export default function CardContainer({ children }: { children: React.ReactNode }) {
  const [activeCard, setActiveCard] = useState('home-card')

  useEffect(() => {
    // Listen for hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) // Remove #
      if (hash) {
        setActiveCard(hash)
      }
    }

    // Set initial active card from URL hash
    if (window.location.hash) {
      handleHashChange()
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Update card visibility based on activeCard
  useEffect(() => {
    const cards = document.querySelectorAll('.card-inner')
    cards.forEach((card) => {
      if (card.id === activeCard) {
        card.classList.add('active')
        card.classList.remove('hidden')
      } else {
        card.classList.remove('active')
        card.classList.add('hidden')
      }
    })
  }, [activeCard])

  return (
    <div className="container relative">
      {children}
    </div>
  )
}
