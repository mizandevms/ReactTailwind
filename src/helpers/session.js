import cookie from "js-cookie";
// const inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);

export const setCookie = (key, value) => {
  cookie.set(key, value, {
    expires: 1,
    path: "/",
  });
};

export const removeCookie = (key) => {
  cookie.remove(key, {
    expires: 1,
  });
};

export const getCookie = (key) => {
  getCookieFromBrowser(key)
};

export const getCookieFromBrowser = (key) => {
  return cookie.get(key);
};

//localstorage
export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const getLocalStorage = (key, convertToObject) => {
  return convertToObject
    ? JSON.parse(localStorage.getItem(key))
    : localStorage.getItem(key);
};
