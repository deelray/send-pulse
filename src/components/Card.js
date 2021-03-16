import React from 'react';

const Card = ({
  mediaImg,
  color,
  followers,
  textColor,
  text,
  followersChange,
  userImg,
  media,
  user,
}) => {
  return (
    <div className="catalog__card card">
      <div
        className="card__block"
        style={{
          background: color,
          color: textColor ? textColor : "#fff"
        }}
      >
        <div className="card__icon">
          <img src={mediaImg} alt="media" />
        </div>
        <div className="card__total-number">
          {followers}
        </div>
        <div className="card__followers">
          {text}
        </div>
        <div className="card__bottom-block">
          <div className="card__bottom-number">
            {followersChange}
          </div>
          { followersChange ? (
            <div className="card__bottom-icon">
              { followersChange.slice(0, 1) === "+" ? (
                <img src="./images/icon-up.svg" alt="up" />
              ) : (
                <img src="./images/icon-down.svg" alt="down" />
              )}
            </div>
          ) : ''}
        </div>
      </div>
      <div className="card__info-block">
        <div className="card__picture">
          <img src={userImg} alt="profile-pictute" />
        </div>
        <div className="card__info">
          <div className="card__social-media">
            {media}
          </div>
          <div className="card__user-name">
            {user}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;