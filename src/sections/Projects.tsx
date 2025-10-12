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

const projects = [
  {
    title: "Portfolio Website - v2",
    description: "The source code for this website",
    technologies: ["React", "Typescript", "TailwindCSS", "ShadCN"],
    githubUrl: "https://github.com/raymondshiner/rshiner-website-v2",
    liveUrl: "https://www.raymondshiner.com",
    image: "/projects/rshiner-website-v2.png"
  },
  {
    title: "Portfolio Website - v1",
    description: "The first version of my portfolio website",
    technologies: ["React", "Javascript", "Styled Components"],
    githubUrl: "https://github.com/raymondshiner/rshiner-website-v1",
    liveUrl: "https://v1.raymondshiner.com",
    image: "/projects/rshiner-website-v1.png"
  },
]

export default function Projects() {
  return (
    <MainWrapper>
      <ProjectsSection />
    </MainWrapper>
  )
}

function MainWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-[12.5%] py-4 pt-20 min-h-screen">
      {children}
    </div>
  )
}

function ProjectsSection() {
  return (
    <section className="space-y-12">
      <div className="text-center">
        <div className="text-4xl font-bold border-b-4 border-primary pb-2 inline-block">
          Projects
        </div>
        <p className="text-muted-foreground mt-4 text-lg">
          A showcase of my recent work and personal projects
        </p>
      </div>
      <ProjectGrid />
    </section>
  )
}

function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
      <CardHeader className="flex-none">
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="text-sm">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="aspect-video w-full mb-4 overflow-hidden rounded-md">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
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
      <CardFooter className="flex gap-2 flex-none">
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