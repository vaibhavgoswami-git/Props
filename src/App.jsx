import React from 'react'
import Navbar from './components/navbar'
import Cards from './components/cards'
import Corousal from './components/corousal'
import Footer from './components/footer'
import Hero from './components/hero'





function App(props) {
  const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    image: "https://images.unsplash.com/photo-1722970651149-372e8c8a0109?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A modern responsive portfolio website built with HTML, CSS and JavaScript."
  },
  {
    id: 2,
    title: "E-Commerce Website",
    image: "https://images.unsplash.com/photo-1787181876151-824ed8be7b1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "An online shopping website with products, categories and a clean UI."
  },
  {
    id: 3,
    title: "Notes App",
    image: "https://images.unsplash.com/photo-1789019862805-dd9e1d5917dc?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A simple notes application where users can create and delete notes."
  },
  {
    id: 4,
    title: "Weather App",
    image: "https://images.unsplash.com/photo-1786709287840-d6de3883ef1f?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A weather application displaying temperature and weather conditions."
  },
  {
    id: 5,
    title: "To-Do List",
    image: "https://images.unsplash.com/photo-1782275346158-e4d692ccd9ec?q=80&w=737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A task management app for adding, completing and deleting tasks."
  },
  {
    id: 6,
    title: "Calculator",
    image: "https://images.unsplash.com/photo-1723649187076-671840e3218c?q=80&w=755&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A functional calculator built using JavaScript with a simple interface."
  },
  {
    id: 7,
    title: "Music Player",
    image: "https://images.unsplash.com/photo-1783946194622-a7eec7727ba6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A stylish music player interface with playback controls and song details."
  },
  {
    id: 8,
    title: "Gym Website",
    image: "https://images.unsplash.com/photo-1789011275761-58772b580428?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A fitness website showcasing gym services, memberships and workout programs."
  }
];
  return (
  
    <div>
      <main className='parent'>
           <Navbar />
           <Corousal/>
           <Cards projects={projects} />
           <Hero />
           <Footer />
      </main>
       
    </div>
   
  )
}

export default App
