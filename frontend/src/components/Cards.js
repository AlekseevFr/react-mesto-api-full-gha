
import React from "react";
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from "./AddPlacePopup";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Cards({email, onLeave}) {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setselectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo().then(setCurrentUser).catch(console.error);
  }, [])
  React.useEffect(() => {
    api.getInitialCards().then(res => {
      setCards(res);
    }).catch(console.error);
  }, []);
  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setselectedCard(card);
  }
  function closeAllPopups() {
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setselectedCard(null);
  }
  function handleUpdateUser(info) {
    api.editUser(info).then((newInfo) => {
      setCurrentUser(newInfo);
      closeAllPopups();
    }).catch(console.error);
  }
  function handleUpdateAvatar({avatar}) {
    api.changeAvatar(avatar).then(newInfo => {
      setCurrentUser(newInfo);
    }).catch(console.error);
  }
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    }).catch(console.error);
  }
  function handleCardDelete(card) {
    const idCard = card._id;
    api.deleteCard(idCard).then(() => {
      setCards((state) => state.filter(card => card._id !== idCard));
    }).catch(console.error);
  }
  function handleAddPlace(newPlace) {
    api.createNewCard(newPlace).then(newCard => {
      setCards((state) => [
        newCard,
        ...state
      ]);
      closeAllPopups();
    }).catch(console.error);
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header>
        <p className="header__email-link">{email}<button onClick={onLeave} className="header__exit-link">Выйти</button>
        </p>
      </Header> 
    <div className="page">
      <Main onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}/>
      <EditProfilePopup isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}/>
      <AddPlacePopup isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlace}/>
      <PopupWithForm name="confirm" title="Вы уверены?"/>
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}/>
      <ImagePopup onClose={closeAllPopups}
        card={selectedCard}
        isOpen={
          Boolean(selectedCard)
        }/>
    </div>
    </CurrentUserContext.Provider>
  );
}
export default Cards;