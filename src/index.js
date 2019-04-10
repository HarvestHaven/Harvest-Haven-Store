import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorkerRegistrar';
import { Provider } from 'mobx-react';
import createForage from './localforage'

const forage = new createForage()

ReactDOM.render(
    <Provider forage={forage}>
        <App />
    </Provider>
    , document.getElementById('root'));


const attendees = document.querySelector("#attendees");
console.log('attendees: ', attendees);

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {

        // Actual data:
        console.log('users (external): ', data)

        // Sample UI code
        let html = '';
        data.forEach(user => {
            html +=
                `<div class="card">
                <h2>${user.name}</h2>
                <div>${user.email}</div>
            </div>`
        });
        attendees.innerHTML = html;
    })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
serviceWorker.register();

// if ('serviceWorker' in navigator) {
//     // Use the window load event to keep the page load performant
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('generatedServiceWorker.js');
//     });
// }