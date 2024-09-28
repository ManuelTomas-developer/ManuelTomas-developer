'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { RefreshCcw } from 'lucide-react'

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'pt' }, { locale: 'fr' }, { locale: 'es' }]
}
export default function GlobalError({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    error,
    reset,
    params: { locale }
}: {
    error: Error
    reset: () => void
    params: { locale: string }
}) {
    const t = useTranslations('errors')

    return (
        <html lang={locale}>
            <body>
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">
                    <div className="text-center text-white p-8 max-w-md">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-9xl font-bold mb-4">Oops!</h1>
                            <h2 className="text-4xl font-semibold mb-4">{t('globalErrorTitle')}</h2>
                            <p className="text-xl mb-8">{t('globalErrorDescription')}</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <Button
                                onClick={reset}
                                className="bg-white text-blue-600 hover:bg-blue-100"
                            >
                                <RefreshCcw className="mr-2 h-4 w-4" />
                                {t('tryAgain')}
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </body>
        </html>
    )
}