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
<<<<<<< HEAD
      document.documentElement.style.setProperty('--primary', color.color)
      document.documentElement.style.setProperty('--primary-dark', color.dark)
      document.documentElement.setAttribute('data-theme', colorName)
=======
      document.documentElement.style.setProperty('--color-primary-400', color.color)
      document.documentElement.style.setProperty('--color-primary-500', color.dark)
      document.documentElement.style.setProperty('--primary', color.color)
      document.documentElement.style.setProperty('--primary-dark', color.dark)
      document.documentElement.setAttribute('data-theme', colorName)
      
      // Trigger a recalc
      void document.documentElement.offsetHeight
>>>>>>> 41213e7568df680279b728c6ed0a1dd3688bdd87
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
<<<<<<< HEAD
        className={`theme_menu fixed top-24 right-0 bg-white shadow-2xl rounded-l-lg transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-64 p-5`}
      >
        <h4 className="text-xs font-bold mb-6 text-gray-700 tracking-wider uppercase text-center">
=======
        className={`theme_menu fixed top-24 right-0 bg-white dark:bg-gray-900 shadow-2xl rounded-l-lg transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-64 p-5`}
      >
        <h4 className="text-xs font-bold mb-6 text-gray-700 dark:text-gray-300 tracking-wider uppercase text-center">
>>>>>>> 41213e7568df680279b728c6ed0a1dd3688bdd87
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
<<<<<<< HEAD
=======
        
        <h4 className="text-xs font-bold mb-3 text-gray-700 dark:text-gray-300 tracking-wider uppercase text-center">
          RTL/LTR Version
        </h4>
        <div className="grid grid-cols-2 gap-2 mb-6">
          <button
            onClick={(e) => {
              e.preventDefault()
              document.documentElement.setAttribute('dir', 'rtl')
            }}
            className="py-2 px-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            RTL
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              document.documentElement.setAttribute('dir', 'ltr')
            }}
            className="py-2 px-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            LTR
          </button>
        </div>
>>>>>>> 41213e7568df680279b728c6ed0a1dd3688bdd87
      </div>
    </div>
  )
}
