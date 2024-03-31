const ALERT_SHOW_TIME = 5000;

const errorModal = document.querySelector('#error').content.querySelector('.error');
const successModal = document.querySelector('#success').content.querySelector('.success');

const numDecline = (num, nominative, genitiveSingular, genitivePlural) => {
  if (num % 10 === 0 || num % 100 > 4 && num % 100 < 21) {
    return genitivePlural;
  }
  return num % 10 === 1 ? nominative : genitiveSingular;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const closeAlert = () => {
  errorModal.remove();
  successModal.remove();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeAlert();
  }
};

const dataErrorAlert = () => {
  const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
  const dataError = dataErrorTemplate.cloneNode(true);

  document.body.append(dataError);

  setTimeout(() => {
    dataError.remove();
  }, ALERT_SHOW_TIME);
};

const showErrorAlert = () => {
  const errorBtn = errorModal.querySelector('.error__button');

  document.body.append(errorModal);

  errorBtn.addEventListener('click', () => {
    closeAlert();
  });

  document.addEventListener('keydown', onDocumentKeydown);
};

const showSuccessAlert = () => {
  const successBtn = successModal.querySelector('.success__button');

  document.body.append(successModal);

  successBtn.addEventListener('click', () => {
    closeAlert();
  });

  document.addEventListener('keydown', onDocumentKeydown);
};

function debounce (callback, timeoutDelay) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {numDecline, showErrorAlert, showSuccessAlert, dataErrorAlert, debounce, isEscapeKey};
