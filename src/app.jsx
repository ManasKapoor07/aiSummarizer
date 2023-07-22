import React from 'react'
import Hero from './componenets/Hero'
import Demo from './componenets/Demo'
import './app.css'
const app = () => {
   return (
    <main>
      <div className='main'>
        <div className='gradient'/>
      </div>
      <div className='app'>
      <Hero />
      <Demo />


      </div>
    </main>
  )
}

export default app
