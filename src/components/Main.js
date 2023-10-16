import React, { useState, useEffect } from 'react';
import AvatarPopup from './AvatarPopup';
import ProfilePopup from './ProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import { api } from '../utils/Api';
import Card from './Card';
import ImagePopup from './ImagePopup';

function Main() {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const openAvatarPopup = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const closeAvatarPopup = () => {
    setIsEditAvatarPopupOpen(false);
  };

  const openProfilePopup = () => {
    setIsEditProfilePopupOpen(true);
  };

  const closeProfilePopup = () => {
    setIsEditProfilePopupOpen(false);
  };

  const openAddPlacePopup = () => {
    setIsAddPlacePopupOpen(true);
  };

  const closeAddPlacePopup = () => {
    setIsAddPlacePopupOpen(false);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

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
          <button className="profile__avatar-edit-button" alt="Редактировать аватар"onClick={openAvatarPopup}></button>
        </div>
        <div className="profile__info">
          <div className="profile__info-box">
            <h1 className="profile__title">{userName}</h1>
            <button className="profile__edit-button" type="button" onClick={openProfilePopup}></button>
          </div>
          <p className="profile__bio">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={openAddPlacePopup}></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={handleCardClick} />
        ))}
      </section>

      <AvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAvatarPopup} />
      <ProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeProfilePopup} />
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAddPlacePopup} />
      {selectedCard && <ImagePopup card={selectedCard} isOpen={Boolean(selectedCard)} onClose={closeAllPopups} />}

    </main>
  );
}

export default Main;
