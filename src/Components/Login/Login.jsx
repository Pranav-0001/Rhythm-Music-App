import React, { useState } from 'react'
import './Login.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, db } from '../../FIrebase/config'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'


function Login() {
    const navigate=useNavigate()
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [Lusername,setLusername]=useState('')
    const [Lpassword,setLpassword]=useState('')
console.log(Lusername,Lpassword);
    const handleSignup=(e)=>{
        e.preventDefault()
        try{
            createUserWithEmailAndPassword(auth,email,password).then((result)=>{
                updateProfile(result.user,{displayName:username}).then(()=>{
                    addDoc(collection(db,'users'),{
                        id:result.user.uid,
                        profileName:username,
                        email:email,
                        role:'user'
                    }).then(()=>{
                        navigate('/')
                    })
                })
            }).catch(err=>{
                console.log(err,1);
              }).catch(errr=>{
                console.log(errr,2);
              }).catch(er=>{
                console.log(er,3);
              })

        }catch(err){
            console.log(err);
        }

    }
    const handleLogin=(e)=>{
        e.preventDefault()
        try{
            signInWithEmailAndPassword(auth,Lusername,Lpassword).then((userData)=>{
              console.log(userData.user.uid);
              const userQuery=query(
                collection(db,'users'),
                where('id','==',userData.user.uid)
            )
            getDocs(userQuery).then((querySnapshot)=>{
                querySnapshot.forEach((doc)=>{
                    console.log(doc.data());
                })
            })
              navigate('/')
            }).catch((err)=>{
              if('auth/invalid-email'===err.code){
                console.log("error");
              }
              
            })
          }catch(err){
            
          }
    }
  return (
    <div style={{height:'100vh'}} className='col-md-2 offset-5 d-flex align-items-center '>
      <div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true" />

			<div class="login">
				<form onSubmit={handleLogin} class="form">
					<label for="chk" aria-hidden="true">Log in</label>
					<input class="input" type="email" name="email" placeholder="Email" required="" onChange={(e)=>setLusername(e.target.value)} />
					<input class="input" type="password" name="pswd" placeholder="Password" required="" onChange={(e)=>setLpassword(e.target.value)} />
					<button>Log in</button>
				</form>
			</div>

      <div class="register">
				<form class="form" onSubmit={handleSignup}>
					<label for="chk" aria-hidden="true">Register</label>
					<input class="input" type="text" name="txt" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} required="" />
					<input class="input" type="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required="" />
					<input class="input" type="password" name="pswd" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required="" />
					<button>Register</button>
				</form>
			</div>
	</div>
    </div>
  )
}

export default Login
