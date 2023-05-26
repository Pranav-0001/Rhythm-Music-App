import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Artist from '../Components/Artists/Artist'
import Music from './Music'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../FIrebase/config'

function Home() {
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                console.log(user);
            }else{
                console.log("jhfg");
            }
        })
    },[])
  return (
    <div>
      <Navbar/>
      <Artist/>
     
     <Music />
    </div>
  )
}

export default Home
