import React from 'react';

function PopupWithForm({ name, title, isOpen, onClose, children }) {
  return (
    <div className={`popup popup_type-${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name} noValidate>
          {children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
