export const basicURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
export const appID = 'enCbhxKpLtKQlEwmokdM';

const printAppID = (id) => {
  console.log(id);
};

const createApp = () => {
  fetch(basicURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.text())
    .then((data) => {
      printAppID(data);
    });
};

export default createApp;
