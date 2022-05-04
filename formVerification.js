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

//Retrieve login info, sending to server
function login() {
    alert("User logging in");
}

//Retrieve signup info, sending to server
function signup() {
    alert("User signed up");
}