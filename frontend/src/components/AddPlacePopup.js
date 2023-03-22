import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({name, link});
  }

  return (
    <PopupWithForm name="add-card" title="Новое место" buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <label htmlFor="addname-input" className="popupProfile__label">
        <input type="text" placeholder="Название" name="name"
          onChange={handleChangeName}
          value={name}
          className="popupProfile__input popupProfile__input_type_add-name"
          id="addname-input"
          minLength="2"
          maxLength="30"
          required></input>
        <span id="input-addname-error" className="popupProfile__input-error addname-input-error"></span>
      </label>
      <label htmlFor="url-input" className="popupProfile__label">
        <input type="url" placeholder="Ссылка на картинку" name="link"
          onChange={handleChangeLink}
          value={link}
          className="popupProfile__input popupProfile__input_type_link"
          id="url-input"
          required></input>
        <span id="input-url-error" className="popupProfile__input-error url-input-error"></span>
      </label>

    </PopupWithForm>
  )
};
export default AddPlacePopup;
