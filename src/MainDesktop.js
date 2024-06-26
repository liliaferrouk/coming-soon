import React from 'react'
import logo_img from './images/logo.svg'
import img_arrow from './images/icon-arrow.svg'
import img_error from './images/icon-error.svg'
import hero_img from './images/hero-desktop.jpg'

function MainDesktop({erreur,setErreur,email,setEmail}) {
  function handleChange(event){
    setEmail(event.target.value);
    const isValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);
    setErreur(!isValidEmail);
  }
  function clear(){
    if(email==="") setErreur(true)
    if(erreur) return
    else{
      setEmail("");
    }
  }
  return (
    <main>
        <div className="left-part">
          <img id="logo" src={logo_img} alt="logo"/>
          <h1 className="pink-h1">We're</h1>
          <h1 className="black-h1">coming</h1>
          <h1 className="black-h1">soon</h1>
          <p className="text">
            Hello fellow shoppers! We're currently building our new fashion store.
            Add your email below to stay up-to-date with announcements and our launch deals.
          </p>
          <div className="input-mail">
            <input
              type="email"
              id="input-m"
              placeholder="Email Address"
              value={email}
              onChange={handleChange}
              style={{borderColor: erreur ? 'red' : 'initial'}}
            />
            <div id="button" onClick={clear}>
              <img src={img_arrow} alt="arrow"/>
            </div>
            {
              erreur && <img id="error-icon" src={img_error} alt="error"/>
            }
            {
              erreur && <p className="erreur-message">Please provide a valid email</p>
            }
          </div>
        </div>
      <img id="hero-img" src={hero_img} alt="hero"/>
    </main>
  )
}

export default MainDesktop