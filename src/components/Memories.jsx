import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

function Memories() {
    const initialMemories = [
        {
            id: 1,
            image: '/memories/anya-cool.png',
            caption: 'You being effortlessly you.'
        },
        {
            id: 2,
            image: '/memories/anya-calm.png',
            caption: 'This one feels quiet. I like that.'
        },
        {
            id: 3,
            image: '/memories/anya-goofy.png',
            caption: 'You being you. I love youuuuuu.'
        }
    ]

    const [memories, setMemories] = useState(initialMemories)

    const handleDragEnd = (event, info, id) => {
        const threshold = 100
        if (Math.abs(info.offset.x) > threshold || Math.abs(info.offset.y) > threshold) {
            setMemories(prev => {
                const newMemories = [...prev]
                const draggedItem = newMemories.shift()
                newMemories.push(draggedItem)
                return newMemories
            })
        }
    }

    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-16 md:py-24 overflow-hidden relative">
            <div className="max-w-3xl w-full flex flex-col items-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-space font-bold mb-16 text-center text-black dark:text-white"
                >
                    Moments I Keep
                </motion.h2>

                <div className="relative w-full max-w-sm md:max-w-md h-[55vh] flex items-center justify-center perspective-[1000px]">
                    <AnimatePresence>
                        {memories.map((memory, index) => {
                            const isTop = index === 0;
                            const rotateOffset = (memory.id % 2 === 0 ? 1 : -1) * (memory.id * 3);
                            
                            return (
                                <motion.div
                                    key={memory.id}
                                    layout
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ 
                                        scale: 1 - index * 0.05,
                                        y: index * 12,
                                        opacity: 1 - (index * 0.15),
                                        rotate: isTop ? 0 : rotateOffset,
                                        zIndex: memories.length - index
                                    }}
                                    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                                    drag={isTop}
                                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                    dragElastic={1}
                                    onDragEnd={(e, info) => isTop && handleDragEnd(e, info, memory.id)}
                                    whileTap={isTop ? { scale: 1.05, cursor: "grabbing" } : {}}
                                    className={`absolute bg-white dark:bg-[#0B0B0B] border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-light-lg p-4 flex flex-col cursor-grab`}
                                    style={{ width: '100%' }}
                                >
                                    <div className="relative overflow-hidden border-2 border-black dark:border-gray-700 bg-gray-100 dark:bg-gray-800 flex items-center justify-center min-h-[300px]">
                                        <img
                                            src={memory.image}
                                            alt="Memory"
                                            className="w-full h-auto object-cover pointer-events-none"
                                            style={{ maxHeight: '40vh' }}
                                        />
                                    </div>
                                    <div className="mt-4 text-center pb-2 bg-white dark:bg-[#0B0B0B]">
                                        <p className="text-xl md:text-2xl font-space font-bold text-black dark:text-white">
                                            {memory.caption}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </div>
                
                <p className="text-center text-lg font-inter mt-16 text-gray-600 dark:text-gray-400 font-bold tracking-wider uppercase">
                    (Drag photo to reveal the next)
                </p>
            </div>
        </section>
    )
}

export default Memories
