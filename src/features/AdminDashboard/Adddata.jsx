import React from 'react'
import _ from 'lodash';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Link, Outlet } from 'react-router-dom';
const provider = new GoogleAuthProvider();

function Adddata() {
    <h1>Add</h1>
    const auth = getAuth();
    console.log(auth)
    signInWithPopup(auth,provider)
    .then((result)=>{
       const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
       const user = result.user

      
       console.log(token)
       console.log(user)
    }).catch((error)=>{
    console.log(error)

})
return (
    <div>
        <Link to='signout'><button className='btn btn-primary' style={{position:'absolute', right:'20px',top:'60px'}}>SignOut</button></Link>
        
        <Outlet></Outlet>
    </div>
)



}

export default Adddata