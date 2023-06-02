import React, { useEffect, useRef, useState } from 'react'
import './Artist.css'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../FIrebase/config'
import { useDispatch } from 'react-redux'
import { updateArtist } from '../../redux/ArtistSLice'

function Artist() {

  const dispatch=useDispatch()
  
  const [artists,setArtists]=useState([])
  useEffect(()=>{
    getDocs(collection(db,'Artist')).then((data)=>{
      const allArtist=data.docs.map((obj)=>{
        return{...obj.data(),id:obj.id}
      })
      setArtists(allArtist)
    })
    
  },[setArtists])
  const selectArtist=(singer)=>{
    dispatch(updateArtist({artistId:singer.id,artistName:singer.artist,artistImg:singer.url}))

  }
  const divRef= useRef(null)
  const moveRight=()=>{
    const container = divRef.current;
    container.scrollTo({
      left: container.scrollLeft + 250,
      behavior: "smooth"
    });
  }
  const moveLeft=()=>{
    const container = divRef.current;
    container.scrollTo({
      left: container.scrollLeft - 250,
      behavior: "smooth"
    });
  }
  return (
    <>
    <div className='artist-top'>
        <h1 className='ms-3 mt-2' style={{color:'white'}}>Top Artists</h1>
        <div style={{display:'flex',alignItems:'center',marginRight:'40px',fontSize:'32px'}} >
        <i onClick={moveLeft} class="fa-solid fa-square-caret-right fa-rotate-180"></i>
        <i onClick={moveRight} class="fa-solid fa-square-caret-right"></i>
        </div>
    </div>
    
    <div className='artists pb-4' ref={divRef}>
{
  artists.map((singer)=>{
    return(<div className="artist-card" onClick={()=>selectArtist(singer)}>
    <img className='artist-img' src={singer.url} alt=""  width={140}/>
    <h6>{singer.artist}</h6>
  </div>)
  })
}
    
    </div>
    </>
  )
}

export default Artist
