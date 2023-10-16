import React from 'react';

function Card(props) {
  const handleClick = () => {
    console.log('Карточка кликнута'); 
    props.onCardClick(props.card);
  };
  

  return (
    <article className="element">
      <button className="element__thrash-button"></button>
      <img src={props.card.link} alt={props.card.name} className="element__img" onClick={handleClick} />
      <div className="element__info">
        <h2 className="element__title">{props.card.name}</h2>
        <button className="element__button" type="button"></button>
        <p className="element__like-count element__like-count_active">{props.card.likes.length}</p>
      </div>
    </article>
  );
}

export default Card;
