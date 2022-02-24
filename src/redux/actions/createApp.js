export const basicURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
export const appID = 'enCbhxKpLtKQlEwmokdM';

const printAppID = (id) => {
  console.log(id);
};

const createApp = () => function (dispatch) {
  fetch(basicURL, {
    method: 'POST',
    body: JSON.stringify({ name: 'helpme' }), // Try to remove this later
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.text())
    .then((data) => {
      dispatch(printAppID(data));
    });
};

export default createApp;
