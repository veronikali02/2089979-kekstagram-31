const FILTER = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed',
};

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Сохраняю...'
};

const genitivePluralResidue = {
  variantFirst: 0,
  variantSecond: 4,
  variantThird: 21,
};

const sortFunc = {
  random: () => 0.5 - Math.random(),
  discussed: (a, b) => b.comments.length - a.comments.length
};

const MAX_PICTURE_COUNT = 10;

const DEBOUNCE_DELAY = 500;

export {FILTER, SubmitButtonText, genitivePluralResidue, sortFunc, MAX_PICTURE_COUNT, DEBOUNCE_DELAY};
