import React, { useEffect, useState } from 'react'
import './ArtistSongs.css'
import { useDispatch, useSelector } from 'react-redux'
import { collection, doc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../FIrebase/config'
import { updateSong } from '../../redux/SongSlice'
function ArtistSong() {

  const dispatch=useDispatch()
  const {artistName,artistImg,artistId}=useSelector(state => state.artist)
  const [artSongs,setArtSongs]=useState([])
  const setCurrent=(song,index,allSongs)=>{
    console.log(song);
    dispatch(updateSong({cover:song.cover,songTitle:song.title,album:song.Album,songUrl:song.url,songIndex:index,songs:allSongs,FavUsers:song.favUser,isPlay:true,songId:song.id}))
  }
  useEffect(()=>{
    const fetch=async()=>{
      try{
        
        const q=query(
          collection(db,'Songs'),
          where('Artist','==',artistId)
        )
        const snapShot = await getDocs(q)
        const songs = snapShot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
         setArtSongs(songs);
       
      }
      catch(err){
        console.log(err);
      }
    }
    fetch()
  },[artistId])
  
  return (
    
    <div>
      {artistImg && 
      <div className='container mt-4' >
        <div className='row'>
          <div className="d-flex align-items-center ">
            <img className='artist-image' src={artistImg} alt="" />
            <h2 className='ms-2' style={{ color: 'white' }}>{artistName} Hits</h2>
          </div>

          {artSongs.map((song,index,allSongs)=>{
            return(
              <div className=' col-md-4 mt-2    mb-2' >
            <div className='musicItem1' style={{ overflow: 'hidden' }} onClick={()=>setCurrent(song,index,allSongs)}>
              <img src={song.cover} alt="" height={100} />
              <div className='d-block pt-3 ms-2'>
                <h6 className='m-0'>{song.title}</h6>
                <p className='m-0'> {song.Album}</p>
                <p></p>
                <img src="" alt="" />
              </div>
            </div>
          </div>
            )
          })}
        </div>
      </div>
}
    </div> 
   
  )
}

export default ArtistSong
