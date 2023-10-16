import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <label className="popup__inputs">
        <input
          className="popup__input popup__input_type_name"
          type="text"
          name="name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          value={props.name}
          onChange={props.onNameChange}
        />
        <span className="popup__input-error card-name-input-error"></span>
      </label>
      <label className="popup__inputs">
        <input
          className="popup__input popup__input_type_link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
          value={props.link}
          onChange={props.onLinkChange}
        />
        <span className="popup__input-error card-link-input-error"></span>
      </label>
      <button className="popup__button" type="submit">
        Создать
      </button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
