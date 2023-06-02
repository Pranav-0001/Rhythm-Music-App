import React, { useEffect, useState } from 'react'
import './Addmusic.css'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db, storage } from '../../FIrebase/config'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useNavigate } from 'react-router-dom'
function AddMusic() {
  const navigate = useNavigate()
  const [artists, setArtists] = useState([])
  const [song, setSong] = useState(null)
  const [img, setImg] = useState(null)
  const [data, setData] = useState({})
  useEffect(() => {
    getDocs(collection(db, 'Artist')).then((data) => {
      const all = data.docs.map((artist) => {
        return {
          ...artist.data(), id: artist.id
        }
      })
      setArtists(all)
    })
  }, [setArtists])
  console.log(song);
  const handleSOngUpload =async (e) => {
    e.preventDefault()
    try{
    const imgRef=ref(storage,'coverImage/'+img.name)
    const imgUrlRef=await uploadBytes(imgRef,img)
    const coverUrl=await getDownloadURL(imgUrlRef.ref)
    console.log(coverUrl);
    const storeRef = ref(storage, 'Songs/' + song.name)
    uploadBytes(storeRef, song).then((reference) => {
      getDownloadURL(reference.ref).then((url) => {
        addDoc(collection(db, 'Songs'), { ...data, url ,cover:coverUrl }).then(() => {
          navigate('/')
        })
      })
    })
  }catch(err){
    console.log(err);
  }
  }
  return (
    
    <div className='addPage'>
      <div class="container2">
        <form class="form2" onSubmit={handleSOngUpload}>
          <div class="descr">Add Music</div>
          <div class="input2">
            <input required="" name='title' autocomplete="off" type="text" placeholder='Song Title' onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />
          </div>

          <div class="input2">
            {/* <input required="" autocomplete="off" name="email" type="text" placeholder='Artist name' /> */}
            <select name="Artist" id="" onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}>
              <option >Select an artist</option>
              {artists.map((artist) => <option className='bg-dark' value={artist.id}>{artist.artist}</option>)}
            </select>

          </div>
          <div class="input2" onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}>
            <input required="" autocomplete="off" name="Album" type="text" placeholder='Album / Movie' />

          </div>
          <div class="input2">
            <p className='text-light m-0'>Cover Image</p>
            <input required="" onChange={(e) => setImg(e.target.files[0])} autocomplete="off" name="email" type="file" accept="image/*" />

          </div>
          <div class="input2">
            <p className='text-light m-0'>Music file</p>
            <input required="" onChange={(e) => setSong(e.target.files[0])} autocomplete="off" name="email" type="file" accept=".mp3,audio/*" />

          </div>
          <button type='submit'>Send message →</button>
        </form>
      </div>

    </div>
  )
}

export default AddMusic
