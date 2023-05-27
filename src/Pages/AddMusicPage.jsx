import React, { useEffect } from 'react'
import AddMusic from '../Components/Admin/AddMusic'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { auth, db } from '../FIrebase/config'

function AddMusicPage() {
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
        
      <AddMusic/>
    </div>
  )
}

export default AddMusicPage
