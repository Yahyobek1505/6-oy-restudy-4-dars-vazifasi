import React from 'react'
import './index.css'
function Header() {
  return (
    <>
     <div className='bg'>
      <h4>
        <marquee behavior="2" direction="">
          Sayt test rejimida ishlayapti!
        </marquee>
      </h4>
      <h2 className='title'>Todos (5)</h2>
    </div>
    </>
  )
}

export default Header
