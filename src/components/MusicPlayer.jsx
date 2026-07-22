import { motion, AnimatePresence } from 'framer-motion'

export default function MusicPlayer({ isPlaying, togglePlay, showWidgets }) {
    return (
        <AnimatePresence>
            {showWidgets && (
                <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    onClick={togglePlay}
                    className="fixed bottom-4 right-4 z-50 flex items-center bg-white dark:bg-[#0B0B0B] border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-light p-2 pr-4 gap-3 cursor-pointer hover:-translate-y-1 hover:-translate-x-1 hover:shadow-brutal-lg dark:hover:shadow-brutal-light-lg transition-transform"
                >
                    {/* Spinning Vinyl Disc */}
                    <motion.div 
                        className="w-12 h-12 rounded-full border-2 border-black dark:border-white bg-black dark:bg-gray-800 flex items-center justify-center relative overflow-hidden"
                        animate={{ rotate: isPlaying ? 360 : 0 }}
                        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                    >
                        {/* Vinyl Grooves */}
                        <div className="absolute w-8 h-8 rounded-full border border-gray-600 opacity-50"></div>
                        <div className="absolute w-10 h-10 rounded-full border border-gray-600 opacity-50"></div>
                        {/* Center Record Label */}
                        <div className="w-5 h-5 rounded-full bg-electric-pink border-2 border-black flex items-center justify-center z-10">
                            {/* Spindle hole */}
                            <div className="w-1.5 h-1.5 bg-white dark:bg-black rounded-full"></div>
                        </div>
                    </motion.div>
                    
                    {/* Track Info & Controls */}
                    <div className="flex flex-col justify-center">
                        <p className="font-space font-bold text-sm text-black dark:text-white uppercase tracking-wider mb-0.5 leading-none">
                            {isPlaying ? 'PLAYING' : 'PAUSED'}
                        </p>
                        <div className="flex items-center gap-1.5">
                            <span className="text-sm leading-none text-black dark:text-white">
                                {isPlaying ? '⏸' : '▶'}
                            </span>
                            <span className="font-inter text-xs text-gray-600 dark:text-gray-400 font-bold whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px]">
                                Here With Me
                            </span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
