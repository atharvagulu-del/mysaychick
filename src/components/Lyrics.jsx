import { motion } from 'framer-motion'
import { useEffect, useRef, memo, useMemo } from 'react'

// Exact synced lyrics from LRC
const LYRICS_DATA = [
    { time: 29.92, text: "Watch the sunrise along the coast" },
    { time: 34.58, text: "As we're both getting old" },
    { time: 39.54, text: "I can't describe what I'm feeling" },
    { time: 45.28, text: "And all I know is we're going home" },
    { time: 49.35, text: "So please don't let me go" },
    { time: 54.03, text: "Don't let me go, oh" },
    { time: 57.97, text: "And if it's right" },
    { time: 60.87, text: "I don't care how long it takes" },
    { time: 67.75, text: "As long as I'm with you, I've got a smile on my face" },
    { time: 75.26, text: "Save your tears, it'll be okay" },
    { time: 83.66, text: "All I know is you're here with me" },
    { time: 94.05, text: "Oh, oh, oh, oh-oh" },
    { time: 106.26, text: "Watch the sunrise as we're getting old, oh-oh" },
    { time: 117.12, text: "I can't describe, oh-oh" },
    { time: 122.09, text: "I wish I could live through every memory again" },
    { time: 130.33, text: "Just one more time before we float off in the wind" },
    { time: 136.85, text: "And all the time we spent waiting for the light to take us in" },
    { time: 144.94, text: "Have been the greatest moments of my life" },
    { time: 151.69, text: "I don't care how long it takes" },
    { time: 158.74, text: "As long as I'm with you, I've got a smile on my face" },
    { time: 166.12, text: "Save your tears, it'll be okay" },
    { time: 178.64, text: "You're here with me" },
    { time: 184.90, text: "Oh, oh, oh, oh-oh" },
    { time: 193.58, text: "I can't describe, oh, oh" }
];

const LyricsUI = memo(({ activeIndex, isPlaying, togglePlay }) => {
    const containerRef = useRef(null)
    const activeLyricRef = useRef(null)

    useEffect(() => {
        if (activeLyricRef.current && containerRef.current) {
            const container = containerRef.current;
            const activeNode = activeLyricRef.current;
            
            // Calculate exact center position
            const targetScrollTop = activeNode.offsetTop - container.offsetHeight / 2 + activeNode.offsetHeight / 2;
            
            container.scrollTo({
                top: targetScrollTop,
                behavior: 'smooth'
            });
        }
    }, [activeIndex])

    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-white dark:bg-[#0B0B0B]">
            <div className="max-w-3xl w-full">
                {/* Lyrics Container with Sticky Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white dark:bg-[#0B0B0B] border-5 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-light-lg h-[70vh] overflow-y-auto no-scrollbar relative flex flex-col"
                    ref={containerRef}
                >
                    {/* Sleek Compact Sticky Header */}
                    <div className="sticky top-0 left-0 right-0 z-20 bg-white/95 dark:bg-[#0B0B0B]/95 backdrop-blur-md border-b-4 border-black dark:border-white p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={togglePlay}
                                className="w-12 h-12 bg-electric-pink border-4 border-black dark:border-white flex items-center justify-center hover:-translate-y-1 hover:-translate-x-1 hover:shadow-brutal-sm dark:hover:shadow-brutal-light-sm transition-transform flex-shrink-0"
                            >
                                <span className="text-xl text-black">{isPlaying ? '⏸' : '▶'}</span>
                            </button>
                            <div>
                                <p className="font-space font-bold uppercase tracking-wider text-xs leading-none text-gray-500 dark:text-gray-400">Our Song</p>
                                <h3 className="text-lg md:text-xl font-bold font-inter leading-none text-black dark:text-white mt-1">Here With Me</h3>
                            </div>
                        </div>

                        {/* Improved Audio Wave Visualizer */}
                        <div className="flex items-end gap-1 h-8 w-16 flex-shrink-0">
                            {[1, 2, 3, 4].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-3 bg-acid-yellow border-2 border-black dark:border-white"
                                    animate={{
                                        height: isPlaying ? ["20%", "100%", "40%", "80%", "20%"] : "20%"
                                    }}
                                    transition={isPlaying ? {
                                        duration: 0.8 + (i * 0.15),
                                        repeat: Infinity,
                                        repeatType: "mirror",
                                        ease: "easeInOut"
                                    } : { duration: 0.3 }}
                                    style={{ height: "20%" }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6 md:space-y-8 py-[30vh] px-8 md:px-12">
                        {LYRICS_DATA.map((lyric, index) => {
                            const isActive = index === activeIndex
                            const isPassed = index < activeIndex

                            return (
                                <motion.div
                                    key={index}
                                    ref={isActive ? activeLyricRef : null}
                                    animate={{
                                        opacity: isActive ? 1 : (isPassed ? 0.4 : 0.2),
                                        scale: isActive ? 1.05 : 1,
                                        x: isActive ? 10 : 0
                                    }}
                                    transition={{ duration: 0.4 }}
                                    className={`text-2xl md:text-4xl font-space font-bold origin-left transition-colors duration-300 ${isActive ? 'text-black dark:text-white drop-shadow-md' : 'text-gray-800 dark:text-gray-200'}`}
                                >
                                    {lyric.text}
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>
                
                <style>{`
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    .no-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style>
            </div>
        </section>
    )
})

export default function Lyrics({ currentTime, isPlaying, togglePlay }) {
    let activeIndex = -1
    for (let i = 0; i < LYRICS_DATA.length; i++) {
        if (currentTime >= LYRICS_DATA[i].time) {
            activeIndex = i
        } else {
            break
        }
    }

    return <LyricsUI activeIndex={activeIndex} isPlaying={isPlaying} togglePlay={togglePlay} />
}

