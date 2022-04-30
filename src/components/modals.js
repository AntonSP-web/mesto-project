// open popUp
export function openPopUp(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeEsc);
  document.addEventListener('click', closeOverlay);
}

// close popup
export function closePopUp(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEsc);
  document.removeEventListener('click', closeOverlay);
}

// close by ESC and overlay
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
