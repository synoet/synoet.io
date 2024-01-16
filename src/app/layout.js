import './globals.css'


import { GeistMono } from 'geist/font/mono';

export const metadata = {
  title: 'Teo Nys',
  description: 'my personal website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistMono.className}>{children}</body>
    </html>
  )
}
