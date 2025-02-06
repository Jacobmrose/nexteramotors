import type { Metadata } from 'next'
import './globals.css'
import Navbar from './sections/Navbar'
import Footer from './sections/Footer'

export const metadata: Metadata = {
  title: 'Next Era Motors',
  description: 'React, Typescript, Nextjs, THREEjs, Tailwindcss',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='antialiased min-h-screen flex flex-col font-mono'>
        <Navbar />
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
