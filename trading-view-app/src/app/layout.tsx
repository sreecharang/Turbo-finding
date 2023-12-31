import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { fontSans } from '@/lib/fonts'
import { cn } from "@/lib/utils"
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ThemeSwitcher } from '@/components/theme-switcher'

import { Toaster as DefaultToaster } from '@/registry/default/ui/toaster'
import { Toaster as NewYorkToaster } from '@/registry/new-york/ui/toaster'

import { TailwindIndicator } from '@/components/tailwind-indicator'

import '@/styles/global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
              <SiteFooter />
            </div>
            <TailwindIndicator />
          </ThemeProvider>
          <ThemeSwitcher />
          {/* <Analytics /> */}
          <NewYorkToaster />
          <DefaultToaster />
        </body>
    </html>
  )
}
