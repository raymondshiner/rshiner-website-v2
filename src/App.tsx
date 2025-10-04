import { useState } from "react"
import { Button } from "./components/ui/button"
import About from "./sections/About/About"
import Collaborate from "./sections/Collaborate/Collaborate"
import Projects from "./sections/Projects/Projects"

export default function App() {
  const [currentSection, setCurrentSection] = useState<'about' | 'projects' | 'collaborate'>('about')

  return (
    <AppWrapper>
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
      {currentSection === 'about' && <About onCollaborateClick={() => setCurrentSection('collaborate')} />}
      {currentSection === 'projects' && <Projects />}
      {currentSection === 'collaborate' && <Collaborate />}
    </AppWrapper>
  )
}

function Navigation({ currentSection, setCurrentSection }: {
  currentSection: 'about' | 'projects' | 'collaborate'
  setCurrentSection: (section: 'about' | 'projects' | 'collaborate') => void
}) {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-10 bg-background/80 backdrop-blur-sm border rounded-full px-6 py-2">
      <div className="flex gap-4">
        <Button
          variant={currentSection === 'about' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setCurrentSection('about')}
        >
          About
        </Button>
        <Button
          variant={currentSection === 'projects' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setCurrentSection('projects')}
        >
          Projects
        </Button>
        <Button
          variant={currentSection === 'collaborate' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setCurrentSection('collaborate')}
        >
          Collaborate
        </Button>
      </div>
    </nav>
  )
}

function AppWrapper({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen">
    {children}
  </div>
}