import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'

function Finale() {
    const [bgConfetti, setBgConfetti] = useState([])
    const [clicked, setClicked] = useState(false)

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
        setBgConfetti(pieces)
    }, [])

    const handleConfetti = () => {
        setClicked(true)
        const duration = 3000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#FF3D81', '#F5FF00', '#4CC9F0']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#FF3D81', '#F5FF00', '#4CC9F0']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };
        frame();
    }

    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-16 md:py-24 relative overflow-hidden">
            {/* Blocky confetti */}
            {bgConfetti.map((piece) => (
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

            <div className="max-w-4xl w-full relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-white dark:bg-[#0B0B0B] border-5 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-light-lg p-8 md:p-12 w-full max-w-2xl"
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-5xl md:text-7xl font-space font-bold mb-8 text-center text-black dark:text-white">
                            2025
                        </h2>

                        <div className="space-y-6 text-center text-black dark:text-white mb-12">
                            <p className="text-2xl md:text-3xl font-space font-bold">
                                Thank you for choosing me this year.
                            </p>

                            <p className="text-2xl md:text-3xl font-space font-bold">
                                Let's see what the next one brings.
                            </p>
                        </div>

                        {!clicked ? (
                            <button
                                onClick={handleConfetti}
                                className="bg-[#FF3D81] text-white border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-light px-8 py-4 text-2xl font-space font-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm dark:hover:shadow-brutal-light-sm transition-all"
                            >
                                CLICK FOR A SURPRISE
                            </button>
                        ) : (
                            <motion.div 
                                initial={{ scale: 0, rotate: -10 }}
                                animate={{ scale: 1, rotate: 0 }}
                                className="bg-[#F5FF00] text-black border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-light px-8 py-4 text-2xl font-space font-bold"
                            >
                                I LOVE YOU ❤️
                            </motion.div>
                        )}

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="mt-12 pt-8 border-t-4 border-black dark:border-white w-full"
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
