import CurrentUserContext from "../contexts/CurrentUserContext";
import React from "react";
import basket from '../images/basket.svg';

function Card({card, onCardClick, onCardLike, onCardDelete}) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = 'element__button_active';

  function handleCardClick() {
    onCardClick(card);
  }
  function handleCardLike() {
    onCardLike(card);
  }
  function handleDeleteClick() {
    onCardDelete(card);
  }
  return (
    <li className="element">
      {
      isOwn && (
        <button type="button" className="element__basket-button"
          onClick={handleDeleteClick}>
          <img src={basket}></img>
        </button>
      )
    }
      <img className="element__image"
        src={
          card.link
        }
        alt={
          card.name
        }
        onClick={handleCardClick}></img>
      <div className="element__downbar">
        <h2 className="element__title">
          {
          card.name
        }</h2>
        <button type="button"
          onClick={handleCardLike}
          className={
            'element__button ' + (
            isLiked ? cardLikeButtonClassName : ''
          )
        }></button>
        <p className="element__counter">
          {
          card.likes.length
        }</p>
      </div>
    </li>
  )
}

export default Card;
