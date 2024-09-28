import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Providers } from '../providers'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import SchemaOrg from '@/components/schema-org'
import Analytics from '@/components/google-analytics'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Portfolio of projects and skills',
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }, { locale: 'fr' }, { locale: 'es' }]
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning className={inter.className}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <Header />
            <main className="container mx-auto px-4 py-8">
              <Suspense fallback={<p>careehando...</p>}>
                {children}
                <SchemaOrg />
                <Analytics />
              </Suspense>
            </main>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}