import { useEffect, useState } from "react"
import { Button } from "./components/ui/button"
import About from "./sections/About/About"
import Collaborate from "./sections/Collaborate/Collaborate"
import Customize from "./sections/Customize/Customize"
import Projects from "./sections/Projects/Projects"

// Color themes definition (same as in Customize component)
const colorThemes = [
  { name: "White", primary: "oklch(0.985 0 0)", primaryForeground: "oklch(0.205 0 0)", ring: "oklch(0.985 0 0)" },
  { name: "Blue", primary: "oklch(0.488 0.243 264.376)", primaryForeground: "oklch(0.985 0 0)", ring: "oklch(0.488 0.243 264.376)" },
  { name: "Green", primary: "oklch(0.518 0.177 142.495)", primaryForeground: "oklch(0.985 0 0)", ring: "oklch(0.518 0.177 142.495)" },
  { name: "Purple", primary: "oklch(0.627 0.265 303.9)", primaryForeground: "oklch(0.985 0 0)", ring: "oklch(0.627 0.265 303.9)" },
  { name: "Orange", primary: "oklch(0.646 0.222 41.116)", primaryForeground: "oklch(0.985 0 0)", ring: "oklch(0.646 0.222 41.116)" },
  { name: "Pink", primary: "oklch(0.645 0.246 16.439)", primaryForeground: "oklch(0.985 0 0)", ring: "oklch(0.645 0.246 16.439)" },
  { name: "Yellow", primary: "oklch(0.769 0.188 70.08)", primaryForeground: "oklch(0.205 0 0)", ring: "oklch(0.769 0.188 70.08)" },
  { name: "Red", primary: "oklch(0.704 0.191 22.216)", primaryForeground: "oklch(0.985 0 0)", ring: "oklch(0.704 0.191 22.216)" },
  { name: "Teal", primary: "oklch(0.6 0.118 184.704)", primaryForeground: "oklch(0.985 0 0)", ring: "oklch(0.6 0.118 184.704)" }
]

export default function App() {
  const [currentSection, setCurrentSection] = useState<'about' | 'projects' | 'collaborate' | 'customize'>('about')

  // Load saved theme on app startup
  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme') || 'White'
    const theme = colorThemes.find(t => t.name === savedTheme)
    if (theme) {
      const root = document.documentElement
      root.style.setProperty('--primary', theme.primary)
      root.style.setProperty('--primary-foreground', theme.primaryForeground)
      root.style.setProperty('--ring', theme.ring)
    }
  }, [])

  return (
    <AppWrapper>
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
      {currentSection === 'about' && <About onCollaborateClick={() => setCurrentSection('collaborate')} />}
      {currentSection === 'projects' && <Projects />}
      {currentSection === 'collaborate' && <Collaborate />}
      {currentSection === 'customize' && <Customize />}
    </AppWrapper>
  )
}

function Navigation({ currentSection, setCurrentSection }: {
  currentSection: 'about' | 'projects' | 'collaborate' | 'customize'
  setCurrentSection: (section: 'about' | 'projects' | 'collaborate' | 'customize') => void
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
        <Button
          variant={currentSection === 'customize' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setCurrentSection('customize')}
        >
          Customize
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