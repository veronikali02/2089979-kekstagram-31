import {GenitivePluralResidue} from './const.js';

const ALERT_SHOW_TIME = 5000;

const errorModal = document.querySelector('#error').content.querySelector('.error');
const errorModalInner = errorModal.querySelector('.error__inner');
const errorBtn = errorModal.querySelector('.error__button');
const successModal = document.querySelector('#success').content.querySelector('.success');
const successModalInner = successModal.querySelector('.success__inner');
const successBtn = successModal.querySelector('.success__button');

const numDecline = (num, nominative, genitiveSingular, genitivePlural) => {
  if (num % 10 === GenitivePluralResidue.variantFirst || num % 100 > GenitivePluralResidue.variantSecond
  && num % 100 < GenitivePluralResidue.variantThird) {
    return genitivePlural;
  }
  return num % 10 === 1 ? nominative : genitiveSingular;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const closeAlert = () => {
  errorModal.remove();
  successModal.remove();

  document.body.removeEventListener('keydown', onDocumentKeydown);
  errorBtn.removeEventListener('click', onButtonClick);
  successBtn.removeEventListener('click', onButtonClick);
};

function onDocumentKeydown (evt) {
  evt.stopPropagation();

  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeAlert();
  }
}

function onButtonClick () {
  closeAlert();
}

function onFadeClick () {
  errorModalInner.addEventListener('click', (evt) => {
    evt.stopPropagation();
  });

  successModalInner.addEventListener('click', (evt) => {
    evt.stopPropagation();
  });

  closeAlert();
}

const dataErrorAlert = () => {
  const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
  const dataError = dataErrorTemplate.cloneNode(true);

  document.body.append(dataError);

  setTimeout(() => {
    dataError.remove();
  }, ALERT_SHOW_TIME);
};

const showErrorAlert = () => {
  document.body.append(errorModal);

  errorBtn.addEventListener('click', onButtonClick);
  document.body.addEventListener('keydown', onDocumentKeydown);
  errorModal.addEventListener('click', onFadeClick);
};

const showSuccessAlert = () => {
  document.body.append(successModal);

  successBtn.addEventListener('click', onButtonClick);
  document.body.addEventListener('keydown', onDocumentKeydown);
  successModal.addEventListener('click', onFadeClick);
};

function debounce (callback, timeoutDelay) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {numDecline, showErrorAlert, showSuccessAlert, dataErrorAlert, debounce, isEscapeKey};
