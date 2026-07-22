import { useState, useRef, useEffect } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import Hero from './components/Hero'
import OneYear from './components/OneYear'
import Letter from './components/Letter'
import Distance from './components/Distance'
import WhyYou from './components/WhyYou'
import Memories from './components/Memories'
import VoiceNote from './components/VoiceNote'
import LeaveTrace from './components/LeaveTrace'
import OpenWhen from './components/OpenWhen'
import UntilWeMeet from './components/UntilWeMeet'
import Finale from './components/Finale'
import ThemeToggle from './components/ThemeToggle'
import CustomCursor from './components/CustomCursor'
import Lyrics from './components/Lyrics'

function App() {
    // --- Audio State ---
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const audioRef = useRef(null)

    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio('/our-song.mp3')
            audioRef.current.loop = true
        }

        const updateTime = () => setCurrentTime(audioRef.current.currentTime)
        audioRef.current.addEventListener('timeupdate', updateTime)

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('timeupdate', updateTime)
                audioRef.current.pause()
            }
        }
    }, [])

    const togglePlay = () => {
        if (!audioRef.current) return
        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play().catch(e => console.log('Audio playback failed', e))
        }
        setIsPlaying(!isPlaying)
    }

    // --- Scroll & Widgets State ---
    const { scrollY } = useScroll()
    const [showWidgets, setShowWidgets] = useState(true)

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious()
        if (latest > previous && latest > 150) {
            // Scrolling down -> hide widgets
            setShowWidgets(false)
        } else {
            // Scrolling up -> show widgets
            setShowWidgets(true)
        }
    })

    return (
        <div className="min-h-screen bg-[#F9F9F9] dark:bg-[#0B0B0B] transition-colors duration-300">
            <CustomCursor />
            <ThemeToggle showWidgets={showWidgets} />
            
            <Hero />
            <Lyrics currentTime={currentTime} isPlaying={isPlaying} togglePlay={togglePlay} />
            <OneYear />
            <Letter />
            <Distance />
            <WhyYou />
            <Memories />
            <VoiceNote />
            <LeaveTrace />
            <OpenWhen />
            <UntilWeMeet />
            <Finale />
        </div>
    )
}

export default App
