import React, { useEffect, useState } from 'react'
import './Recommented.css'
import { collection, getDocs ,limit, query } from 'firebase/firestore'
import { db } from '../../FIrebase/config'
import { useDispatch } from 'react-redux';
import { updateSong } from '../../redux/SongSlice';

function Recommented() {
  const dispatch = useDispatch()
  const [songs,setSongs]=useState([])
  const setCurrent=(song,index,allSongs)=>{
    
    dispatch(updateSong({cover:song.cover,songTitle:song.title,album:song.Album,songUrl:song.url,songIndex:index,songs:allSongs}))
  }
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const songsQuery = query(collection(db, 'Songs'), limit(8));
        const songsSnapshot = await getDocs(songsQuery);
        const songsData = songsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(songsData[0].cover);
        setSongs(songsData)
        const i=(Math.floor((Math.random())*100))%8
        dispatch(updateSong({cover:songsData[i].cover,songTitle:songsData[i].title,album:songsData[i].Album,songUrl:songsData[i].url,songIndex:i,songs:songsData}))
      } catch (error) {
        console.log('Error fetching users:', error);
      }
    };

    fetchSongs();
  }, [dispatch]);
  
  return (
    <div className="   " style={{ margin: 0 }}>
      <h1 style={{ color: 'white' }}>Recommented</h1>
      <div className="row  recom">
        {
          songs.map((song ,index,allSongs)=>{
            return(
            <div onClick={()=>setCurrent(song,index,allSongs)} className=' col-md-5 mt-2  musicItem  mb-2'>
          <img src={song.cover} alt="" height={100} />
          <div className='d-block pt-3 ms-2'>
            <h6 className='m-0'>{index+1} {song.title}</h6>
            <p className='m-0'> {song.Album}</p>
            <p></p>

          </div>
        </div>
            )
          })
        }


        


        


      </div>
    </div>
  )
}

export default Recommented
