function pre_filld_Password() {
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

function isValidEmail(email) {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
  // Check no empty fileds
    if (!password || !email) {
        alert("Please fill in all fiels.");
        return false; 
    }
  // Check email for valid patttern
       if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
   
    // Alert user with the AP password, or know AP password 
    alert( "Vertified " + "\nYou now have internet access!");

    //  submit to check.htm
   return true; 
}

// Toggle to see password and Confirm Password if checked
function toggle_password() {
    const passwordField = document.getElementById('password');
    const isChecked = document.getElementById('showPassword').checked;
    passwordField.type = isChecked ? 'text' : 'password'; 
}
