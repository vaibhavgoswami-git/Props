import React from 'react'



const navbar = () => {
  return (
   <nav >
    <h1><a href="">Portfolio</a></h1>
    <div className="right">
      <a className='hvr' href="#home">Home </a>
      <a className='hvr' href="/new.html">Projects</a>
      <a className='hvr' href="#footer">Contacts</a>
    </div>
   </nav>
  )
}

export default navbar
