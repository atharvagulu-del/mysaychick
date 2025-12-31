import { motion } from 'framer-motion'

function Distance() {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-16 md:py-24 bg-white dark:bg-[#0B0B0B]">
            <div className="max-w-5xl w-full">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    {/* Distance blocks */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
                        {/* India */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-sky-blue border-5 border-black dark:border-white shadow-brutal dark:shadow-brutal-light p-8 md:p-12 flex-1 w-full"
                        >
                            <div className="text-5xl md:text-6xl font-space font-bold text-black">
                                INDIA
                            </div>
                            <div className="text-xl md:text-2xl font-inter mt-4 text-black">
                                Where I am
                            </div>
                        </motion.div>

                        {/* Arrow */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="flex-shrink-0"
                        >
                            <div className="text-6xl md:text-8xl font-bold text-black dark:text-white">→</div>
                        </motion.div>

                        {/* Belarus */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-acid-yellow border-5 border-black dark:border-white shadow-brutal dark:shadow-brutal-light p-8 md:p-12 flex-1 w-full"
                        >
                            <div className="text-5xl md:text-6xl font-space font-bold text-black">
                                BELARUS
                            </div>
                            <div className="text-xl md:text-2xl font-inter mt-4 text-black">
                                Where you are
                            </div>
                        </motion.div>
                    </div>

                    {/* Caption */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="mt-12 text-center"
                    >
                        <div className="bg-black dark:bg-white text-white dark:text-black border-5 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-light-lg p-6 md:p-8 inline-block">
                            <p className="text-2xl md:text-3xl font-space font-bold">
                                Different places. Same choice.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Distance
