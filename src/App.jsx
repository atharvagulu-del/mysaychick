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

function App() {
    return (
        <div className="min-h-screen bg-[#F9F9F9] dark:bg-[#0B0B0B] transition-colors duration-300">
            <Hero />
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
