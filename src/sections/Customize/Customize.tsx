import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Palette } from "lucide-react"
import { useEffect, useState } from "react"

interface ColorTheme {
  name: string
  primary: string
  primaryForeground: string
  ring: string
  displayColor: string
}

const colorThemes: ColorTheme[] = [
  {
    name: "White",
    primary: "oklch(0.985 0 0)",
    primaryForeground: "oklch(0.205 0 0)",
    ring: "oklch(0.985 0 0)",
    displayColor: "#ffffff"
  },
  {
    name: "Blue",
    primary: "oklch(0.488 0.243 264.376)",
    primaryForeground: "oklch(0.985 0 0)",
    ring: "oklch(0.488 0.243 264.376)",
    displayColor: "#3b82f6"
  },
  {
    name: "Green",
    primary: "oklch(0.518 0.177 142.495)",
    primaryForeground: "oklch(0.985 0 0)",
    ring: "oklch(0.518 0.177 142.495)",
    displayColor: "#10b981"
  },
  {
    name: "Purple",
    primary: "oklch(0.627 0.265 303.9)",
    primaryForeground: "oklch(0.985 0 0)",
    ring: "oklch(0.627 0.265 303.9)",
    displayColor: "#8b5cf6"
  },
  {
    name: "Orange",
    primary: "oklch(0.646 0.222 41.116)",
    primaryForeground: "oklch(0.985 0 0)",
    ring: "oklch(0.646 0.222 41.116)",
    displayColor: "#f97316"
  },
  {
    name: "Pink",
    primary: "oklch(0.645 0.246 16.439)",
    primaryForeground: "oklch(0.985 0 0)",
    ring: "oklch(0.645 0.246 16.439)",
    displayColor: "#ec4899"
  },
  {
    name: "Yellow",
    primary: "oklch(0.769 0.188 70.08)",
    primaryForeground: "oklch(0.205 0 0)",
    ring: "oklch(0.769 0.188 70.08)",
    displayColor: "#eab308"
  },
  {
    name: "Red",
    primary: "oklch(0.704 0.191 22.216)",
    primaryForeground: "oklch(0.985 0 0)",
    ring: "oklch(0.704 0.191 22.216)",
    displayColor: "#ef4444"
  },
  {
    name: "Teal",
    primary: "oklch(0.6 0.118 184.704)",
    primaryForeground: "oklch(0.985 0 0)",
    ring: "oklch(0.6 0.118 184.704)",
    displayColor: "#14b8a6"
  }
]

export default function Customize() {
  const [selectedTheme, setSelectedTheme] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedTheme') || 'White'
    }
    return 'White'
  })

  useEffect(() => {
    const theme = colorThemes.find(t => t.name === selectedTheme)
    if (theme) {
      applyTheme(theme)
    }
  }, [selectedTheme])

  const applyTheme = (theme: ColorTheme) => {
    const root = document.documentElement
    root.style.setProperty('--primary', theme.primary)
    root.style.setProperty('--primary-foreground', theme.primaryForeground)
    root.style.setProperty('--ring', theme.ring)

    // Store in localStorage
    localStorage.setItem('selectedTheme', theme.name)
  }

  const handleThemeChange = (theme: ColorTheme) => {
    setSelectedTheme(theme.name)
  }

  return (
    <MainWrapper>
      <Title />
      <Description />
      <ColorPicker
        selectedTheme={selectedTheme}
        onThemeChange={handleThemeChange}
      />
      <PreviewSection />
    </MainWrapper>
  )
}

function MainWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto p-4 pt-20 flex flex-col justify-center items-center min-h-screen gap-8">
      {children}
    </div>
  )
}

function Title() {
  return (
    <div className="text-5xl font-bold border-b-4 border-primary pb-2">
      Customize
    </div>
  )
}

function Description() {
  return (
    <div className="text-center max-w-2xl">
      <p className="text-lg mb-4">
        Personalize your experience by choosing your favorite accent color.
      </p>
      <p className="text-muted-foreground">
        Select from the color palette below to change the primary color of buttons, links, and highlights throughout the application.
      </p>
    </div>
  )
}

function ColorPicker({ selectedTheme, onThemeChange }: {
  selectedTheme: string
  onThemeChange: (theme: ColorTheme) => void
}) {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="text-center">
        <div className="mx-auto mb-2 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Palette className="w-6 h-6 text-primary" />
        </div>
        <CardTitle>Color Themes</CardTitle>
        <CardDescription>
          Choose your preferred accent color from the options below
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-6 justify-items-center">
          {colorThemes.map((theme) => (
            <ColorCircle
              key={theme.name}
              theme={theme}
              isSelected={selectedTheme === theme.name}
              onClick={() => onThemeChange(theme)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function ColorCircle({ theme, isSelected, onClick }: {
  theme: ColorTheme
  isSelected: boolean
  onClick: () => void
}) {
  const isWhite = theme.name === 'White'

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={onClick}
        className={`
          relative w-16 h-16 rounded-full border-4 transition-all duration-200 hover:scale-110
          ${isSelected ? 'border-foreground shadow-lg' : 'border-border hover:border-muted-foreground'}
          ${isWhite ? 'ring-1 ring-border' : ''}
        `}
        style={{ backgroundColor: theme.displayColor }}
        aria-label={`Select ${theme.name} theme`}
      >
        {isSelected && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Check className={`w-6 h-6 drop-shadow-lg ${isWhite ? 'text-black' : 'text-white'}`} />
          </div>
        )}
      </button>
      <span className={`text-sm font-medium ${isSelected ? 'text-primary' : 'text-muted-foreground'}`}>
        {theme.name}
      </span>
    </div>
  )
}

function PreviewSection() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Preview</CardTitle>
        <CardDescription>
          See how your selected color looks with different elements
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-3">
          <Button>Primary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="secondary">Secondary Button</Button>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-2">Primary Text Color</h3>
          <p className="text-muted-foreground">
            This is how your selected color will appear in headings and primary text elements throughout the application.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          Your selected accent color
        </div>
      </CardContent>
    </Card>
  )
}