import * as React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="h-screen bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center">
      <header className="text-5xl font-bold tracking-wide inline-flex text-white">
        <span className="inline-flex "><div className="i-logos-react" />React</span>
        <span className="mx-5 text-slate-100">with</span>
        <span className="inline-flex "><div className="i-logos-vitejs" />vite</span>
        &
        <span className="inline-flex "><div className="i-logos-unocss"/>unocss</span>
      </header>
      </div>

    </div>
  )
}

export default App
