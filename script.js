// const editButton = document.querySelector('.profile__button-edit');
// const popUp = document.querySelector('.popup');
// const closeButton = document.querySelector('.popup__close-button');
// const formProfile = document.querySelector('.form');
// const elemList = document.querySelector('.elements');
// const addButton = document.querySelector('.profile__button-add');
// const addPopUp = document.querySelector('.popup-add');
// const closeAddPopUpButton = document.querySelector('.popup-add .popup__close-button');

// editButton.addEventListener('click', function() {
//   popUp.classList.add('popup_opened');
//   const profileName = document.querySelector('.profile__name');
//   const userName = document.querySelector('[name="user-name"]');
//   userName.value = profileName.textContent;
//   const profileAbout = document.querySelector('.profile__subtitle');
//   const userAbout = document.querySelector('[name="user-about"]');
//   userAbout.value = profileAbout.textContent;
// });

// closeButton.addEventListener('click', function() {
//   popUp.classList.remove('popup_opened');
// });

// elemList.addEventListener('click', function(evt) {
//   if(evt.target.classList.contains('elements__like')) {
//     evt.target.classList.toggle('elements__like_active');
//   }
// });

// addButton.addEventListener('click', function() {
//   addPopUp.classList.toggle('popup_opened');
// });

// closeAddPopUpButton.addEventListener('click', function() {
//   addPopUp.classList.toggle('popup_opened');
// });


// const elemNames = document.querySelectorAll('.elements__name');
// const elemImages = document.querySelectorAll('.elements__image');
// const initialCards = [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   }
// ];

// for(let i = 0; i < elemNames.length; i++) {
//   elemImages[i].src = initialCards[i].link;
//   elemNames[i].textContent = initialCards[i].name;
// }

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

const elementsList = container.querySelector('.elements');
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
