export default function About() {
  return <MainWrapper>
    <Title />
    <SelfPortrait />
    <Description />
  </MainWrapper>
}

function MainWrapper({ children }: { children: React.ReactNode }) {
  return <div className="container mx-auto p-4 flex flex-col justify-center items-center h-full gap-8">
    {children}
  </div>
}

function Title() {
  return <div className="text-5xl font-bold underline">
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