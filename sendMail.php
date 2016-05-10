<?php 
if(isset($_POST['submit'])){
    $to = "vitalik_88@yahoo.com"; // this is your Email address
    $from = $_POST['mail']; // this is the sender's Email address
    $name = $_POST['fullname'];
    $subject = $_POST['subject'];
    $message = $name . " sent the following message:" . "\n\n" . $_POST['message'];
    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>