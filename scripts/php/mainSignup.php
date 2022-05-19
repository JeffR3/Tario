<?php
//Goal: Handling form data from signUp form

//Connection to db
require 'config.php';

//Reading data from POST method
var_dump($_POST);

//Server Side validation
function validateData($data){
    $data = trim($data);                //Strip unneeded characters in beginning and end of string
    $data = stripslashes($data);        //Removes backslash
    $data = htmlspecialchars($data);    //Converts special characters to HTML entities
}

//Empty variables
$name = $password = '';

//TODO: Find way to remove global 

//Employee Name
    $name = $_POST['name'];
        if (isset($name) ){
            validateData($name);
        }else{
            echo "'name' input is not set";
        }

//TODO: Add contact method input data for phoneNumber/Email
//Phone Number
//Email

//Testing REMOVE AFTER DONE!!!
$password = $_POST['password'];

//Password security by hashing (hash saved in db)
/*
if(isset($_POST['password']) ){
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT, ['cost' => 12]); //Crypt_blowfish algorithm = 60 characters wide
}else{
    echo "'password' input is not set";
}
*/

//SQL Query insertion
$sql = "INSERT INTO employee_list(name,password) VALUES ('$name', '$password')";


if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();


?>