const editButton = document.querySelector('.profile__button-edit');
const popUp = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');
const formProfile = document.querySelector('.form');
const elemList = document.querySelector('.elements');

editButton.addEventListener('click', openPopUp);
closeButton.addEventListener('click', closePopUp);

elemList.addEventListener('click', function (evt) {
  if(evt.target.classList.contains('elements__like')) {
    evt.target.classList.toggle('elements__like_active');
  }
});

function openPopUp() {
  popUp.classList.add('popup_opened');
  const profileName = document.querySelector('.profile__name');
  const userName = document.querySelector('[name="user-name"]');
  userName.value = profileName.textContent;
  const profileAbout = document.querySelector('.profile__subtitle');
  const userAbout = document.querySelector('[name="user-about"]');
  userAbout.value = profileAbout.textContent;

}

function closePopUp() {
  popUp.classList.remove('popup_opened');
}


