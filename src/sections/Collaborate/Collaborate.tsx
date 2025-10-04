import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Collaborate() {
  return (
    <MainWrapper>
      <Title />
      <ContactInfo />
      <ContactCards />
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
    <div className="text-5xl font-bold underline text-primary">
      Let's Collaborate
    </div>
  )
}

function ContactInfo() {
  return (
    <div className="text-center max-w-2xl">
      <p className="text-lg mb-4">
        I'm always excited to work on new projects and collaborate with fellow developers, designers, and innovators.
      </p>
      <p className="text-muted-foreground">
        Whether you have a project idea, need technical consultation, or just want to connect, I'd love to hear from you!
      </p>
    </div>
  )
}

function ContactCards() {
  const contactMethods = [
    {
      title: "Email",
      description: "Send me a direct message",
      icon: Mail,
      value: "your.email@example.com",
      action: "mailto:your.email@example.com",
      buttonText: "Send Email"
    },
    {
      title: "GitHub",
      description: "Check out my repositories",
      icon: Github,
      value: "github.com/yourusername",
      action: "https://github.com/yourusername",
      buttonText: "View Profile"
    },
    {
      title: "LinkedIn",
      description: "Connect professionally",
      icon: Linkedin,
      value: "linkedin.com/in/yourprofile",
      action: "https://linkedin.com/in/yourprofile",
      buttonText: "Connect"
    },
    {
      title: "Phone",
      description: "Let's have a conversation",
      icon: Phone,
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      buttonText: "Call"
    }
  ]

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {contactMethods.map((method, index) => (
          <ContactCard key={index} method={method} />
        ))}
      </div>
      <LocationInfo />
    </div>
  )
}

function ContactCard({ method }: {
  method: {
    title: string
    description: string
    icon: React.ElementType
    value: string
    action: string
    buttonText: string
  }
}) {
  const Icon = method.icon

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="text-center">
        <div className="mx-auto mb-2 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{method.title}</CardTitle>
        <CardDescription>{method.description}</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-sm text-muted-foreground mb-4">{method.value}</p>
        <Button asChild className="w-full">
          <a href={method.action} target={method.action.startsWith('http') ? '_blank' : undefined} rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}>
            {method.buttonText}
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}

function LocationInfo() {
  return (
    <Card className="max-w-md w-full">
      <CardHeader className="text-center">
        <div className="mx-auto mb-2 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <MapPin className="w-6 h-6 text-primary" />
        </div>
        <CardTitle>Location</CardTitle>
        <CardDescription>Currently based in</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-sm text-muted-foreground">
          San Francisco, CA
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Available for remote work worldwide
        </p>
      </CardContent>
    </Card>
  )
}