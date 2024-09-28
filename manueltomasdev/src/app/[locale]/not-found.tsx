'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
    const t = useTranslations('errors')

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <div className="text-center text-white p-8 max-w-md">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-9xl font-bold mb-4">404</h1>
                    <h2 className="text-4xl font-semibold mb-4">{t('notFoundTitle')}</h2>
                    <p className="text-xl mb-8">{t('notFoundDescription')}</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <Button asChild className="bg-white text-purple-600 hover:bg-purple-100">
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            {t('backToHome')}
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </div>
    )
}