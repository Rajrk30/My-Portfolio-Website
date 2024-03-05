document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form data
        const formData = new FormData(form);

        // Construct an object from form data
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // You can now send formDataObject to your server using fetch or any other method
        // For example:
        // fetch("your-server-endpoint", {
        //     method: "POST",
        //     body: JSON.stringify(formDataObject),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // }).then(response => {
        //     if (response.ok) {
        //         // Display success message
        //         alert("Message sent successfully!");
        //         form.reset(); // Clear the form fields
        //     } else {
        //         // Display error message
        //         alert("Failed to send message. Please try again later.");
        //     }
        // }).catch(error => {
        //     console.error("Error:", error);
        //     alert("An unexpected error occurred. Please try again later.");
        // });

        // For demonstration purposes, we'll just display a confirmation message
        alert("Message sent successfully!");
        form.reset(); // Clear the form fields
    });
});
