//fetch is only for front-end (like this client-side js file -- won't run in node)
//uses promises instead of callbacks
//res.json is a method that converts response to json


const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-one');
const messageTwo = document.querySelector('#message-two');

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();

    messageOne.textContent = "Getting forecast...";
    messageTwo.textContent = '';

    const location = search.value;

    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }
        }) 
    })
});