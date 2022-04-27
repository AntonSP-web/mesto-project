import '../pages/index.css';

import { initialCards, createElement } from './cards';

const container = document.querySelector('.page__container');
const profilePopUp = container.querySelector('.popup_type_profile');
const profileEditButton = container.querySelector('.profile__button-edit');
const profileCloseButton = profilePopUp.querySelector('.popup__close-button');
const nameInput = profilePopUp.querySelector('.form__input-item_type_name');
const aboutInput = profilePopUp.querySelector('.form__input-item_type_about');
const profileName = container.querySelector('.profile__name');
const profileAbout = container.querySelector('.profile__subtitle');
const newCardPopup = container.querySelector('.popup_type_add-item');
const newCardButton = container.querySelector('.profile__button-add');
const newCardCloseButton = newCardPopup.querySelector('.popup__close-button');
const profileForm = profilePopUp.querySelector('.form');
const newCardForm = newCardPopup.querySelector('.form');
const pictureName = newCardForm.querySelector('.form__input-item_type_title');
const pictureLink = newCardForm.querySelector('.form__input-item_type_link');
const elementsList = container.querySelector('.elements');
const fullItemPopUp = container.querySelector('.popup_type_full-item');
const fullItemPopUpCloseButton = fullItemPopUp.querySelector('.popup__close-button');
// const popUpImageTitle = fullItemPopUp.querySelector('.popup__image-title');
// const popUpImage = fullItemPopUp.querySelector('.popup__image');
// const elementTemplate = container.querySelector('.item-template').content;


// open popUp
function openPopUp(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeEsc);
  document.addEventListener('click', closeOverlay);
}

// close popup
function closePopUp(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEsc);
  document.removeEventListener('click', closeOverlay);
}

function handleProfileEditButton() {
  clearErrors(profileForm);
  openPopUp(profilePopUp);
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  setSubmitButtonState(profileForm);
}

function handleProfileClose() {
  closePopUp(profilePopUp);
}

// open new card popup
function handleNewCardButton() {
  clearErrors(newCardForm);
  resetForm(newCardForm);
  openPopUp(newCardPopup);
}

// close new card popup
function handleNewCardClose() {
  closePopUp(newCardPopup);
}

// save profile changes
function handleSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopUp(profilePopUp);
}

// //create image item by user, delete image by user, add likes and open popup with full image
// function createElement(card) {
//   const element = elementTemplate.querySelector('.elements__item').cloneNode(true);
//   const cardImage = element.querySelector('.elements__image');
//   const cardName = element.querySelector('.elements__name');
//   const likeButton = element.querySelector('.elements__like');
//   const trashButton = element.querySelector('.elements__trash');

//   cardImage.src = card.link;
//   cardImage.alt = card.name;
//   cardName.textContent = card.name;

//   likeButton.addEventListener('click', () => {
//     likeButton.classList.toggle('elements__like_active');
//   });

//   trashButton.addEventListener('click', () => {
//     element.remove();
//   });

//   cardImage.addEventListener('click', () => {
//     popUpImage.src = cardImage.src;
//     popUpImage.alt = cardImage.alt;
//     popUpImageTitle.textContent = cardName.textContent;
//     openPopUp(fullItemPopUp);
//   });
//   return element;
// }

// show item on the page
function renderItem(item, container) {
  container.prepend(item);
}

// add new image on the page
function handleSubmitNewCard(evt) {
  evt.preventDefault();
  const userCards = {
    name: pictureName.value,
    link: pictureLink.value
  };
  const card = createElement(userCards);
  closePopUp(newCardPopup);
  renderItem(card, elementsList);
  newCardForm.reset();
}

// close full image
function handleFullItemPopUpClose() {
  closePopUp(fullItemPopUp);
}

profileEditButton.addEventListener('click', handleProfileEditButton);
profileCloseButton.addEventListener('click', handleProfileClose);
newCardButton.addEventListener('click', handleNewCardButton);
newCardCloseButton.addEventListener('click', handleNewCardClose);
profileForm.addEventListener('submit', handleSubmitProfile);

// add 6 pictures by default
initialCards.forEach((item) => {
  const card = createElement(item);
  renderItem(card, elementsList);
});

newCardForm.addEventListener('submit', handleSubmitNewCard);
fullItemPopUpCloseButton.addEventListener('click', handleFullItemPopUpClose);

// esc
function closeEsc(evt) {
  if(evt.key === 'Escape') {
    const openPopUp = document.querySelector('.popup_opened');
    closePopUp(openPopUp);
  }
}

function closeOverlay(evt) {
  const openPopUp = document.querySelector('.popup_opened');
  if(evt.target === openPopUp) {
    closePopUp(openPopUp);
  }
}


// validation

function showInputError(formElement, inputElement, errorMessage) {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input-item_type_error');
  formError.textContent = errorMessage;
  formError.classList.add('form__input-error_type_active');
}

function hideInputError(formElement, inputElement) {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input-item_type_error');
  formError.classList.remove('form__input-error_type_active');
  formError.textContent = '';
}

function isValid(formElement, inputElement) {
  if(!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.form__input-item'));
  const buttonElement = formElement.querySelector('.form__button');

  // toggleButtonState(inputList, buttonElement);

  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    })
  })
}

function enableValidation() {
  const formList = Array.from(document.querySelectorAll('.form'));

  formList.forEach(formElement => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
}

enableValidation();

// profileForm.addEventListener('input', () => {
//   isValid()
// });
function hasInvalidInput(inputList) {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  })
}

function toggleButtonState(inputList, buttonElement) {
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add('form__button_type_disabled');
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove('form__button_type_disabled');
    buttonElement.removeAttribute('disabled');
  }
}

function setSubmitButtonState(formElement) {
  const submitButton = formElement.querySelector('.form__button');
  const inputList = Array.from(formElement.querySelectorAll('.form__input-item'));
  toggleButtonState(inputList, submitButton);
}

function resetForm(formElement) {
  formElement.reset();
  setSubmitButtonState(formElement);
}

function clearErrors(formElement) {
  const inputList = formElement.querySelectorAll('.form__input-item');
  inputList.forEach(inputElement => {
    hideInputError(formElement, inputElement);
  })
}
