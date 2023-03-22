import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const refEditAvatar = React.useRef();

  React.useEffect(() => {
    refEditAvatar.current.value = '';
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({avatar: refEditAvatar.current.value});
  }

  return (
    <PopupWithForm name="edit-avatar" title="Обновить аватар" buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <label htmlFor="url-input" className="popupProfile__label">
        <input type="url" placeholder="Ссылка на картинку" name="link"
          ref={refEditAvatar}
          className="popupProfile__input popupProfile__input_type_link"
          id="url-input-ava"
          required="required"></input>
        <span id="input-url-error-ava" className="popupProfile__input-error url-input-ava-error"></span>
      </label>
    </PopupWithForm>
  )
}
export default EditAvatarPopup;
