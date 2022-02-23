const container = document.querySelector('.page__container');
const profilePopUp = container.querySelector('.popup_type_profile');
const profileEditButton = container.querySelector('.profile__button-edit');
const profileCloseButton = container.querySelector('.popup__close-button');
const nameInput = container.querySelector('[name="user-name"]');
const aboutInput = container.querySelector('[name="user-about"]');
const profileName = container.querySelector('.profile__name');
const profileAbout = container.querySelector('.profile__subtitle');
const addItemPopUp = container.querySelector('.popup_type_add-item');
const addItemButton = container.querySelector('.profile__button-add');
const addItemCloseButton = addItemPopUp.querySelector('.popup__close-button');
const profileForm = container.querySelector('.form');
const addPictureForm = addItemPopUp.querySelector('.form');
const elementsList = container.querySelector('.elements');

const initialCards = [
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

// profile popUp

profileEditButton.addEventListener('click', function() {
  openPopUp(profilePopUp);
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
})

profileCloseButton.addEventListener('click', function() {
  closePopUp(profilePopUp);
})

// add item popUp

addItemButton.addEventListener('click', function() {
  openPopUp(addItemPopUp);
})

addItemCloseButton.addEventListener('click', function() {
  closePopUp(addItemPopUp);
})

// save profile changes

profileForm.addEventListener('submit', submitProfile);

// 6 pictures by default

const elementTemplate = container.querySelector('.item-template').content;

function createElement(elementName, elementLink) {
  const element = elementTemplate.cloneNode(true);
  element.querySelector('.elements__image').src = elementLink;
  element.querySelector('.elements__image').alt = elementName;
  element.querySelector('.elements__name').textContent = elementName;

  elementsList.prepend(element);
}

initialCards.forEach(item => {
  createElement(item.name, item.link);
})

// add likes

elementsList.addEventListener('click', function(evt) {
  if(evt.target.classList.contains('elements__like')) {
    evt.target.classList.toggle('elements__like_active');
  }
})

// add pictures by user

function addPictureByUser(evt) {
  evt.preventDefault();
  const pictureName = addPictureForm.querySelector('[name="image-name"]');
  const pictureLink = addPictureForm.querySelector('[name="image-link"]');
  createElement(pictureName.value, pictureLink.value);
  closePopUp(addItemPopUp);
  pictureName.value = '';
  pictureLink.value = '';
}

addPictureForm.addEventListener('submit', addPictureByUser);

// delete items

elementsList.addEventListener('click', function(evt) {
  if(evt.target.classList.contains('elements__trash')) {
    const item = evt.target.closest('.elements__item');
    item.remove();
  }
})

// open full item popup
const fullItemPopUp = container.querySelector('.popup_type_full-item');

elementsList.addEventListener('click', function(evt) {
  if(evt.target.classList.contains('elements__image')) {
    const imageTitle = container.querySelector('.popup__image-title');
    const popUpImage = container.querySelector('.popup__image');
    const imageName = evt.target.closest('.elements__item').querySelector('.elements__name');
    const image = evt.target.closest('.elements__item').querySelector('.elements__image');
    imageTitle.textContent = imageName.textContent;
    popUpImage.src = image.src;
    openPopUp(fullItemPopUp);
  }
})

// close full item popup
const closeItemPopUpButton = fullItemPopUp.querySelector('.popup__close-button');

closeItemPopUpButton.addEventListener('click', function() {
  closePopUp(fullItemPopUp);
})

function openPopUp(popup) {
  popup.classList.add('popup_opened');
};

function closePopUp(popup) {
  popup.classList.remove('popup_opened');
}

function submitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopUp(profilePopUp);
}
