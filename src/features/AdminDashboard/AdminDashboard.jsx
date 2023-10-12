import React from 'react'
import { Link,Outlet } from 'react-router-dom';
import { Formik } from 'formik';
function AdminDashboard() {
  return (
    <div>
        <center>
        <Formik
               initialValues={{username:"",password:""}}
               onSubmit={(sobj)=>{
                console.log(sobj)
               }}
            >
              {
                (fobj)=>{
                    return (
                      <div className='row' style={{padding:'100px'}}>
                        <div className='col-md-4 col-lg-4'></div>
                        <div className='col-md-4 col-lg-4'>
                        <form onSubmit={fobj.handleSubmit}>
                            <input type='text' placeholder='Enter Username' name='username' onChange={fobj.handleChange} className='form-control'/><br />
                            <input type='password' placeholder='Enter Password' name='password' onChange={fobj.handleChange} className='form-control'/><br />
                            <Link to='login'><button className='btn btn-primary' type='submit'>Login</button></Link>
                            <h4>OR</h4>
                            <Link to="adddata"><button className='btn btn-primary text-align-center m-5 '>Signin with google</button></Link>
                            <Outlet></Outlet>


                        

                        </form>

                        </div>
                        <div className='col-md-4 col-lg-4'></div>

                      </div>
                        
                    )
                }
            }

            </Formik>

          

                      

                     
          
        </center>
        

    </div>
  )
}

export default AdminDashboard