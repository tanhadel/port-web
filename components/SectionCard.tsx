import React, { ReactNode } from 'react'

interface SectionCardProps {
  children: ReactNode
  imageSrc?: string
  imageAlt?: string
}

export default function SectionCard({ children, imageSrc, imageAlt = 'Section Image' }: SectionCardProps) {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className={`grid grid-cols-1 ${imageSrc ? 'lg:grid-cols-12' : ''} gap-0 min-h-screen`}>
        {/* Scrollable Content - Left/Center */}
        <div className={`${imageSrc ? 'lg:col-span-8 xl:col-span-6' : ''} overflow-y-auto py-20`}>
          <div className="container mx-auto px-4 max-w-4xl">
            {children}
          </div>
        </div>
        
        {/* Fixed Background Image - Right */}
        {imageSrc && (
          <div 
            className="hidden lg:block lg:col-span-4 xl:col-span-6 bg-cover bg-center bg-no-repeat lg:sticky lg:top-0 h-screen"
            style={{ backgroundImage: `url(${imageSrc})` }}
            role="img"
            aria-label={imageAlt}
          />
        )}
      </div>
    </section>
  )
}
