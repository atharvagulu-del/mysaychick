import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

function Memories() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showCaption, setShowCaption] = useState(false)

    const memories = [
        {
            image: '/memories/anya-cool.png',
            caption: 'You being effortlessly you.'
        },
        {
            image: '/memories/anya-calm.png',
            caption: 'This one feels quiet. I like that.'
        },
        {
            image: '/memories/anya-goofy.png',
            caption: 'You being you. I love youuuuuu.'
        }
    ]

    const handleNext = () => {
        setShowCaption(false)
        setCurrentIndex((prev) => (prev + 1) % memories.length)
    }

    const handlePrev = () => {
        setShowCaption(false)
        setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length)
    }

    const handleImageClick = () => {
        setShowCaption(!showCaption)
    }

    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-16 md:py-24">
            <div className="max-w-3xl w-full">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-space font-bold mb-12 text-center text-black dark:text-white"
                >
                    Moments I Keep
                </motion.h2>

                <div className="relative">
                    {/* Image Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-[#0B0B0B] border-5 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-light-lg overflow-hidden"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -100, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={handleImageClick}
                                className="cursor-pointer"
                            >
                                <img
                                    src={memories[currentIndex].image}
                                    alt={`Memory ${currentIndex + 1}`}
                                    className="w-full h-auto object-cover"
                                    style={{ maxHeight: '70vh' }}
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Caption Overlay */}
                        <AnimatePresence>
                            {showCaption && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute bottom-0 left-0 right-0 bg-black dark:bg-white border-t-4 border-black dark:border-white p-6 md:p-8"
                                >
                                    <p className="text-xl md:text-2xl font-space font-bold text-white dark:text-black text-center">
                                        {memories[currentIndex].caption}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between items-center mt-6 gap-4">
                        <button
                            onClick={handlePrev}
                            className="bg-white dark:bg-[#0B0B0B] border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-light px-6 py-3 font-space font-bold text-xl text-black dark:text-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg dark:hover:shadow-brutal-light-lg transition-transform"
                        >
                            ← PREV
                        </button>

                        <div className="flex gap-2">
                            {memories.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-4 h-4 border-3 border-black dark:border-white ${index === currentIndex ? 'bg-black dark:bg-white' : 'bg-white dark:bg-[#0B0B0B]'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            className="bg-white dark:bg-[#0B0B0B] border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-light px-6 py-3 font-space font-bold text-xl text-black dark:text-white hover:translate-x-[2px] hover:translate-y-[-2px] hover:shadow-brutal-lg dark:hover:shadow-brutal-light-lg transition-transform"
                        >
                            NEXT →
                        </button>
                    </div>

                    <p className="text-center text-lg font-inter mt-6 text-gray-600 dark:text-gray-400">
                        (Tap the image to see the caption)
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Memories
