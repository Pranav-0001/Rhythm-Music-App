import React, { useEffect, useState } from 'react'
import './TopList.css'
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../FIrebase/config';
import { useDispatch } from 'react-redux';
import { updateSong } from '../../redux/SongSlice';



function TopList() {
    const dispatch=useDispatch()
    const[allSongs,setAllSongs]=useState([])
    const setCurrent=(song,index,allSongs)=>{
        dispatch(updateSong({cover:song.cover,songTitle:song.title,album:song.Album,songUrl:song.url,songIndex:index,songs:allSongs}))
      }
    useEffect(()=>{
        try {
            async function fetchData(){
            const songsQuery = query(collection(db, 'Songs'));
            const songsSnapshot = await getDocs(songsQuery);
            const songsData = songsSnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            console.log(songsData[0].cover);
            setAllSongs(songsData)
        }
        fetchData()
          } catch (error) {
            console.log('Error fetching users:', error);
          }

    },[setAllSongs])
    
    return (
        <div className='container mt-4'>
            <div className='row'>
                <h1 style={{color:'white'}}>Top Hits</h1>
                {
                    allSongs.map((song,index,allSongs)=>{
                        return(
                                            <div className=' col-md-4 mt-2    mb-2' onClick={()=>setCurrent(song,index,allSongs)}>
                    <div className='musicItem1' style={{overflow:'hidden'}}>
                                            <img  src={song.cover} alt="" height={100} />
                    <div className='d-block pt-3 ms-2'>
                        <h6 className='m-0'>{song.title}</h6>
                        <p className='m-0'> {song.Album}</p>
                        <p></p>
                    </div>
                    </div>

                </div>
                        )
                    })
                }



                

            </div>
        </div>
    )
}

export default TopList
