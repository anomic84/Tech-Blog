// Makes logout function
const logoutFormHandler = async () => {
    console.log("button works");
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    // Sends back to dashboard, logged out
    // if (response.ok) {
    document.location.replace('/login');
    // } else {
    //     // err
    //     alert('Failed to log out');
    // }
};

//Adds Event Listener to button with id #logout
var logoutSubmit = document.querySelector('#logout')
logoutSubmit.addEventListener('click', logoutFormHandler);