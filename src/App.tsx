import About from "./sections/About/About"

export default function App() {
  return (
    <AppWrapper>
      <About />
    </AppWrapper>
  )
}

function AppWrapper({ children }: { children: React.ReactNode }) {
  return <div className="container px-2 h-screen border-2 border-red-500">
    {children}
  </div>
}