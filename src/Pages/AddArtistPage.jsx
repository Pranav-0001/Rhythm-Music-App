import React, { useEffect } from 'react'
import AddArtist from '../Components/Admin/AddArtist'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../FIrebase/config'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'

function AddArtistPage() {
  const navigate=useNavigate()
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        const userQuery=query(
          collection(db,'users'),
          where('id','==',user.uid)
      )
      getDocs(userQuery).then((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{
            const role=doc.data().role
            if(role!=='admin'){
              navigate('/')
            }
        })
    })
      }else{
        navigate('/login')
      }
    })
    return () => unSubscribe  ();
  },[navigate])
  return (
    <div>
      <AddArtist/>
    </div>
  )
}

export default AddArtistPage
