import React from 'react'

export default function Navbar(props) {
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="./">{props.title}</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="./">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./">About Us</a>
                        </li>
                    </ul>
                </div>
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.mode} Mode</label>
                </div>
            </div>
            
        </nav>
    </>
  )
}



