function handleSignup(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const errors = validatePassword(password);

    if (errors.length === 0) {
        alert("Welcome in!");
    } else {
        alert("Please fix password errors -" + errors.join(" "));
    }
}


function validatePassword(password) {
    // array of errors  will be printed out if the password does not match the rules.
    const errors = [];


    // the different rules for entering a password
    if (password.length < 8 || password.length >= 15){
        errors.push("The password length is either too short or too long, needs to 8 to 15 characters")
    }
    if(/\d/.test(password) == false){
        errors.push("The password must contains at least one number")
    }
    if(/^\p{Lu}/u.test(password) == false){
        errors.push("The first character of the password must be capital")
    }
    if(password.includes("_") == false){
        errors.push("The password must include the character _ ")
    }
    if( /([a-z].*[a-z])/.test(password) == false) {
        errors.push("The password must include at least two lowercase alphabet characters")
    }

    return errors;
}