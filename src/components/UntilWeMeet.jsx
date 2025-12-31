import { motion } from 'framer-motion'

function UntilWeMeet() {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-16 md:py-24 bg-white dark:bg-[#0B0B0B]">
            <div className="max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex items-center justify-center min-h-[60vh]"
                >
                    <div className="bg-black dark:bg-white border-5 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-light-lg p-12 md:p-16 text-center">
                        <h2 className="text-4xl md:text-6xl font-space font-bold text-white dark:text-black leading-tight">
                            No timeline.
                            <br />
                            Just trust.
                        </h2>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default UntilWeMeet
