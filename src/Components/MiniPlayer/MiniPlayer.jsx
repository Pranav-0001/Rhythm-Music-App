import React, { useState } from 'react'
import './MiniPlayer.css'
function MiniPlayer() {
    // let progress= document.getElementById('progress')
    // let song = document.getElementById('song')
    // song.onloadedmetadata= ()=>{
    //     progress.max=song.duration
    //     progress.value=song.currentTime
    // }
    const [play,setPlay]=useState(false)
    const [Bclass,setClass]=useState(' fa-solid fa-play')
    const Play = ()=>{
        setPlay(!play)
        if(play){
            setClass('fa-solid fa-pause')
        }else{
            setClass(' fa-solid fa-play')
        }
    }
    return (
        <div className='container1'>
            <div className="music-player">
                <img src="https://i8.amplience.net/i/naras/GenreThumbnails_01_Pop.jpg" alt="" className="song-image" />
                <h1>Kesariya</h1>
                <p>Arjith sigh</p>
                <audio controls id='song' autoPlay> 
                    <source src="/audio/jeffbob.mp3" type="audio/ogg" />

                </audio>
                <input type="range" value={0} id='progress'/>


                <div className="controls">
                    <div><i className="fa-solid fa-backward-step"></i></div>
                    <div onClick={Play}><i className={Bclass}></i></div>
                    <div><i className="fa-solid fa-backward-step fa-rotate-180"></i></div>
                
                
                </div>

            </div>
        </div>
    )
}

export default MiniPlayer
