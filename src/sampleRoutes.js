/*	Author: Michael Preston
 *	Created Date: "04-10-2019"
 */

// These are from Youtube : https://www.youtube.com/watch?v=qw1JmUudpjk

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