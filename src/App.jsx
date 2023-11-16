import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Carousel from './Components/Carousel/Carousel'
import Artic1 from './Components/Artic1/Artic1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Navbar />
      <Carousel />
      <Artic1 />
    </div>
  )
}

export default App
