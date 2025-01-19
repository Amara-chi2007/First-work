// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Form validation for the Sign-Up form
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from submitting

        const name = document.getElementById("name").value.trim();
        const number = document.getElementById("number").value.trim();
        const date = document.getElementById("date").value;
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        // Validate the form fields
        if (!name || !number || !date || !username || !email || !password) {
            alert("Please fill in all the fields.");
            return;
        }

        if (!/^\d+$/.test(number)) {
            alert("Mobile number must contain only digits.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Form submitted successfully!");
        form.reset(); // Clear the form fields
    });

    // Handle the Share button click
    const shareButton = document.querySelector("button");
    shareButton.addEventListener("click", () => {
        const comment = document.querySelector("textarea").value.trim();
        const isFirstTime = document.getElementById("first-time").checked;

        if (!comment) {
            alert("Please enter a comment before sharing.");
            return;
        }

        alert(`Shared successfully!\nComment: ${comment}\nFirst Time: ${isFirstTime ? "Yes" : "No"}`);
    });

    // Open social media links in a new tab
    const socialMediaLinks = document.querySelectorAll("a[href^='https://']");
    socialMediaLinks.forEach((link) => {
        link.setAttribute("target", "_blank");
    });

    // Expand/collapse details elements
    const detailsElements = document.querySelectorAll("details");
    detailsElements.forEach((details) => {
        const summary = details.querySelector("summary");
        summary.addEventListener("click", () => {
            detailsElements.forEach((otherDetails) => {
                if (otherDetails !== details) otherDetails.removeAttribute("open");
            });
        });
    });
});