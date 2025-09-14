export default function About() {
  return <div className="container mx-auto p-4 flex flex-col justify-center items-center h-full gap-8">
    <div className="text-5xl font-bold underline">
      About Me
    </div>
    <img
      src="/self-portrait.jpg"
      alt="self-portrait"
      className="rounded-xl"
    />
  </div>
}