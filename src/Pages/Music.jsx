import React from 'react'
import AudioPlayer from '../Components/AudioPlayer/AudioPlayer'
import Recommented from '../Components/Recommended/Recommented'

function Music() {
  return (
    <div className='row mt-4  m-0'>
        <div className="ms-md-5 ms-2 col-md-3">
            <AudioPlayer/>
        </div>
        <div className="col-md-8">
             <Recommented/>
        </div>
        
       
    </div>
  )
}

export default Music
