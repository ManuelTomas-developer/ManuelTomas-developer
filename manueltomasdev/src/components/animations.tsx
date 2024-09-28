"use client"

import { motion } from "framer-motion"
import type React from "react"

export const AnimatedSection = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        viewport={{ once: true, margin: "-100px" }}
    >
        {children}
    </motion.div>
)

export const StaggeredList = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        variants={{
            hidden: { opacity: 0 },
            show: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.1
                }
            }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
    >
        {children}
    </motion.div>
)

export const StaggeredItem = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 }
        }}
    >
        {children}
    </motion.div>
)

export const HoverScaleCard = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
        {children}
    </motion.div>
)

export const FloatingElement = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        animate={{
            y: ["0%", "5%", "0%"],
        }}
        transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
        }}
    >
        {children}
    </motion.div>
)

export const RotatingBadge = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        animate={{
            rotate: [0, 10, 0],
        }}
        transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
        }}
    >
        {children}
    </motion.div>
)