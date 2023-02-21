// Makes logout function
const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    // Sends back to dashboard, logged out
    if (response.ok) {
        document.location.replace('/');
    } else {
        // err
        alert(response.statusText);
    }
};

//Adds Event Listener to button with id #logout
var logoutSubmit = document.querySelector('#logout')
logoutSubmit.addEventListener('click', logout);