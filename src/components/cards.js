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
const container = document.querySelector('.page__container');
const fullItemPopUp = container.querySelector('.popup_type_full-item');
const popUpImageTitle = fullItemPopUp.querySelector('.popup__image-title');
const popUpImage = fullItemPopUp.querySelector('.popup__image');
const elementTemplate = container.querySelector('.item-template').content;

//create image item by user, delete image by user, add likes and open popup with full image
export function createElement(card) {
  const element = elementTemplate.querySelector('.elements__item').cloneNode(true);
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

function openPopUp(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeEsc);
  document.addEventListener('click', closeOverlay);
}
