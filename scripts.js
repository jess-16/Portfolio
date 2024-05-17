// script.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // You can add your logic here to handle form submission, like sending data to a server or displaying a message to the user.
    // For simplicity, let's just log the form data to the console.
    let formData = new FormData(this);
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }

    // Reset the form after submission
    this.reset();
});
