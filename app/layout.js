import { Inter, Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import { asset } from '@/components/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://ravindu200232.github.io/agentforge-web'),
  title: 'AgentForge — describe an app, watch it get built, tested and shipped',
  description:
    'AgentForge interviews you, writes a traceable specification, generates the application, drives a real browser over every journey, repairs what fails and deploys it to the cloud. Free download for Windows.',
  keywords: [
    'AgentForge', 'AI agents', 'software development', 'code generation',
    'automated testing', 'deployment', 'SRS', 'Ollama', 'Next.js',
  ],
  openGraph: {
    title: 'AgentForge — self-optimizing AI-agentic development',
    description:
      'One tool from the interview to the running application. Describe it, and watch every useful step.',
    type: 'website',
    images: [asset('/screenshots/01-studio-home.jpg')],
  },
  icons: { icon: asset('/agentforge-logo.png') },
}

export const viewport = {
  themeColor: '#4f46e5',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
