import './modal.js';
import './upload-photo-preview.js';
import {dataErrorAlert} from './util.js';
import {configFilter} from './filter.js';
import {savePhotos} from './create-photo-modal.js';
import {getData} from './api.js';
import {renderUsersPhotos} from './create-miniature.js';

getData()
  .then((data) => {
    renderUsersPhotos(data);
    savePhotos(data);
    configFilter(data);
  })
  .catch(() => {
    dataErrorAlert();
  });
