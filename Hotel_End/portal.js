function pre_filled_Password() {
    const password = document.getElementById('password').value;
    const email    = document.getElementById('email').value;

    
    if (!password || !email) {
        alert("Please fill in both Email and Password.");
        return false;              
    }

    return true;     
}


function toggle_password() {
    console.log("Checkbox clicked");
    const passwordField = document.getElementById('password');
    const isChecked     = document.getElementById('showPassword').checked;
    passwordField.type = isChecked ? 'text' : 'password';
}
