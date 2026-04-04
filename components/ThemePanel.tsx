'use client'

import { useState, useEffect } from 'react'

export default function ThemePanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentColor, setCurrentColor] = useState('green')
  const [mounted, setMounted] = useState(false)

  const colors = [
    { name: 'green', color: '#5ac24e', dark: '#4ade80' },
    { name: 'blue', color: '#65b4f3', dark: '#3b82f6' },
    { name: 'orange', color: '#f5a640', dark: '#fb923c' },
    { name: 'pink', color: '#ee6192', dark: '#ec4899' },
    { name: 'purple', color: '#bb68c8', dark: '#a855f7' },
    { name: 'red', color: '#ee534f', dark: '#ef4444' }
  ]

  useEffect(() => {
    setMounted(true)
    const savedColor = localStorage.getItem('theme-color') || 'green'
    setCurrentColor(savedColor)
    applyThemeColor(savedColor)
  }, [])

  const applyThemeColor = (colorName: string) => {
    const color = colors.find(c => c.name === colorName)
    if (color) {
      document.documentElement.style.setProperty('--primary', color.color)
      document.documentElement.style.setProperty('--primary-dark', color.dark)
      document.documentElement.setAttribute('data-theme', colorName)
    }
  }

  const handleColorChange = (colorName: string) => {
    setCurrentColor(colorName)
    applyThemeColor(colorName)
    localStorage.setItem('theme-color', colorName)
  }

  if (!mounted) return null

  return (
    <div className="theme_panel fixed top-24 right-0 z-[70]">
      <div className={`toggle_bts ${isOpen ? 'active' : ''}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="toggle-theme-panel w-12 h-12 rounded-l-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 border-2 border-r-0 border-gray-200"
          aria-label="Toggle theme panel"
        >
          <i className="icon la la-gear text-xl text-gray-700"></i>
        </button>
      </div>
      
      <div
        className={`theme_menu fixed top-24 right-0 bg-white shadow-2xl rounded-l-lg transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-64 p-5`}
      >
        <h4 className="text-xs font-bold mb-6 text-gray-700 tracking-wider uppercase text-center">
          Color Switcher
        </h4>
        
        <div className="segment mb-6">
          <div className="grid grid-cols-4 gap-2">
            {colors.map((color) => (
              <button
                key={color.name}
                title={`theme-${color.name}`}
                onClick={() => handleColorChange(color.name)}
                className={`w-full aspect-square rounded transition-transform ${
                  currentColor === color.name
                    ? 'ring-2 ring-offset-2 ring-gray-400 scale-105'
                    : 'hover:scale-95'
                }`}
                style={{ backgroundColor: color.color }}
                aria-label={`Switch to ${color.name} theme`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
