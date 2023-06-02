import React from 'react'
import './Navbar.css'
import { auth } from '../../FIrebase/config'
import { useNavigate } from 'react-router-dom'
function Navbar(props) {
  const navigate=useNavigate()
  const handleSignOut=()=>{
    auth.signOut().then(()=>{
      navigate('/login')
    })
  }
  return (
    <nav>
      <h2 className='ms-4 logo'>Rhythm</h2>

      <div className='nav-user'>
        
        <img className='avatar me-2' src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1480&t=st=1685004806~exp=1685005406~hmac=a09a127ed40a97e0a5d21b87fbd2fee288bbcf5ba4fcbf88506c01a8a2d9b976" alt="" width={40} />
        <h5 className='username me-4'>{props.name}</h5>
        {props.admin &&  <h6 onClick={()=>navigate('/add-artist')} style={{cursor:'pointer'}} className='ms-3'>Add Artist</h6> }
        {props.admin &&  <h6 onClick={()=>navigate('/add-Music')} style={{cursor:'pointer'}} className='ms-3 me-3'>Add Music</h6> }
       <h6 onClick={ handleSignOut} style={{cursor:'pointer'}}><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</h6>
      </div>
    </nav>
  )
}

export default Navbar
