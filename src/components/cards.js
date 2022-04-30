import { openPopUp } from './modals';
import { popUpImageTitle, popUpImage, elementTemplate, fullItemPopUp } from './data';

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
    popUpImage.src = card.link;
    popUpImage.alt = card.name;
    popUpImageTitle.textContent = card.name;
    openPopUp(fullItemPopUp);
  });

  return element;
}


// show item on the page
export function renderItem(item, container) {
  container.prepend(item);
}
