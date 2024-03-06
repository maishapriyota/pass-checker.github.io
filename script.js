function checkPassword() {
    var password = document.getElementById("passwordInput").value;
    var result = document.getElementById("result");

    // Regular expressions to check for various criteria
    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasNumbers = /\d/.test(password);
    var hasSymbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

    // Strength assessment logic
    if (password.length < 8 || !hasUpperCase || !hasLowerCase || !hasNumbers || !hasSymbols) {
        result.innerText = "Password is weak";
    } else {
        result.innerText = "Password is strong";
    }
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("passwordInput");
    var showPasswordCheckbox = document.getElementById("showPasswordCheckbox");

    if (showPasswordCheckbox.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}