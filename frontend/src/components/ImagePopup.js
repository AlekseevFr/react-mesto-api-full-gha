import Close from '../images/Close-Icon.svg';
function ImagePopup(props) {

  return (
    <div className={
      'popupProfile popupProfile_type_img' + (
        props.isOpen && ' popupProfile_opened'
      )
    }>
      <div className="popupProfile__overlay">
        <div className="popupProfile__container-img">
            <img className="popupProfile__img" 
            src={props.card ? props.card.link : ""} 
            alt={props.card?.name}> 
              
             </img>  
          <h2 className="popupProfile__title-img">
            {
            props.card?.name
          }</h2>
          <button type="button" className="popupProfile__close-button popupProfile__close-button_type_img"
            onClick={
              props.onClose
          }>
            <img className="popupProfile__close-image"
              src={Close}
              alt="Крестик закрытия"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImagePopup;
