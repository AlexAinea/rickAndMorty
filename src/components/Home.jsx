import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div>
      <div className="border-l-8  border-double fixed top-1/4 left-3/4">
        <p>Welcome to the<br /><b><strong>Rick and Morty Page</strong></b></p>
      </div>
      <div className="fixed top-3/4 left-3/4 font-extrabold text-4xl slide">
        <h1>RICK AND MORTY</h1>
      </div>
      <div>
        <p>DRAG THE PAGE!!!</p>
      </div>
    </div>
  )
}

export default Home