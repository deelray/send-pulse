import React from 'react';
import classNames from 'classnames';

const Modal = ( { isModalOpen, closeModal }) => {
  return (
    <div
      className={classNames('modal-overlay', { 'show-modal': isModalOpen})}
    >
      <div className='modal'>
        <div className="modal__header">
          <h3 className="modal__title">
            Add Social Profile
          </h3>
          <button
            type="button"
            className="modal__close-btn"
            onClick={closeModal}
          >
            <img src="./images/Line.svg" alt="close"/>
          </button>
        </div>
        <p className="modal__text">
          Add new social profile for tracking
        </p>
        <form action method="GET">
          <label htmlFor="add_url" className="modal__label">
            URL
          </label>
          <input
            type="url"
            id="add_url"
            name="add_url"
            placeholder="https://twitter.com/username"
            className="modal__input"
            required
          />
          <button type="submit" className="modal__button">
            Lookup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
