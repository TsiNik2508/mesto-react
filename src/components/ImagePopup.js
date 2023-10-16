import React from 'react';

function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div className={`popup popup_type-card  ${isOpen && "popup_opened"}`} >
      {card && (
        <div className="popup__card">
          <button className="popup__close popup__close-card" onClick={onClose}></button>
          <img src={card.link} alt={card.name} className="popup__img" />
          <h3 className="popup__card-name">{card.name}</h3>
        </div>
      )}
    </div>
  );
}

export default ImagePopup;
