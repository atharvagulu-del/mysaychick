import { motion } from 'framer-motion'

function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-2xl w-full"
            >
                <div className="bg-white dark:bg-[#0B0B0B] border-5 border-black dark:border-white shadow-brutal dark:shadow-brutal-light p-8 md:p-12">
                    <motion.h1
                        className="text-5xl md:text-7xl font-space font-bold mb-6 leading-tight"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Hi, Anya. This is for you.
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl font-inter mb-6 text-gray-600 dark:text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.45, duration: 0.6 }}
                    >
                        (a.k.a. Mysaychick,)
                    </motion.p>

                    <motion.p
                        className="text-xl md:text-2xl font-inter leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        A place we built without ever meeting.
                    </motion.p>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
