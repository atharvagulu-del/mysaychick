import { motion } from 'framer-motion'
import { useState } from 'react'

function WhyYou() {
    const [flipped, setFlipped] = useState({})

    const reasons = [
        {
            front: 'You listen',
            back: 'Not just to respond. Actually listen. That\'s rare.'
        },
        {
            front: 'You\'re honest',
            back: 'Even when it\'s uncomfortable. I trust that.'
        },
        {
            front: 'You make me think',
            back: 'About things I wouldn\'t have considered on my own.'
        },
        {
            front: 'You\'re patient',
            back: 'With the distance. With me. With this whole thing.'
        },
        {
            front: 'You\'re yourself',
            back: 'Not trying to be someone else. Just you. That\'s enough.'
        },
        {
            front: 'You stayed',
            back: 'When it would\'ve been easier to leave. You stayed.'
        }
    ]

    const toggleFlip = (index) => {
        setFlipped(prev => ({ ...prev, [index]: !prev[index] }))
    }

    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-16 md:py-24">
            <div className="max-w-6xl w-full">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-space font-bold mb-12 text-center text-black dark:text-white"
                >
                    Why I choose you
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            onClick={() => toggleFlip(index)}
                            className="cursor-pointer perspective-1000"
                        >
                            <motion.div
                                animate={{ rotateY: flipped[index] ? 180 : 0 }}
                                transition={{ duration: 0.6 }}
                                className="relative preserve-3d"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Front */}
                                <div
                                    className={`bg-white dark:bg-[#0B0B0B] border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-light p-8 min-h-[200px] flex items-center justify-center ${flipped[index] ? 'invisible' : 'visible'
                                        }`}
                                    style={{ backfaceVisibility: 'hidden' }}
                                >
                                    <h3 className="text-2xl md:text-3xl font-space font-bold text-center text-black dark:text-white">
                                        {reason.front}
                                    </h3>
                                </div>

                                {/* Back */}
                                <div
                                    className={`bg-electric-pink border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-light p-8 min-h-[200px] flex items-center justify-center absolute top-0 left-0 w-full ${flipped[index] ? 'visible' : 'invisible'
                                        }`}
                                    style={{
                                        backfaceVisibility: 'hidden',
                                        transform: 'rotateY(180deg)'
                                    }}
                                >
                                    <p className="text-lg md:text-xl font-inter text-center text-white">
                                        {reason.back}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="text-center text-lg md:text-xl font-inter mt-8 text-gray-600 dark:text-gray-400"
                >
                    (Tap the cards)
                </motion.p>
            </div>
        </section>
    )
}

export default WhyYou
