import { motion } from 'framer-motion'

function Letter() {
    const paragraphs = [
        "I didn't plan this. I don't think either of us did.",
        "Distance didn't make this weaker. It made it intentional. Every message, every call, every moment—chosen. Not convenient. Not easy. Just worth it.",
        "You're 6,000 kilometers away and somehow closer than most people I see every day. That's not romantic. That's just true.",
        "One day, a friend asked me how I would describe you…and the thought I had in my mind was she is like the Renaissance, painted by the one standing at the lakeshore, embodying perfection itself. Capturing deep sunlight with a yellowish-red glare that mesmerises not only the eyes but touches the soul so deeply it leads to a teardrop. A portrayal of unexplainable serenity that can calm even the biggest thunderstorm inside me. If only words were enough to explain, I've written a book, and it still would not be enough to describe her existence.",
        "I don't know when we'll meet. I don't know what happens next year, or the year after. But I know I'm still here. And that's not nothing.",
        "Thank you for being patient with the time zones. For staying up late. For waking up early. For choosing this when you didn't have to."
    ]

    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-16 md:py-24">
            <div className="max-w-3xl w-full">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white dark:bg-gray-900 border-5 border-black dark:border-white shadow-brutal-lg p-8 md:p-12"
                >
                    <h2 className="text-4xl md:text-5xl font-space font-bold mb-8 border-b-4 border-black dark:border-white pb-4 dark:text-white">
                        A letter from me
                    </h2>

                    <div className="space-y-6">
                        {paragraphs.map((text, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="text-lg md:text-xl font-inter leading-relaxed text-gray-900 dark:text-gray-100"
                            >
                                {text}
                            </motion.p>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Letter
