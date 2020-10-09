import React,{useEffect,useState} from 'react';
import './Nav.css';
function Nav() {
    const [show,handleShow]=useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.screenY>100){
                handleShow(true)
            }
            else{
                handleShow(false)
            }
            return()=>{
                window.removeEventListener("scroll");
            }
        })
    }, [])
    return (
        <nav className={`nav ${show && "nav__black"}`}>
            <img 
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/150px-Netflix_2015_logo.svg.png"
            alt="Netflix"
            />
            <img 
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/150px-Netflix_2015_logo.svg.png"
            alt="Netflix"
            />
        </nav>
    )
}

export default Nav
