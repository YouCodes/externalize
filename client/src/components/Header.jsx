import React from 'react'

const Header = () => {
  return (
    <nav className="navbar bg-light mb-4 p-0 bg-transparent">
        <div className="container">
            <a className="navbar-brand" href="/">
                <div className="d-flex">
                    <img src="/images/logo.png" alt="logo" className="mr-2"/>
                    <div>Externalize</div>
                </div>
            </a>
        </div>
    </nav>
  )
}

export default Header