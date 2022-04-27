import '../pages/index.css';

import { initialCards, createElement, renderItem } from './cards';
import { openPopUp, closePopUp, container } from './modals';
import { clearErrors, enableValidation, resetForm, setSubmitButtonState, settings } from './validate';

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

function handleProfileEditButton() {
  clearErrors(profileForm, settings);
  openPopUp(profilePopUp);
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  setSubmitButtonState(profileForm, settings);
}

function handleProfileClose() {
  closePopUp(profilePopUp);
}

// open new card popup
function handleNewCardButton() {
  clearErrors(newCardForm, settings);
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

enableValidation(settings);

