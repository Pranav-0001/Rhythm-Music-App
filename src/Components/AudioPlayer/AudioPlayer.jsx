import React, { useRef, useState, useEffect } from 'react';

function AudioPlayer() {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [play,setPlay]=useState(false)
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
                <img src="https://c.saavncdn.com/191/Kesariya-From-Brahmastra-Hindi-2022-20220717092820-500x500.jpg" alt="" className="song-image" />
                <h1>Kesariya</h1>
                <p>Arjith sigh</p>
                {/* <audio controls id='song' autoPlay> 
                    <source src="/audio/jeffbob.mp3" type="audio/ogg" />

                </audio> */}
               {/* <span>{formatTime(currentTime)}</span> */}
                <input type="range" max={duration} value={currentTime} onChange={handleProgressChange} id='progress'/>
                {/* <span>{formatTime(duration)}</span>  */}


                <div className="controls">
                    <div><i className="fa-solid fa-backward-step"></i></div>
                    <div >{play ?  <i onClick={pauseAudio} className='fa-solid fa-pause'></i> :<i onClick={playAudio} className='fa-solid fa-play'></i>}</div>
                    <div><i className="fa-solid fa-backward-step fa-rotate-180"></i></div>
                
                
                </div>

            </div>
        </div>

      <audio ref={audioRef} src="/audio/a1.mp3" />
  
     
    </div>
    


  );
}

export default AudioPlayer;
