
function App() {
  return (
    <AppWrapper>
      <div>Hello World</div>
    </AppWrapper>
  )
}

function AppWrapper({ children }: { children: React.ReactNode }) {
  return <div className="container px-2 h-screen border-2 border-red-500">
    {children}
  </div>
}



export default App
