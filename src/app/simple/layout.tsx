import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Simple'
}

export default function SimpleLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div>{children}</div>
}
