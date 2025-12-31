import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

function OpenWhen() {
    const [openCard, setOpenCard] = useState(null)

    const cards = [
        {
            id: 1,
            title: 'Open when you miss me',
            content: `Hey Anya.
If missing me feels heavy right now, I want you to know this:
you're not alone in it.
I'm thinking of you too.
Quietly, but genuinely.`,
            accentColor: 'electric-pink', // Pink/red for warmth + ache
            accentBg: 'bg-electric-pink',
            accentBorder: 'border-t-4 border-electric-pink'
        },
        {
            id: 2,
            title: 'Open when you\'re smiling',
            content: `Seeing you happy always feels right.
I hope today was gentle with you, Anya.
If you're smiling right now, I'm smiling too.
I love youuuuuu.`,
            accentColor: 'acid-yellow', // Yellow for joy + lightness
            accentBg: 'bg-acid-yellow',
            accentBorder: 'border-t-4 border-acid-yellow'
        }
    ]

    const toggleCard = (id) => {
        setOpenCard(openCard === id ? null : id)
    }

    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-16 md:py-24 bg-white dark:bg-gray-900">
            <div className="max-w-4xl w-full">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-space font-bold mb-12 text-center dark:text-white"
                >
                    Open When...
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            onClick={() => toggleCard(card.id)}
                            className="bg-white dark:bg-gray-800 border-5 border-black dark:border-white shadow-brutal p-6 md:p-8 cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm active:translate-x-[3px] active:translate-y-[3px] transition-all overflow-hidden"
                        >
                            {/* Accent top border */}
                            <div className={`${card.accentBorder} -mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-4`}></div>

                            <h3 className="text-2xl md:text-3xl font-space font-bold mb-4 dark:text-white">
                                {card.title}
                            </h3>

                            <AnimatePresence>
                                {openCard === card.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="border-t-4 border-black dark:border-white pt-4 mt-4">
                                            <p className="text-lg md:text-xl font-inter leading-relaxed whitespace-pre-line dark:text-gray-100">
                                                {card.content}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="mt-4 text-sm md:text-base font-inter text-gray-600 dark:text-gray-400">
                                {openCard === card.id ? '(Click to close)' : '(Click to open)'}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OpenWhen
