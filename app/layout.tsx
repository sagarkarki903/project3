import { relative } from 'path'
import './globals.css'
import { Navbar } from '@/components'
import { Footer } from '@/components'
import type { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'discover the best cars in the US',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
       

        {children}
        <Footer />
        </body>
    </html>
  )
}
