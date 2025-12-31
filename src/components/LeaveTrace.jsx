import { motion } from 'framer-motion'
import { useState } from 'react'

function LeaveTrace() {
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (message.trim()) {
            setSubmitted(true)
            setMessage('')

            // Reset after 3 seconds
            setTimeout(() => {
                setSubmitted(false)
            }, 3000)
        }
    }

    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-16 md:py-24">
            <div className="max-w-2xl w-full">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-space font-bold mb-8 text-center text-black dark:text-white"
                >
                    Leave a Trace
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white dark:bg-[#0B0B0B] border-5 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-light-lg p-8 md:p-12"
                >
                    <p className="text-xl md:text-2xl font-inter mb-6 text-center text-black dark:text-white">
                        If you were here for a second, what would you say?
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type something..."
                                className="w-full border-4 border-black dark:border-white bg-white dark:bg-[#0B0B0B] text-black dark:text-white p-4 md:p-5 text-lg md:text-xl font-inter focus:outline-none focus:shadow-brutal dark:focus:shadow-brutal-light transition-shadow"
                                disabled={submitted}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={submitted}
                            className="w-full bg-black dark:bg-white border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-light p-4 md:p-5 font-space font-bold text-xl md:text-2xl text-white dark:text-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Leave it here
                        </button>
                    </form>

                    {/* Confirmation Message */}
                    {submitted && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: -10 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mt-6 text-center"
                        >
                            <p className="text-xl md:text-2xl font-space font-bold text-gray-700 dark:text-gray-300">
                                I'll keep this.
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    )
}

export default LeaveTrace
