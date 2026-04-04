'use client'

import { useState, useEffect } from 'react'

export default function ThemePanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentColor, setCurrentColor] = useState('green')
  const [isDark, setIsDark] = useState(false)
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
    
    // Check dark mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const applyThemeColor = (colorName: string) => {
    const color = colors.find(c => c.name === colorName)
    if (color) {
      console.log('Applying theme color:', colorName, color)
      // Set CSS variables that match @theme structure
      document.documentElement.style.setProperty('--color-primary-400', color.color)
      document.documentElement.style.setProperty('--color-primary-500', color.dark)
      // Also set the CSS custom properties for components
      document.documentElement.style.setProperty('--primary', color.color)
      document.documentElement.style.setProperty('--primary-dark', color.dark)
      document.documentElement.setAttribute('data-theme', colorName)
    }
  }

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
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
          className="toggle-theme-panel w-12 h-12 rounded-l-full bg-white dark:bg-gray-900 shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 border-2 border-r-0 border-gray-200 dark:border-gray-700"
          aria-label="Toggle theme panel"
        >
          <i className="icon la la-gear text-xl text-gray-700 dark:text-gray-300"></i>
        </button>
      </div>
      
      <div
        className={`theme_menu fixed top-24 right-0 bg-white dark:bg-gray-900 shadow-2xl rounded-l-lg ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-64 p-5`}
      >
        <h4 className="text-xs font-bold mb-3 text-gray-700 dark:text-gray-300 tracking-wider uppercase text-center">
          Dark/Light Mode
        </h4>
        
        <div className="segment mb-6">
          <button
            onClick={toggleDarkMode}
            className="w-full py-3 px-4 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center gap-3"
          >
            {isDark ? (
              <>
                <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Light Mode</span>
              </>
            ) : (
              <>
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Dark Mode</span>
              </>
            )}
          </button>
        </div>
        
        <h4 className="text-xs font-bold mb-3 text-gray-700 dark:text-gray-300 tracking-wider uppercase text-center">
          Color Switcher
        </h4>
        
        <div className="segment mb-6">
          <div className="grid grid-cols-4 gap-2">
            {colors.map((color) => (
              <button
                key={color.name}
                title={`theme-${color.name}`}
                onClick={() => handleColorChange(color.name)}
                className={`w-full aspect-square rounded ${
                  currentColor === color.name
                    ? 'ring-2 ring-offset-2 ring-gray-400 scale-105'
                    : ''
                }`}
                style={{ backgroundColor: color.color }}
                aria-label={`Switch to ${color.name} theme`}
              ></button>
            ))}
          </div>
        </div>
        
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
        
        <h4 className="text-xs font-bold mb-3 text-gray-700 dark:text-gray-300 tracking-wider uppercase text-center">
          Background Demos
        </h4>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <button
            className="py-2 px-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            BG IMAGE
          </button>
          <button
            className="py-2 px-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            BG VIDEO
          </button>
          <button
            className="py-2 px-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            BG PARTICLES
          </button>
          <button
            className="py-2 px-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            BG COLOR
          </button>
        </div>
      </div>
    </div>
  )
}
