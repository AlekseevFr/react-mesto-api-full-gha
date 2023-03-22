import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {

  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({name, about: description});
  }
  return (
    <PopupWithForm name="edit-card" title="Редактировать профиль" buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <label htmlFor="name-input" className="popupProfile__label">
        <input type="text" placeholder="Имя" name="name"
          onChange={handleChangeName}
          value={
            name || ''
          }
          className="popupProfile__input popupProfile__input_type_name"
          id="name-input"
          minLength="2"
          maxLength="40"
          required></input>
        <span id="input-name-error" className="popupProfile__input-error name-input-error"></span>
      </label>
      <label htmlFor="about-input" className="popupProfile__label">
        <input type="text" placeholder="Профессия" name="about"
          onChange={handleChangeDescription}
          value={
            description || ''
          }
          className="popupProfile__input popupProfile__input_type_about"
          id="about-input"
          minLength="2"
          maxLength="200"
          required></input>
        <span id="input-about-error" className="popupProfile__input-error about-input-error"></span>
      </label>

    </PopupWithForm>
  );
}
export default EditProfilePopup;
