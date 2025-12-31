import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function OneYear() {
    // Configuration: The moment she said "I love you" - December 31, 2024, 21:18 IST
    const START_DATE = new Date('2024-12-31T21:18:00+05:30')

    const [timeElapsed, setTimeElapsed] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        // Calculate time difference and update state
        const calculateTime = () => {
            const now = new Date()
            const diffMs = now - START_DATE

            const days = Math.floor(diffMs / (1000 * 60 * 60 * 24))
            const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((diffMs % (1000 * 60)) / 1000)

            setTimeElapsed({ days, hours, minutes, seconds })
        }

        // Initial calculation
        calculateTime()

        // Update every second
        const interval = setInterval(calculateTime, 1000)

        // Cleanup on unmount
        return () => clearInterval(interval)
    }, [])

    const timeline = [
        { label: 'First message', detail: 'Nervous. Curious.' },
        { label: 'First call', detail: 'Your voice was different than I imagined.' },
        { label: 'First "I love you"', detail: 'December 31st. I remember.' },
        { label: 'Today', detail: 'Still choosing this.' }
    ]

    // Format number with leading zero
    const pad = (num) => String(num).padStart(2, '0')

    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-16 md:py-24">
            <div className="max-w-4xl w-full">
                {/* Live Timer */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white dark:bg-[#0B0B0B] border-5 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-light-lg p-6 md:p-10 mb-8"
                >
                    {/* Timer Display */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
                        {/* Days */}
                        <div className="bg-electric-pink border-4 border-black dark:border-white shadow-brutal-sm dark:shadow-brutal-light-sm p-4 md:p-6">
                            <div className="text-4xl md:text-6xl font-space font-bold text-white text-center">
                                {timeElapsed.days}
                            </div>
                            <div className="text-sm md:text-lg font-space font-bold text-black text-center mt-2">
                                DAYS
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="bg-acid-yellow border-4 border-black dark:border-white shadow-brutal-sm dark:shadow-brutal-light-sm p-4 md:p-6">
                            <div className="text-4xl md:text-6xl font-space font-bold text-black text-center">
                                {pad(timeElapsed.hours)}
                            </div>
                            <div className="text-sm md:text-lg font-space font-bold text-black text-center mt-2">
                                HOURS
                            </div>
                        </div>

                        {/* Minutes */}
                        <div className="bg-sky-blue border-4 border-black dark:border-white shadow-brutal-sm dark:shadow-brutal-light-sm p-4 md:p-6">
                            <div className="text-4xl md:text-6xl font-space font-bold text-black text-center">
                                {pad(timeElapsed.minutes)}
                            </div>
                            <div className="text-sm md:text-lg font-space font-bold text-black text-center mt-2">
                                MINUTES
                            </div>
                        </div>

                        {/* Seconds */}
                        <div className="bg-black dark:bg-white border-4 border-black dark:border-white shadow-brutal-sm dark:shadow-brutal-light-sm p-4 md:p-6">
                            <div className="text-4xl md:text-6xl font-space font-bold text-white text-center">
                                {pad(timeElapsed.seconds)}
                            </div>
                            <div className="text-sm md:text-lg font-space font-bold text-white dark:text-black text-center mt-2">
                                SECONDS
                            </div>
                        </div>
                    </div>

                    {/* Caption */}
                    <div className="text-center border-t-4 border-black dark:border-white pt-6">
                        <p className="text-2xl md:text-3xl font-space font-bold text-black dark:text-white">
                            Time didn't pause. We stayed.
                        </p>
                    </div>
                </motion.div>

                {/* Timeline */}
                <div className="space-y-4">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="bg-white dark:bg-[#0B0B0B] border-4 border-black dark:border-white shadow-brutal-sm dark:shadow-brutal-light-sm p-6 md:p-8"
                        >
                            <h3 className="text-2xl md:text-3xl font-space font-bold mb-2 text-black dark:text-white">
                                {item.label}
                            </h3>
                            <p className="text-lg md:text-xl font-inter text-gray-700 dark:text-gray-300">
                                {item.detail}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OneYear
