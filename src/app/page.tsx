import React from 'react'
import Hero from './components/sections/hero'
import About from './components/sections/about'
import Projects from './components/sections/projects'
import BlogPreview from './components/sections/blogPreview'
import Contact from './components/sections/contact'

function Homepage() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <BlogPreview />
      <Contact />
    </div>
  )
}

export default Homepage
