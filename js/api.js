import {dataErrorAlert, showErrorAlert} from './util.js';

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const load = (route, errorText, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, {method, body})
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        errorText();
      }
    })
    .catch(() => {
      errorText();
    });

const getData = () => load(Route.GET_DATA, dataErrorAlert);

const sendData = (body) => load(Route.SEND_DATA, showErrorAlert, Method.POST, body);

export {getData, sendData};
