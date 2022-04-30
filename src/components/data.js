export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const settings = {
  formSelector: '.form',
  inputSelector: '.form__input-item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_type_disabled',
  inputErrorClass: 'form__input-item_type_error',
  errorClass: 'form__input-error_type_active'
};

export const container = document.querySelector('.page__container');
export const profilePopUp = container.querySelector('.popup_type_profile');
export const profileEditButton = container.querySelector('.profile__button-edit');

export const profileCloseButton = profilePopUp.querySelector('.popup__close-button');
export const nameInput = profilePopUp.querySelector('.form__input-item_type_name');
export const aboutInput = profilePopUp.querySelector('.form__input-item_type_about');

export const profileName = container.querySelector('.profile__name');
export const profileAbout = container.querySelector('.profile__subtitle');
export const newCardPopup = container.querySelector('.popup_type_add-item');

export const newCardButton = container.querySelector('.profile__button-add');
export const newCardCloseButton = newCardPopup.querySelector('.popup__close-button');
export const profileForm = profilePopUp.querySelector('.form');

export const newCardForm = newCardPopup.querySelector('.form');
export const pictureName = newCardForm.querySelector('.form__input-item_type_title');
export const pictureLink = newCardForm.querySelector('.form__input-item_type_link');

export const elementsList = container.querySelector('.elements');
export const fullItemPopUp = container.querySelector('.popup_type_full-item');
export const fullItemPopUpCloseButton = fullItemPopUp.querySelector('.popup__close-button');

export const popUpImageTitle = fullItemPopUp.querySelector('.popup__image-title');
export const popUpImage = fullItemPopUp.querySelector('.popup__image');
export const elementTemplate = container.querySelector('.item-template').content;
