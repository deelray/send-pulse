import React from 'react';

const Header = () => {
  return (
    <header className="header container" id="header">
      <div className="header__logo">
        <a className="header__link" href="#header">
          <img src="./images/logo.svg" alt="logo" />
        </a>
      </div>
      <div className="header__icons">
        <div className="notifications" id="notification">
          <a href="#notification">
            <img src="./images/bell.svg" alt="bell" />
          </a>
        </div>
        <div className="search" id="search">
          <a href="#search">
            <img src="./images/search.svg" alt="search" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header;