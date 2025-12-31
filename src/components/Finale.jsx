import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function Finale() {
    const [confetti, setConfetti] = useState([])

    useEffect(() => {
        // Generate blocky confetti pieces
        const pieces = []
        for (let i = 0; i < 30; i++) {
            pieces.push({
                id: i,
                x: Math.random() * 100,
                delay: Math.random() * 2,
                duration: 3 + Math.random() * 2,
                color: ['#FF3D81', '#F5FF00', '#4CC9F0'][Math.floor(Math.random() * 3)]
            })
        }
        setConfetti(pieces)
    }, [])

    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-16 md:py-24 relative overflow-hidden">
            {/* Blocky confetti */}
            {confetti.map((piece) => (
                <motion.div
                    key={piece.id}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{
                        y: window.innerHeight + 100,
                        opacity: [0, 1, 1, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        delay: piece.delay,
                        duration: piece.duration,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute w-4 h-4 md:w-6 md:h-6 border-2 border-black dark:border-white"
                    style={{
                        left: `${piece.x}%`,
                        backgroundColor: piece.color
                    }}
                />
            ))}

            <div className="max-w-4xl w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-white dark:bg-[#0B0B0B] border-5 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-light-lg p-8 md:p-12"
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-space font-bold mb-8 text-center text-black dark:text-white">
                            2025
                        </h2>

                        <div className="space-y-6 text-center text-black dark:text-white">
                            <p className="text-2xl md:text-3xl font-space font-bold">
                                Thank you for choosing me this year.
                            </p>

                            <p className="text-2xl md:text-3xl font-space font-bold">
                                Let's see what the next one brings.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="mt-12 pt-8 border-t-4 border-black dark:border-white"
                        >
                            <p className="text-lg md:text-xl font-inter text-center text-gray-700 dark:text-gray-300">
                                From Atharv, with intention.
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Finale
