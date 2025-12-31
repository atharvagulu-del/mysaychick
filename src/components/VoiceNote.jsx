import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'

function VoiceNote() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [hasPlayed, setHasPlayed] = useState(false)
    const [showReveal, setShowReveal] = useState(false)
    const audioRef = useRef(null)

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play()
            setIsPlaying(true)
            setHasPlayed(true)
        }
    }

    const handleAudioEnd = () => {
        setIsPlaying(false)
        setShowReveal(true)
    }

    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-16 md:py-24 bg-white dark:bg-[#0B0B0B]">
            <div className="max-w-3xl w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-black dark:bg-white border-5 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-light-lg p-8 md:p-12 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-space font-bold text-white dark:text-black mb-8">
                        The Moment Everything Changed
                    </h2>

                    <div className="bg-white dark:bg-[#0B0B0B] border-4 border-black dark:border-black p-8 md:p-10 mb-8">
                        <p className="text-3xl md:text-5xl font-space font-bold text-black dark:text-white mb-2">
                            December 2024
                        </p>
                        <p className="text-2xl md:text-4xl font-space font-bold text-gray-600 dark:text-gray-400">
                            21:18
                        </p>
                    </div>

                    {/* Audio Element (hidden) */}
                    <audio
                        ref={audioRef}
                        src="/audio/iloveyou-anya.mp3"
                        onEnded={handleAudioEnd}
                        preload="none"
                    />

                    {/* Play Button */}
                    {!hasPlayed && (
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handlePlay}
                            className="bg-electric-pink border-4 border-black dark:border-black shadow-brutal dark:shadow-brutal-sm px-12 py-6 font-space font-bold text-2xl md:text-3xl text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                        >
                            PLAY
                        </motion.button>
                    )}

                    {/* Playing State */}
                    <AnimatePresence>
                        {isPlaying && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4 }}
                            >
                                <p className="text-lg md:text-xl font-inter text-white dark:text-black mt-6">
                                    I kept this.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Reveal After Audio */}
                    <AnimatePresence>
                        {showReveal && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="mt-8 pt-8 border-t-4 border-white dark:border-black"
                            >
                                <p className="text-2xl md:text-3xl font-space font-bold text-white dark:text-black">
                                    I love you too. Still.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}

export default VoiceNote
