import React from 'react'
import img_logo from './images/logo.svg'
import img_hero_mobile from './images/hero-mobile.jpg'
import img_arrow from './images/icon-arrow.svg'
import img_error from './images/icon-error.svg'

function MainMobile() {
  return (
    <main>
          <img id="logo" src={img_logo} alt="logo"/>
          <img id="hero" src={img_hero_mobile} alt="hero"/>
          <h1 className="pink-h1">We're</h1>
          <h1 className="black-h1">coming</h1>
          <h1 className="black-h1">soon</h1>
          <p className="text">
            Hello fellow shoppers! We're currently building our new fashion store.
            Add your email below to stay up-to-date with announcements and our launch deals.
          </p>
          <div class="input-mail">
            <input type="email" name="" id="input-m" placeholder="Email Address"/>
            <div id="button">
              <img src={img_arrow} alt="arrow"/>
            </div>
            <img id="error-icon" src={img_error} alt="error"/>
            <p className="erreur-message">Please provide a valid email</p>
          </div>
      </main>
  )
}

export default MainMobile