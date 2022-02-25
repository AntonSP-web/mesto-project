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
const pictureName = addPictureForm.querySelector('.form__input-item_type_title');
const pictureLink = addPictureForm.querySelector('.form__input-item_type_link');
const elementsList = container.querySelector('.elements');
const fullItemPopUp = container.querySelector('.popup_type_full-item');
const closeItemPopUpButton = fullItemPopUp.querySelector('.popup__close-button');
const popUpImageTitle = fullItemPopUp.querySelector('.popup__image-title');
const popUpImage = fullItemPopUp.querySelector('.popup__image');
const elementTemplate = container.querySelector('.item-template').content;

// profile popUp

function openPopUp(popup) {
  popup.classList.add('popup_opened');
};

function closePopUp(popup) {
  popup.classList.remove('popup_opened');
}

profileEditButton.addEventListener('click', function() {
  openPopUp(profilePopUp);
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
})

profileCloseButton.addEventListener('click', function() {
  closePopUp(profilePopUp);
})

// add item popUp

newCardButton.addEventListener('click', function() {
  openPopUp(newCardPopup);
})

newCardCloseButton.addEventListener('click', function() {
  closePopUp(newCardPopup);
})

// save profile changes

function handleSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopUp(profilePopUp);
}

profileForm.addEventListener('submit', handleSubmitProfile);

// 6 pictures by default



function createElement(elementName, elementLink) {
  const element= elementTemplate.querySelector('.elements__item').cloneNode(true);
  const cardImage = element.querySelector('.elements__image');
  const cardName = element.querySelector('.elements__name');
  const likeButton = element.querySelector('.elements__like');
  const trashButton = element.querySelector('.elements__trash');


  cardImage.src = elementLink;
  cardImage.alt = elementName;
  element.querySelector('.elements__name').textContent = elementName;

  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('elements__like_active');
  })

  trashButton.addEventListener('click', () => {
    element.remove();
  })

  cardImage.addEventListener('click', () => {
    openPopUp(fullItemPopUp);
    popUpImage.src = cardImage.src;
    popUpImage.alt = cardImage.alt;
    popUpImageTitle.textContent = cardName.textContent;
  })

  elementsList.prepend(element);
}

initialCards.forEach(item => {
  createElement(item.name, item.link);
})

// add likes

// elementsList.addEventListener('click', function(evt) {
//   if(evt.target.classList.contains('elements__like')) {
//     evt.target.classList.toggle('elements__like_active');
//   }
// })

// add pictures by user

function handleSubmitNewCard(evt) {
  evt.preventDefault();
  createElement(pictureName.value, pictureLink.value);
  closePopUp(newCardPopup);
  addPictureForm.reset();
}

addPictureForm.addEventListener('submit', handleSubmitNewCard);

// delete items

// elementsList.addEventListener('click', function(evt) {
//   if(evt.target.classList.contains('elements__trash')) {
//     const item = evt.target.closest('.elements__item');
//     item.remove();
//   }
// })

// open full item popup


// elementsList.addEventListener('click', function(evt) {
//   if(evt.target.classList.contains('elements__image')) {

//     const imageName = evt.target.closest('.elements__item').querySelector('.elements__name');
//     const image = evt.target.closest('.elements__item').querySelector('.elements__image');
//     popUpImageTitle.textContent = imageName.textContent;
//     popUpImage.src = image.src;
//     popUpImage.alt = image.alt;
//     openPopUp(fullItemPopUp);
//   }
// })

// close full item popup


closeItemPopUpButton.addEventListener('click', function() {
  closePopUp(fullItemPopUp);
})




