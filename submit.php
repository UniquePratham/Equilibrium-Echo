<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "shaswata.ssaha@gmail.com"; // Your email address
    $subject = "Equilibrium Echo - Therapeutic Chatbot - Contact Form Submission";
    $headers = "From: $email";
    
    $mailBody = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    
    if (mail($to, $subject, $mailBody, $headers)) {
        echo "Thank you for your message!";
    } else {
        echo "Sorry, there was an error.";
    }
    echo "success";
    exit;
}
?>
