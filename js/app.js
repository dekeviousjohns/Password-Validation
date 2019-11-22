var attempt = 5; //count number of attempts.

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm password").value;
    if ( username == username && confirmPassword == password){
        alert ("Login successfully");
        return false;
    }
    // else{
        // attempt --;// Decrementing by one.
// alert("You have left "+attempt+" attempt;");
// // Disabling fields after 3 attempts.
// if( attempt == 0) {
// document.getElementById("username").disabled = true;
// document.getElementById("password").disabled = true;
// document.getElementById("confirm password").diabled = true;
// document.getElementById("submit").disabled = true;
// return false;
// }
// }
    validatePassword()
} 
function validatePassword() {
var password = document.getElementById('password').value;
var minNumberofChars = 8;
var maxNumberofChars = 20;
var regularExpression  = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,20}$/;
alert(); 
if(password.length < minNumberofChars || password.length > maxNumberofChars){
return false;
    }
if(!regularExpression.test(password)) {
alert("password should contain atleast one number and one special character");
return false;
    }
}
