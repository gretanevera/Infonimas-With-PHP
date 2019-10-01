<?php
$name = $_POST['vard'];
$email = $_POST['email'];
$message = $_POST['msg'];

$from = 'From: Infonimo Svečias';
$to = 'info@infonimas.lt';
$subject = 'Labas';
$body = "From: $name\n E-Mail: $email\n Message:\n $message";


if ($_POST['Submit']) {
    if (mail ($to, $subject, $body, $from)) {
        echo '<p>Your message has been sent!</p>';
    } else {
        echo '<p>Something went wrong, go back and try again!</p>';
    }
}

?>