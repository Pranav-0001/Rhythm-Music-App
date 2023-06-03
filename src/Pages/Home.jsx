import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Artist from '../Components/Artists/Artist'
import Music from './Music'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../FIrebase/config'
import TopList from '../Components/Top Listening/TopList'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import ArtistPage from './artistPage'
import { useDispatch } from 'react-redux'
import { updateUser } from '../redux/userSlice'

function Home() {
  const navigate=useNavigate()
  const [name,setName]=useState('')
  const [admin,setAdmin]=useState(false)
  const dispatch=useDispatch()
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
              dispatch(updateUser({userId:user.uid}))
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
     <ArtistPage/>
    </div>
  )
}

export default Home
