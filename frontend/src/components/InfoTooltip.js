import React from "react";
import Close from '../images/Close-Icon.svg';
import Success from '../images/Success.svg';
import Fail from '../images/Fail.svg'

function InfoTooltip ({type, onClose}) {
  const isOpen = Boolean(type);
  
  return (
    <div className={`popupProfile popupProfile_type_edit-card ${isOpen ? 'popupProfile_opened': ''}`}>
    <div className="popupProfile__overlay">
      <div className="popupProfile__container">
        <img className="popupProfile__logo" src={type === 'success' ? Success : Fail}></img>
        <h2 className="popupProfile__text">{type === 'success' ? 'Вы успешно зарегестрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'} </h2>
        <button onClick={onClose} type="button" className="popupProfile__close-button popupProfile__close-button_type_card"><img className="popupProfile__close-image" src={Close} alt="Крестик закрытия"></img></button>
      </div>
    </div>
  </div>  
)
}
export default InfoTooltip;