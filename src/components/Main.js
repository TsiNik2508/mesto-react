import React, { useState, useEffect } from 'react';
import ProfilePopup from './ProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import AvatarPopup from './AvatarPopup';
import Card from './Card';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api';

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
  onClose,
  selectedCard,
  isEditProfilePopupOpen,
  isAddPlacePopupOpen,
  isEditAvatarPopupOpen,
  isImagePopupOpen,
}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((error) => {
        console.error('Ошибка при получении пользовательских данных:', error);
      });

    api
      .getInitialCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((error) => {
        console.error('Ошибка при получении карточек:', error);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container-avatar">
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${userAvatar})` }}
          ></div>
          <button
            className="profile__avatar-edit-button"
            alt="Редактировать аватар"
            onClick={onEditAvatarClick}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__info-box">
            <h1 className="profile__title">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={onEditProfileClick}
            ></button>
          </div>
          <p className="profile__bio">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlaceClick}
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onClose={onClose}
          />
        ))}
      </section>

      <ProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={onClose}
        userName={userName}
        userDescription={userDescription}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={onClose}
      />
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={onClose}
      />
      <AvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={onClose}

      />
    </main>
  );
}

export default Main;
