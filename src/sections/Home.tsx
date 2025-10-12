import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Globe, Lightbulb, Rocket, Users } from "lucide-react"

interface HomeProps {
  onCollaborateClick?: () => void
  onViewWorkClick?: () => void
}

interface Skill {
  icon: React.ElementType
  title: string
  description: string
  skills: string[]
}

interface Experience {
  title: string
  company: string
  period: string
  description: string
}

interface Value {
  icon: React.ElementType
  title: string
  description: string
}

export default function Home({ onCollaborateClick, onViewWorkClick }: HomeProps) {
  return (
    <MainWrapper>
      <HeroSection onCollaborateClick={onCollaborateClick} onViewWorkClick={onViewWorkClick} />
      <SkillsSection />
      <ExperienceSection />
      <ValuesSection />
    </MainWrapper>
  )
}

function MainWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-[12.5%] py-4 pt-20 space-y-20 min-h-screen">
      {children}
    </div>
  )
}

function HeroSection({ onCollaborateClick, onViewWorkClick }: { onCollaborateClick?: () => void, onViewWorkClick?: () => void }) {
  return (
    <section className="flex flex-col justify-center items-center text-center space-y-8 min-h-[80vh]">
      <Title />
      <SelfPortrait />
      <Description />
      <CallToAction onCollaborateClick={onCollaborateClick} onViewWorkClick={onViewWorkClick} />
    </section>
  )
}

function Title() {
  return (
    <div className="space-y-4">
      <h1 className="text-6xl font-bold border-b-4 border-primary pb-4">
        Raymond Shiner
      </h1>
      <p className="text-2xl md:text-3xl text-muted-foreground">
        Full-Stack Developer & System Architect
      </p>
    </div>
  )
}

function SelfPortrait() {
  return (
    <div className="relative">
      <img
        src="/self-portrait.jpg"
        alt="Raymond Shiner - Full-Stack Developer"
        className="rounded-2xl w-80 h-80 object-cover border-4 border-border shadow-2xl"
      />
      <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
        Available for work
      </div>
    </div>
  )
}

function Description() {
  return (
    <div className="max-w-4xl space-y-6">
      <p className="text-xl md:text-2xl leading-relaxed">
        Hello! I'm a passionate developer with a love for creating <span className="text-primary font-semibold">strong systems</span> and <span className="text-primary font-semibold">innovative solutions</span>.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed">
        With a background in both development and management, I bring a unique perspective to every project I undertake.
        I specialize in building scalable applications, optimizing performance, and leading technical teams to deliver
        exceptional results.
      </p>
    </div>
  )
}

function CallToAction({ onCollaborateClick, onViewWorkClick }: { onCollaborateClick?: () => void, onViewWorkClick?: () => void }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button size="lg" onClick={onCollaborateClick} className="text-lg px-8 py-6">
        Let's Collaborate
      </Button>
      <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={onViewWorkClick}>
        View My Work
      </Button>
    </div>
  )
}

function SkillsSection() {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Vite"]
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL"]
    },
    {
      icon: Globe,
      title: "Cloud & DevOps",
      description: "AWS, Docker, CI/CD, Kubernetes",
      skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform", "Nginx"]
    }
  ]

  return (
    <section className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold border-b-4 border-primary pb-2 inline-block">
          Technical Expertise
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  )
}

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="text-xl">{skill.title}</CardTitle>
        <CardDescription className="text-base">{skill.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skill.skills.map((tech: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading development of scalable web applications, mentoring junior developers, and architecting cloud-native solutions."
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Solutions Co.",
      period: "2020 - 2022",
      description: "Built responsive web applications, optimized database performance, and collaborated with cross-functional teams."
    },
    {
      title: "Frontend Developer",
      company: "Creative Agency",
      period: "2018 - 2020",
      description: "Developed engaging user interfaces, implemented responsive designs, and improved website performance."
    }
  ]

  return (
    <section className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold border-b-4 border-primary pb-2 inline-block">
          Experience
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          My professional journey in software development
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </section>
  )
}

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle className="text-xl">{experience.title}</CardTitle>
            <CardDescription className="text-lg font-medium text-primary">
              {experience.company}
            </CardDescription>
          </div>
          <span className="text-muted-foreground font-medium mt-2 sm:mt-0">
            {experience.period}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">
          {experience.description}
        </p>
      </CardContent>
    </Card>
  )
}

function ValuesSection() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions to complex problems."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Believing that the best results come from working together and sharing knowledge."
    },
    {
      icon: Rocket,
      title: "Excellence",
      description: "Committed to delivering high-quality code and exceptional user experiences."
    }
  ]

  return (
    <section className="space-y-12 pb-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold border-b-4 border-primary pb-2 inline-block">
          What Drives Me
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          The principles that guide my work and approach to development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <ValueCard key={index} value={value} />
        ))}
      </div>
    </section>
  )
}

function ValueCard({ value }: { value: Value }) {
  const Icon = value.icon

  return (
    <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="text-xl">{value.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">
          {value.description}
        </p>
      </CardContent>
    </Card>
  )
}

