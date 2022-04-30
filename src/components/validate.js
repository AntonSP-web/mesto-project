export const settings = {
  formSelector: '.form',
  inputSelector: '.form__input-item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_type_disabled',
  inputErrorClass: 'form__input-item_type_error',
  errorClass: 'form__input-error_type_active'
};

// очищение всех ошибок в форме
export function clearErrors(formElement, settings) {
  const inputList = formElement.querySelectorAll(settings.inputSelector);
  inputList.forEach(inputElement => {
    hideInputError(formElement, inputElement, settings);
  })
}

// показ ошибки
function showInputError(formElement, inputElement, errorMessage, settings) {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  formError.textContent = errorMessage;
  formError.classList.add(settings.errorClass);
}

// убрать ошибку
function hideInputError(formElement, inputElement, settings) {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  formError.classList.remove(settings.errorClass);
  formError.textContent = '';
}

// показывать или нет ошибки
function isValid(formElement, inputElement, settings) {
  if(!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, settings);
  } else {
    hideInputError(formElement, inputElement, settings);
  }
}

// навесить слушатели на каждый инпут формы
function setEventListeners(formElement, settings) {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const buttonElement = formElement.querySelector(settings.submitButtonSelector);

  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement, settings);
    })
  })
}

// на каждую форму навесить слушатель на все инпуты
export function enableValidation(settings) {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  formList.forEach(formElement => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, settings);
  });
}

// проверка инпутов на невалидность
function hasInvalidInput(inputList) {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  })
}

// переключать кнопку в активное.неактивное состояние
function toggleButtonState(inputList, buttonElement, settings) {
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}

// установка состояния кнопки
export function setSubmitButtonState(formElement, settings) {
  const submitButton = formElement.querySelector(settings.submitButtonSelector);
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  toggleButtonState(inputList, submitButton, settings);
}

// очищение полей формы
export function resetForm(formElement) {
  formElement.reset();
  setSubmitButtonState(formElement, settings);
}
