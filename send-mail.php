<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Website owner email
    $to = "nikam.rutuja.g@example.com";  // Replace with your email address
    $subject = "New Enquiry from " . $name;

    // Email content
    $body = "
    Name: $name\n
    Email: $email\n
    Phone: $phone\n
    Message: \n$message
    ";

    // Email headers
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Mail sent successfully!";
    } else {
        echo "Mail sending failed.";
    }
}
?>
