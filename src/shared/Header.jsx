import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
    <div className="container-fluid">
  <Link className="navbar-brand">SocialMedia</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <Link className="nav-link active"  to='/admindashboard'>Admin Dashboard</Link>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header;