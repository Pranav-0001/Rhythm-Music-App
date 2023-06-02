import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db ,auth } from '../FIrebase/config'
import ArtistSong from '../Components/Artist-List/ArtistSong'
import { useSelector } from 'react-redux'

function ArtistPage() {
  const {artistImg} = useSelector(state=>state.artist)
  const artSelect=useRef(null)
  
    if(artistImg){ 
      try{
         artSelect.current.scrollIntoView()
      }catch(err){
        console.log(err);
      }
     
    }

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
    <div ref={artSelect} >
      <ArtistSong/>
    </div>
  )
}

export default ArtistPage
