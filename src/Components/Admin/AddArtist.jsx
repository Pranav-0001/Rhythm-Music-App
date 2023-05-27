import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react'
import { db, storage } from '../../FIrebase/config';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function AddArtist() {
  const navigate=useNavigate()
  const [artist,setArtist]= useState('')
  const [img,setImg]=useState(null)
  console.log(img);
  const handleAddArtist=(e)=>{
    e.preventDefault()
    const storageRef=ref(storage,'Artist/'+img.name)
    uploadBytes(storageRef,img).then((reference)=>{
      getDownloadURL(reference.ref).then((url)=>{
        addDoc(collection(db,'Artist'),{
          artist,
          url
        }).then(()=>{
          navigate('/')
        })
      })
    })
  }
  return (
    
       <div className='addPage'>
      <div class="container2 " style={{height:'350px'}}>
    <form class="form2" onSubmit={handleAddArtist}>
      <div class="descr">Add Artist</div>
      <div class="input2">
          <input required autocomplete="off" type="text" placeholder='Artist Name' onChange={(e)=>setArtist(e.target.value)} />
      </div>

     
     
      <div class="input2">
        <p className='text-light m-0'>Image</p> 
      <input required="" autocomplete="off" name="email" type="file" accept="image/*" onChange={(e)=>setImg(e.target.files[0])} />
      
      </div>
     {img && <button type='submit'> Send message →</button>}
    </form>
</div>

    </div>
    
  )
}

export default AddArtist
