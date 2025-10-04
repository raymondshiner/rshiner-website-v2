import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  image: string
}

export default function Projects() {
  return (
    <MainWrapper>
      <Title />
      <ProjectGrid />
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
    <div className="text-5xl font-bold underline">
      Projects
    </div>
  )
}

function ProjectGrid() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and inventory management.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://your-ecommerce-demo.com",
      image: "/project1.jpg"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://your-task-manager.com",
      image: "/project2.jpg"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current conditions and forecasts for multiple locations with beautiful data visualizations.",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind"],
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      liveUrl: "https://your-weather-app.com",
      image: "/project3.jpg"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and optimized performance.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://your-portfolio.com",
      image: "/project4.jpg"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="text-sm">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string, index: number) => (
            <span
              key={index}
              className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-1" />
            Code
          </a>
        </Button>
        <Button size="sm" asChild>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-1" />
            Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}