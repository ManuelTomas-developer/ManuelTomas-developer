'use client'

import { useTranslations } from 'next-intl'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { RefreshCcw } from 'lucide-react'

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export default function Error({
    error,
    reset,
}: {
    error: Error
    reset: () => void
}) {
    const t = useTranslations('errors')

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500">
            <div className="text-center text-white p-8 max-w-md">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-9xl font-bold mb-4">500</h1>
                    <h2 className="text-4xl font-semibold mb-4">{t('serverErrorTitle')}</h2>
                    <p className="text-xl mb-8">{t('serverErrorDescription')}</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <Button
                        onClick={reset}
                        className="bg-white text-red-600 hover:bg-red-100"
                    >
                        <RefreshCcw className="mr-2 h-4 w-4" />
                        {t('tryAgain')}
                    </Button>
                </motion.div>
            </div>
        </div>
    )
}