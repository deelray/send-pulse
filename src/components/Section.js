import React from 'react';
import Catalog from './Catalog';

const Section = ({ showModal }) => {
  return (
    <section className="main-info">
      <div className="main-info__block">
        <div className="main-info__username">
          @abhisek.das
        </div>
        <button
          type="button"
          className="main-info__button"
          onClick={showModal}
        >
          + Add Social Profile
        </button>
      </div>

      <div className="main-info__navigation">
        <button type="button" className="main-info__navigation-button main-info__navigation-button--active">
          Last day
        </button>
        <button type="button" className="main-info__navigation-button">
          Week
        </button>
        <button type="button" className="main-info__navigation-button">
          Month
        </button>
      </div>

      <Catalog />
    </section>
  )
}

export default Section;