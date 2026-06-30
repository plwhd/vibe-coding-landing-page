import { useState } from 'react'
import Awards from './components/Awards.jsx'
import FloatingActions from './components/FloatingActions.jsx'
import FooterCta from './components/FooterCta.jsx'
import Hero from './components/Hero.jsx'
import Highlights from './components/Highlights.jsx'
import Jobs from './components/Jobs.jsx'
import JoinQiniu from './components/JoinQiniu.jsx'
import Navbar from './components/Navbar.jsx'
import Rules from './components/Rules.jsx'
import SignupModal from './components/SignupModal.jsx'
import Timeline from './components/Timeline.jsx'
import Topics from './components/Topics.jsx'
import Winners from './components/Winners.jsx'

export default function App() {
  const [signupOpen, setSignupOpen] = useState(false)
  const openSignup = () => setSignupOpen(true)
  const closeSignup = () => setSignupOpen(false)

  return (
    <div className="min-h-screen bg-[#fffdfa] text-ink">
      <Navbar onSignup={openSignup} />
      <main>
        <Hero onSignup={openSignup} />
        <Highlights />
        <Jobs onSignup={openSignup} />
        <Timeline />
        <Topics />
        <Awards />
        <Rules />
        <Winners />
        <JoinQiniu />
      </main>
      <FooterCta onSignup={openSignup} />
      <FloatingActions onSignup={openSignup} />
      <SignupModal open={signupOpen} onClose={closeSignup} />
    </div>
  )
}
