import React from 'react'

function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYZIJMagSslTS_resTOUl4qgz5RT14pr6ng&usqp=CAU" alt="logo" style={{width: '58px',
    borderRadius: '83px',
    margin: '3px',
    height: '55px',
    border: '2px solid #bdbd21'}} />
    <a className="navbar-brand mx-2" href="/home">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Services</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Home
