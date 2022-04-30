import '../pages/index.css';

import { initialCards, settings, container, profilePopUp, profileEditButton, profileCloseButton, nameInput, aboutInput, profileName, profileAbout, newCardPopup, newCardButton, newCardCloseButton, profileForm, newCardForm, pictureName, pictureLink, elementsList, fullItemPopUp, fullItemPopUpCloseButton } from './data';
import { createElement, renderItem } from './cards';
import { openPopUp, closePopUp } from './modals';
import { clearErrors, enableValidation, resetForm, setSubmitButtonState } from './validate';

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

