import React from 'react';
import Pencil from '../images/Pencil.svg';
import plus from '../images/Plus.svg';
import avatarEdit from '../images/avatar.svg';
import Footer from './Footer.js';
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete
}) {

  const currentUser = React.useContext(CurrentUserContext);

  return (<main className="main">
    <section className="profile">
      <button className="profile__edit-avatar"
        onClick={onEditAvatar}>
        <img className="profile__avatar"
          src={
            currentUser.avatar
          }
          alt="Загруженное фото"></img>
        <img className="profile__avatar-edit"
          src={avatarEdit}></img>
      </button>
      <div className="profile__info">
        <h1 className="profile__title"> {
          currentUser.name
        }</h1>
        <button type="button" className="profile__edit-button"
          onClick={onEditProfile}>
          <img src={Pencil}
            alt="Карандаш"></img>
        </button>
        <p className="profile__subtitle"> {
          currentUser.about
        }</p>
      </div>
      <button type="button" className="add-button"
        onClick={onAddPlace}>
        <img className="add-button__icon"
          src={plus}
          alt="Плюсик"></img>
      </button>
    </section>
    <ul className="elements"> {
      cards.map(card => (<Card key={
          card._id
        }
        card={card}
        onCardClick={onCardClick}
        onCardLike={onCardLike}
        onCardDelete={onCardDelete}/>))
    } </ul>

    <Footer/>
  </main>)
}

export default Main;
