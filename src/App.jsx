import './App.css'
import Content from './components/Content'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="bg-[url('https://www.mojelektromobil.sk/wp-content/uploads/2022/09/Mercedes-AMG-C-63-S-E-Performance-2.jpg')] h-screen bg-cover bg-center">
      <Navbar/>
      <Content/>
    </div>
  )
}

export default App
