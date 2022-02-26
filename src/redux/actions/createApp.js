export const basicURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
export const appID = 'enCbhxKpLtKQlEwmokdM';

const createApp = () => {
  fetch(basicURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default createApp;
