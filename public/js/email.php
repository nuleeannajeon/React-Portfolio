<?php
    $toEmail = "nuleeannajeon@gmail.com";
    $mailHeaders = "From: " . $_POST["contactName"] . "<". $_POST["contactEmail"] .">\r\n";
    if(mail($toEmail, $_POST["contactSubject"], $_POST["contactMessage"], $mailHeaders)) {
        print "<p class='success'>Mail Sent.</p>";
    } else {
        print "<p class='Error'>Problem in Sending Mail.</p>";
    }
?>