import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Artist from '../Components/Artists/Artist'
import Music from './Music'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../FIrebase/config'
import TopList from '../Components/Top Listening/TopList'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'

function Home() {
  const navigate=useNavigate()
  const [name,setName]=useState('')
  const [admin,setAdmin]=useState(false)
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setName(user.displayName);
                const userQuery=query(
                  collection(db,'users'),
                  where('id','==',user.uid)
              )
              getDocs(userQuery).then((querySnapshot)=>{
                querySnapshot.forEach((doc)=>{
                    const role=doc.data().role
                    if(role==='admin'){
                      setAdmin(true)
                    }
                })
            })
            }else{
                navigate('/login')
            }
        })
    },[navigate])
  return (
    <div>
      <Navbar name={name} admin={admin} />
      <Artist/>
     
     <Music />
     <TopList/>
    </div>
  )
}

export default Home
