import React, { useRef } from 'react'
import './Artist.css'
function Artist() {
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
        <h1 style={{color:'white'}}>Top Artists</h1>
        <div style={{display:'flex',alignItems:'center',marginRight:'40px',fontSize:'32px'}}>
        <i onClick={moveLeft} class="fa-solid fa-square-caret-right fa-rotate-180"></i>
        <i onClick={moveRight} class="fa-solid fa-square-caret-right"></i>
        </div>
    </div>
    
    <div className='artists' ref={divRef}>
        
      <div className="artist-card">
        <img className='artist-img' src="https://wallpaperaccess.com/full/1280821.jpg" alt=""  width={140}/>
        <h6>Arjith SIngh</h6>
      </div>
      <div className="artist-card">
        <img className='artist-img' src="https://wallpaperaccess.com/full/1280821.jpg" alt=""  width={140}/>
        <h6>Arjith SIngh</h6>
      </div>
      <div className="artist-card">
        <img className='artist-img' src="https://wallpaperaccess.com/full/1280821.jpg" alt=""  width={140}/>
        <h6>Arjith SIngh</h6>
      </div>
      <div className="artist-card">
        <img className='artist-img' src="https://wallpaperaccess.com/full/1280821.jpg" alt=""  width={140}/>
        <h6>Arjith SIngh</h6>
      </div>
      <div className="artist-card">
        <img className='artist-img' src="https://wallpaperaccess.com/full/1280821.jpg" alt=""  width={140}/>
        <h6>Arjith SIngh</h6>
      </div>
      <div className="artist-card">
        <img className='artist-img' src="https://wallpaperaccess.com/full/1280821.jpg" alt=""  width={140}/>
        <h6>Arjith SIngh</h6>
      </div>
      <div className="artist-card">
        <img className='artist-img' src="https://wallpaperaccess.com/full/1280821.jpg" alt=""  width={140}/>
        <h6>Arjith SIngh</h6>
      </div>
      <div className="artist-card">
        <img className='artist-img' src="https://wallpaperaccess.com/full/1280821.jpg" alt=""  width={140}/>
        <h6>Arjith SIngh</h6>
      </div>
      <div className="artist-card">
        <img className='artist-img' src="https://wallpaperaccess.com/full/1280821.jpg" alt=""  width={140}/>
        <h6>Arjith SIngh</h6>
      </div>
      <div className="artist-card">
        <img className='artist-img' src="https://wallpaperaccess.com/full/1280821.jpg" alt=""  width={140}/>
        <h6>Arjith SIngh</h6>
      </div>
      <div className="artist-card">
        <img className='artist-img' src="https://wallpaperaccess.com/full/1280821.jpg" alt=""  width={140}/>
        <h6>Arjith SIngh</h6>
      </div>
      <div className="artist-card">
        <img className='artist-img' src="https://wallpaperaccess.com/full/1280821.jpg" alt=""  width={140}/>
        <h6>Arjith SIngh</h6>
      </div>
      
    </div>
    </>
  )
}

export default Artist
