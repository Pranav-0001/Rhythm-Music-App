import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSong } from '../../redux/SongSlice';

function AudioPlayer() {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [play,setPlay]=useState(false)
  const {songUrl,album,songTitle,cover,songIndex,AllSongs}=useSelector(state=>state.song)
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

    return () => {
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
      audioElement.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [isDragging]);

  const playAudio = () => {
    setPlay(true)
    audioRef.current.play();
  };


  
  const pauseAudio = () => {
    setPlay(false)
    audioRef.current.pause();
  };

  const nextSong=(index)=>{
    
    if((AllSongs.length-1)!==index){
      const i=index+1
      dispatch(updateSong({cover:AllSongs[i].cover,songTitle:AllSongs[i].title,album:AllSongs[i].Album,songUrl:AllSongs[i].url,songIndex:i,songs:AllSongs}))
    }
  }

  const prevSong=(index)=>{
    
    if(index!==0){
      const i=index-1
      dispatch(updateSong({cover:AllSongs[i].cover,songTitle:AllSongs[i].title,album:AllSongs[i].Album,songUrl:AllSongs[i].url,songIndex:i,songs:AllSongs}))
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

  return (
   
     <div >
      <h2 style={{marginLeft:'20px',color:'white'}}>Now Playing</h2>
        <div className='container1'>
        <div className="music-player">
                <img src={cover} alt="" className="song-image" />
                <h1>{songTitle}</h1>
                <p>{album}</p>
                {/* <audio controls id='song' autoPlay> 
                    <source src="/audio/jeffbob.mp3" type="audio/ogg" />

                </audio> */}
               {/* <span>{formatTime(currentTime)}</span> */}
                <input type="range" max={duration} value={currentTime} onChange={handleProgressChange} id='progress'/>
                {/* <span>{formatTime(duration)}</span>  */}


                <div className="controls">
                    <div><i onClick={()=>prevSong(songIndex)} className="fa-solid fa-backward-step"></i></div>
                    <div >{play ?  <i onClick={pauseAudio} className='fa-solid fa-pause'></i> :<i onClick={playAudio} className='fa-solid fa-play'></i>}</div>
                    <div><i onClick={()=>nextSong(songIndex)} className="fa-solid fa-backward-step fa-rotate-180"></i></div>
                
                
                </div>

            </div>
        </div>

      <audio ref={audioRef} src={songUrl}   />
  
     
    </div>
    


  );
}

export default AudioPlayer;
