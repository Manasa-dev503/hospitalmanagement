import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useGetAllPostsQuery } from '../services/postsApi';
import { Link,Outlet } from 'react-router-dom'



function LoginDetails() {
  var x = useGetAllPostsQuery();
 //console.log(x)
 var {isLoading,data} = useGetAllPostsQuery();
 //console.log(isLoading)
 console.log(data) 
return (
  <div>
    <div className="offcanvas offcanvas-start w-25" tabindex="-1" id="offcanvas" data-bs-keyboard="false" data-bs-backdrop="false">
    <div className="offcanvas-header">
        <h6 className="offcanvas-title d-none d-sm-block" id="offcanvas">Menu</h6>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body px-0">
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
            <li className="nav-item">
                <Link class="nav-link text-truncate" to="home">
                    <i className="fs-5 bi-house"></i><span className="ms-1 d-none d-sm-inline">Home</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-truncate" to="feed">
                <i class="bi bi-rss-fill"></i><span className="ms-1 d-none d-sm-inline">feed</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-truncate" to="albums">
                <i class="bi bi-journal-album"></i><span className="ms-1 d-none d-sm-inline">albums</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-truncate">
                <i class="bi bi-save-fill"></i><span className="ms-1 d-none d-sm-inline">saved</span>
                </Link>
            </li>

            
        </ul>
    </div>
</div>
<div className="container-fluid">
    <div className="row">
        <div className="col min-vh-100">
          <button className="btn float-start" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" role="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </button>
            <div className='row'>
            <div className='col-md-2 col-lg-2'></div>
            <div className='col-md-10 col-lg-10'>
            {
            isLoading && <h4>Loading...</h4>
            }
            {
            !isLoading && data.map((post)=>{
              return <div className='card  ml-3 mb-3 mt-3 mr-3 row-auto row-md-2 min-hh-100 min-vh-60 w-75'>
                <div className='card-body'>
                <h3>{post.title}</h3>
                <p align="justify">{post.body}</p>
                </div>
                <div className='card-footer'>
                  <Link to={`comments/${post.id}`}>comments</Link>
                </div>
                </div>

            })
          }
          <Outlet></Outlet>

            </div>
            </div>
            
        </div>
    </div>
</div>
        
            
          

        
          
            </div>
  )
}

export default LoginDetails









