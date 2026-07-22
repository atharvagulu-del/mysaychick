import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeToggle({ showWidgets }) {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        // Check local storage or system preference on mount
        const storedTheme = localStorage.getItem('theme')
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
            setIsDark(true)
            document.documentElement.classList.add('dark')
        } else {
            setIsDark(false)
            document.documentElement.classList.remove('dark')
        }
    }, [])

    const toggleTheme = () => {
        setIsDark(!isDark)
        if (!isDark) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    return (
        <AnimatePresence>
            {showWidgets && (
                <motion.button
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    onClick={toggleTheme}
                    className="fixed top-4 right-4 z-50 bg-white dark:bg-black border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-light px-4 py-2 font-space font-bold text-black dark:text-white hover:-translate-y-1 hover:-translate-x-1 hover:shadow-brutal-lg dark:hover:shadow-brutal-light-lg transition-transform"
                >
                    {isDark ? 'LIGHT MODE' : 'DARK MODE'}
                </motion.button>
            )}
        </AnimatePresence>
    )
}
