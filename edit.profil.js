function togglePassword() {
    const passwordField = document.getElementById("password");
    const toggleIcon = document.querySelector(".toggle-password");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.replace("fa-eye-slash", "fa-eye");
    } else {
        passwordField.type = "password";
        toggleIcon.classList.replace("fa-eye", "fa-eye-slash");
    }
}
