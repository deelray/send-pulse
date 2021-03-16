import React from 'react';
import Footer from './Footer';

const Aside = () => {
  return (
    <aside className="aside">
      <div className="aside__top">
        <div className="aside__info-block">
          <img src="./images/avatar.svg" alt="avatar" />
          <div className="aside__info">
            <div className="aside__user">
              <p className="aside__text">Abhisek Das</p>
              <a href="#aside__arrow" >
                <img id="aside__arrow" src="./images/arrow-down.svg" alt="arrow-down" />
              </a>
            </div>
            <div className="aside__followers">
              10,968 Followers
            </div>
          </div>
        </div>

        <div className="aside__navigation navigation">
          <ul className="navigation__list">
            <li className="navigation__item navigation__item--active" id="dashboard">
              <a href="#dashboard" className="navigation__link">
                <div className="navigation__picture">
                  <img src="./images/dashboard.svg" alt="dashboard" />
                </div>
                <p className="navigation__text">
                  Dashboard
                </p>
              </a>
            </li>
            <li className="navigation__item" id="social">
              <a href="#social" className="navigation__link">
                <div className="navigation__picture">
                  <img src="./images/social-feed.svg" alt="social-feed" />
                </div>
                <p className="navigation__text">
                  Social Feed
                </p>
              </a>
            </li>
            <li className="navigation__item" id="invite">
              <a href="#invite" className="navigation__link">
                <div className="navigation__picture">
                  <img src="./images/invite.svg" alt="invite" />
                </div>
                <p className="navigation__text">
                  Invite Friends
                </p>
              </a>
            </li>
            <li className="navigation__item" id="settings">
              <a href="#settings" className="navigation__link">
                <div className="navigation__picture">
                  <img src="./images/settings.svg" alt="settings" />
                </div>
                <p className="navigation__text">
                  Settings
                </p>
              </a>
            </li>
            <li className="navigation__item" id="logout">
              <a href="#logout" className="navigation__link">
                <div className="navigation__picture">
                  <img src="./images/log-out.svg" alt="log-out" />
                </div>
                <p className="navigation__text">
                  Log out
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </aside>
  )
}

export default Aside;