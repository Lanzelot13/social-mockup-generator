import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Social Media Mockup Generator',
  description: 'Create realistic social media mockups for presentations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="bg-gray-100 min-h-screen">{children}</body>
    </html>
  )
}
