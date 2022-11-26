import React, { useState, useEffect } from 'react'
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    }
  })
  return (
    <nav className={`nav ${show && "nav__black"}`}>
        <img
            alt='Netflix logo'
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            className="nav__logo"
            onClick={() => window.location.reload()}
        />
        <img 
            alt="User logged"
            src="https://ko.wikipedia.org/wiki/%EC%9C%84%ED%82%A4%EB%B0%B1%EA%B3%BC:%EC%9C%A0%EC%9A%A9%ED%95%9C_%EC%95%84%EC%9D%B4%EC%BD%98_%EB%AA%A8%EC%9D%8C#/media/%ED%8C%8C%EC%9D%BC:User_icon_2.svg"
            className="nav__avatar"
        />
    </nav>
  )
}

export default Nav