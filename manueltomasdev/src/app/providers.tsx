"use client"

import { ThemeProvider } from "next-themes"
import { MotionConfig } from "framer-motion"

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <MotionConfig reducedMotion="user">
                {children}
            </MotionConfig>
        </ThemeProvider>
    )
}