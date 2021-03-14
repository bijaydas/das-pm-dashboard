import urls from '../configs/url';
import {XTOKEN} from '../configs/credentials';

export const isUserLoggedIn = () => {
  return false;
};

export const login = (email, password, callback = null) => {
  const payload = {
    email,
    password,
  };
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'x-token': XTOKEN,
    },
    body: JSON.stringify(payload),
  };
  fetch(urls.LOGIN, options).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw res.json();
  }).then((res) => {
    callback(null, res);
  }).catch((err) => {
    callback(err, null);
  });
};
