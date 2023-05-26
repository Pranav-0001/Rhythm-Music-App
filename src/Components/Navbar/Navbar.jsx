import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <nav>
      <h2>Rhythm</h2>

      <div className='nav-user'>
        <h4 className='username'>Username</h4>
        <img className='avatar' src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1480&t=st=1685004806~exp=1685005406~hmac=a09a127ed40a97e0a5d21b87fbd2fee288bbcf5ba4fcbf88506c01a8a2d9b976" alt="" width={40} />
      </div>
    </nav>
  )
}

export default Navbar
