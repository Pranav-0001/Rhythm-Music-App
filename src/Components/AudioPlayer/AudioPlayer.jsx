import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSong } from '../../redux/SongSlice';
import { arrayRemove, arrayUnion, collection, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { db } from '../../FIrebase/config';

function AudioPlayer() {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const {songUrl,album,songTitle,cover,songIndex,AllSongs,isPlay,songId,FavUsers}=useSelector(state=>state.song)
  const {userId}=useSelector(state=>state.user)
  const dispatch=useDispatch()

  useEffect(() => {
    const audioElement = audioRef.current;
    
    const handleTimeUpdate = () => {
      if (!isDragging) {
        setCurrentTime(audioElement.currentTime);
      }
    };

    const handleLoadedData = () => {
      setDuration(audioElement.duration);
    };
    
   
    audioElement.addEventListener('timeupdate', handleTimeUpdate);
    audioElement.addEventListener('loadeddata', handleLoadedData);
    audioElement.addEventListener('ended', handleAudioEnded);

    return () => {
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
      audioElement.removeEventListener('loadeddata', handleLoadedData);
      audioElement.removeEventListener('ended', handleAudioEnded);
    };

    
  }, [isDragging]);
  let fav=false
  if(FavUsers){
      fav =  (FavUsers.includes(userId)) ? true :false 
  }else{
     fav=false
  }
  

  const handleAudioEnded = () => {
    const c=AllSongs.length
    console.log(AllSongs);
    console.log(c);
  
    const i=Math.floor((Math.random())*100)%c
    dispatch(updateSong({songUrl:AllSongs[i].url,album:AllSongs[i].Album,songTitle:AllSongs[i].title,cover:AllSongs[i].cover,songIndex:i,songs:AllSongs,isPlay:true,songId:AllSongs[i].id}))
  };

  const playAudio = () => {
    dispatch(updateSong({songUrl,album,songTitle,cover,songIndex,FavUsers,songs:AllSongs,isPlay:true}))

    audioRef.current.play();
  };

  


  
  const pauseAudio = () => {
    dispatch(updateSong({songUrl,album,songTitle,cover,songIndex,FavUsers,songs:AllSongs,isPlay:false}))
    audioRef.current.pause();
  };

  const nextSong=(index)=>{
    if((AllSongs.length-1)!==index){
      const i=index+1
      
      dispatch(updateSong({cover:AllSongs[i].cover,FavUsers:AllSongs[i].favUser,songTitle:AllSongs[i].title,album:AllSongs[i].Album,songUrl:AllSongs[i].url,songIndex:i,songs:AllSongs,isPlay:true,songId:AllSongs[i].id}))
    }
  }

  const prevSong=(index)=>{
    
    try{
      if(index!==0){
      const i=index-1
      dispatch(updateSong({cover:AllSongs[i].cover,FavUsers:AllSongs[i].favUser,songTitle:AllSongs[i].title,album:AllSongs[i].Album,songUrl:AllSongs[i].url,songIndex:i,songs:AllSongs,isPlay:true,songId:AllSongs[i].id}))
    }
  }catch(err){
    console.log(err);
  }
  }

  const handleProgressChange = (e) => {
    const newTime = e.target.value;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const addToFav=(id)=>{
    try{
    updateDoc(doc(db,"Songs",id),{favUser:arrayUnion(userId)}).then(async()=>{
      const docRef = doc(db, 'Songs', songId);
      const docSnap = await getDoc(docRef);
      const songs = { id: docSnap.id, ...docSnap.data() };
      console.log(songs);
      dispatch(updateSong({songUrl,album,songTitle,cover,songIndex,FavUsers:songs.favUser,songs:AllSongs,isPlay}))
    })
  }catch(err){
    console.log(err);
  }
  }

  const RemoveFav=(id)=>{
    try{
    updateDoc(doc(db,"Songs",id),{favUser:arrayRemove(userId)}).then(async()=>{
      const docRef = doc(db, 'Songs', songId);
      const docSnap = await getDoc(docRef);
      const songs = { id: docSnap.id, ...docSnap.data() };
      dispatch(updateSong({songUrl,album,songTitle,cover,songIndex,FavUsers:songs.favUser,songs:AllSongs,isPlay}))
      console.log("done");
    })
  }catch(err){
    console.log(err);
  }
  }



  return (
   
     <div >
      <h2 style={{marginLeft:'20px',color:'white'}}>Now Playing</h2>
        <div className='container1'>
       
        <div className="music-player">
          
                <img src={cover} alt="" className="song-image" />
                <h1>{songTitle}</h1>
                <p>{album}</p>
                
               <span>{formatTime(currentTime)}</span>
                <input type="range" max={duration} value={currentTime} onChange={handleProgressChange} id='progress'/>
                <span>{formatTime(duration)}</span> 
                

                <div className="controls">
                    <div><i onClick={()=>prevSong(songIndex)} className="fa-solid fa-backward-step"></i></div>
                    <div >{isPlay ?  <i onClick={pauseAudio} className='fa-solid fa-pause'></i> :<i onClick={playAudio} className='fa-solid fa-play'></i>}</div>
                    <div><i onClick={()=>nextSong(songIndex)} className="fa-solid fa-backward-step fa-rotate-180"></i></div>
                
                
                </div>

            </div>
        </div>

      <audio ref={audioRef} src={songUrl} autoPlay   />
  
     
    </div>
    


  );
}

export default AudioPlayer;
