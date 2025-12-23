import './globals.css'
import type { Metadata } from 'next'
import NavBar from "../components/NavBar";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: 'Andrew Marek',
  description: "Andrew Marek's personal website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <title>andmarek</title>
      </head>
      <body className={`${GeistSans.className} antialiased`}>
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
