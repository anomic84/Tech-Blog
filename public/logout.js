// Makes logout function
const logoutFormHandler = async () => {
    console.log("button works");
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    document.location.replace('/login');
};

//Adds Event Listener to button with id #logout
var logoutSubmit = document.querySelector('#logout')
logoutSubmit.addEventListener('click', logoutFormHandler);