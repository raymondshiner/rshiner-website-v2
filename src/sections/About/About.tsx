import { Button } from "@/components/ui/button"

interface AboutProps {
  onCollaborateClick?: () => void
}

export default function About({ onCollaborateClick }: AboutProps) {
  return <MainWrapper>
    <Title />
    <SelfPortrait />
    <Description />
    <Button onClick={onCollaborateClick}>Collaborate</Button>
  </MainWrapper>
}

function MainWrapper({ children }: { children: React.ReactNode }) {
  return <div className="container mx-auto p-4 pt-20 flex flex-col justify-center items-center min-h-screen gap-8">
    {children}
  </div>
}

function Title() {
  return <div className="text-5xl font-bold border-b-4 border-primary pb-2">
    About Me
  </div>
}

function SelfPortrait() {
  return <img
    src="/self-portrait.jpg"
    alt="self-portrait"
    className="rounded-xl w-65"
  />
}

function Description() {
  return <p role="paragraph" aria-label="description" className="text-lg max-w-3xl text-center">
    Hello! I'm a passionate developer with a love for creating strong systems and innovative solutions.
    <br />
    <br />
    With a background in both development and management, I bring a unique perspective to every project I undertake.
  </p>
}

