import React from 'react'

function AddArtist() {
  return (
    
       <div className='addPage'>
      <div class="container2 " style={{height:'350px'}}>
    <form class="form2">
      <div class="descr">Add Artist</div>
      <div class="input2">
          <input required="" autocomplete="off" type="text" placeholder='Artist Name' />
      </div>

     
     
      <div class="input2">
        <p className='text-light m-0'>Image</p>
      <input required="" autocomplete="off" name="email" type="file" accept="image/*" />
      
      </div>
      <button>Send message →</button>
    </form>
</div>

    </div>
    
  )
}

export default AddArtist
