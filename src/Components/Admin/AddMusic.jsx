import React from 'react'
import './Addmusic.css'
function AddMusic() {
  return (
    <div className='addPage'>
      <div class="container2">
    <form class="form2">
      <div class="descr">Contact us</div>
      <div class="input2">
          <input required="" autocomplete="off" type="text" placeholder='Song Title' />
      </div>

      <div class="input2">
          {/* <input required="" autocomplete="off" name="email" type="text" placeholder='Artist name' /> */}
          <select name="" id="">
            <option value="">ARjith</option>
          </select>
          
      </div>
      <div class="input2">
          <input required="" autocomplete="off" name="email" type="text" placeholder='Album / Movie' />
          
      </div>
      <div class="input2">
        <p className='text-light m-0'>Music</p>
      <input required="" autocomplete="off" name="email" type="file" accept=".mp3,audio/*" />
      
      </div>
      <button>Send message →</button>
    </form>
</div>

    </div>
  )
}

export default AddMusic
