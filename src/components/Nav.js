import React from 'react';
import { Link } from 'react-router-dom';
import './style2.css'

export default function Nav() {
  return (
    <div>
            <nav className="navbar navbar-expand-sm bg-light justify-content-center">
                    <ul className="navbar-nav ">
                        <li className="nav-item " >
                             <Link className="nav-link" to="/">Todo </Link>
                        </li>
                        <li className="nav-item" style={{marginLeft:'40px'}}>
                            <Link className="nav-link" to="/calculatore">Calculator</Link>
                        </li>
                        <li claclassNamess="nav-item" style={{marginLeft:'40px'}}>
                            <Link className="nav-link" to="/sliderMain">Slider</Link>
                        </li>
                        <li claclassNamess="nav-item" style={{marginLeft:'40px'}}>
                            <Link className="nav-link" to="/api">Random images</Link>
                        </li>
                        <li claclassNamess="nav-item" style={{marginLeft:'40px'}}>
                            <Link className="nav-link" to="/error">Error</Link>
                        </li>
                    </ul>
        </nav>
    </div>
  )
}
