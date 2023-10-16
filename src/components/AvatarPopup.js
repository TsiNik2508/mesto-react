import React from 'react';
import PopupWithForm from './PopupWithForm';

function AvatarPopup(props) {
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <label className="popup__inputs">
        <input
          className="popup__input popup__input_type_avatar"
          type="url"
          name="avatar"
          placeholder="Ссылка на аватар"
          required
          minLength="2"
          value={props.avatar}
          onChange={props.onAvatarChange}
        />
        <span className="popup__input-error avatar-input-error"></span>
      </label>
      <button className="popup__button" type="submit">
        Сохранить
      </button>
    </PopupWithForm>
  );
}

export default AvatarPopup;
