const form = document.getElementById("registration-form");

document.addEventListener("DOMContentLoaded" , function () {
    // get elmentes---
    const feedbackDiv = document.getElementById("form-feedback"),
    username = document.getElementById("username"),
    email = document.getElementById("email"),
    password = document.getElementById("password");

    form.addEventListener("submit" , function (event) {
        event.preventDefault();

        // get values--
        const usernameValue = username.value.trim(),
        emailValue = email.value.trim(),
        passwordValue = password.value.trim();

        // Validation values---
        let isValid = true, messages = [];

        // user validation---
        if(usernameValue.length < 3){
            isValid = false;
            messages.push("username should be more tahn 3 letters");
        }

        // email validation--
        if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailValue)) {
            isValid = false;
            messages.push("email is not valid");
        }

        // password validation--
        if(passwordValue.length < 8){
            isValid = false;
            messages.push("password should be more than 6 letters");
        }

        // check valid---
        if(isValid){
            feedbackDiv.style.display = "block";
            feedbackDiv.style.color = "#28a745";
            feedbackDiv.textContent = "Registration successful!";
        }
        else {
            feedbackDiv.style.display = "block";
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.innerHTML = messages.join("<br>");
        }
    })
})