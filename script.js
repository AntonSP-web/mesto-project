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
const addPictureForm = newCardPopup.querySelector('.form');
const pictureName = addPictureForm.querySelector(
  '.form__input-item_type_title'
);
const pictureLink = addPictureForm.querySelector('.form__input-item_type_link');
const elementsList = container.querySelector('.elements');
const fullItemPopUp = container.querySelector('.popup_type_full-item');
const closeItemPopUpButton = fullItemPopUp.querySelector(
  '.popup__close-button'
);
const popUpImageTitle = fullItemPopUp.querySelector('.popup__image-title');
const popUpImage = fullItemPopUp.querySelector('.popup__image');
const elementTemplate = container.querySelector('.item-template').content;

// open popUp
function openPopUp(popup) {
  popup.classList.add('popup_opened');
}

// close popup
function closePopUp(popup) {
  popup.classList.remove('popup_opened');
}

function handleProfileEditButton() {
  openPopUp(profilePopUp);
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

function handleProfileCloseButton() {
  closePopUp(profilePopUp);
}

// open new card popup
function handleNewCardButton() {
  openPopUp(newCardPopup);
}

// close new card popup
function handleNewCardCloseButton() {
  closePopUp(newCardPopup);
}

// save profile changes
function handleSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopUp(profilePopUp);
}

//create image item by user, delete image by user, add likes and open popup with full image
function createElement(card) {
  const element = elementTemplate
    .querySelector('.elements__item')
    .cloneNode(true);
  const cardImage = element.querySelector('.elements__image');
  const cardName = element.querySelector('.elements__name');
  const likeButton = element.querySelector('.elements__like');
  const trashButton = element.querySelector('.elements__trash');

  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardName.textContent = card.name;

  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('elements__like_active');
  });

  trashButton.addEventListener('click', () => {
    element.remove();
  });

  cardImage.addEventListener('click', () => {
    popUpImage.src = cardImage.src;
    popUpImage.alt = cardImage.alt;
    popUpImageTitle.textContent = cardName.textContent;
    openPopUp(fullItemPopUp);
  });
  return element;
}

// show item on the page
function renderItem(item, container) {
  container.prepend(item);
}

// add new image on the page
function handleSubmitNewCard(evt) {
  evt.preventDefault();
  const userCards = {};
  userCards.name = pictureName.value;
  userCards.link = pictureLink.value;
  const card = createElement(userCards);
  closePopUp(newCardPopup);
  renderItem(card, elementsList);
  addPictureForm.reset();
}

// close full image
function handleCloseItemPopUpButton() {
  closePopUp(fullItemPopUp);
}

profileEditButton.addEventListener('click', handleProfileEditButton);
profileCloseButton.addEventListener('click', handleProfileCloseButton);
newCardButton.addEventListener('click', handleNewCardButton);
newCardCloseButton.addEventListener('click', handleNewCardCloseButton);
profileForm.addEventListener('submit', handleSubmitProfile);

// add 6 pictures by default
initialCards.forEach((item) => {
  const card = createElement(item);
  renderItem(card, elementsList);
});

addPictureForm.addEventListener('submit', handleSubmitNewCard);
closeItemPopUpButton.addEventListener('click', handleCloseItemPopUpButton);
