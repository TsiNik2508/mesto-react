import React from 'react';
import PopupWithForm from './PopupWithForm';

function ProfilePopup(props) {
  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <label className="popup__inputs">
        <input
          className="popup__input popup__input_type_name"
          type="text"
          name="name"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
          value={props.name}
          onChange={props.onNameChange}
        />
        <span className="popup__input-error name-input-error"></span>
      </label>
      <label className="popup__inputs">
        <input
          className="popup__input popup__input_type_bio"
          type="text"
          name="about"
          placeholder="Род занятий"
          required
          minLength="2"
          maxLength="200"
          value={props.about}
          onChange={props.onAboutChange}
        />
        <span className="popup__input-error bio-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default ProfilePopup;
