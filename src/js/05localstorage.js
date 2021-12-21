"use strict";

function getObjectFromLocalStorage() {
  const localStorageData = localStorage.getItem('data');
  if (localStorageData !== 'null') {
    const objectArray = JSON.parse(localStorageData);
    data = objectArray;
    getPalette();
    getUserData();
  }
}
getObjectFromLocalStorage();
