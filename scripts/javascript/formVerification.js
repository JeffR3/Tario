// JavaScript source code
/*
 * Purpose:
 * -Verification of form by either sign up or logging in
 * -Save returned info as user
 * -Dealing with main page logic
 */

/*TODO:
 * Work on actual input
 */

//Changing forms from button press
function openPage(evt, formFillingOut) {
    var i;

    var tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", '');
    }

    document.getElementById(formFillingOut).style.display = "block";
    evt.currentTarget.className += "active";
}

// Get the element with id="defaultOpen" and click on it
//document.getElementById("defaultOpen").click();

function signUpContactVerify() {
    let emailInput = document.getElementsByName("email")[0];
    let phoneInput = document.getElementsByName("phoneNumber")[0];
    //Both values have no input
    if (emailInput.value == '' && phoneInput.value == '') {
        alert("Contact method required");
        return;
    }
    //Email Input has a value and phone input doesn't
    else if (emailInput.value != '' && phoneInput.value == '') {
        emailInput.setAttribute('required', '');
    }
    //Phone input has a value and email doesn't
    else if (emailInput.value == '' && phoneInput.value != '') {
        phoneInput.setAttribute('required', '');
    }
    //Both have input
    else {
        phoneInput.setAttribute('required', '');
        emailInput.setAttribute('required', '');
    }
    document.getElementById("signUpForm").children[0].submit();
}