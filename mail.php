<?php

    $name =$_POST['username'];
    $email = $_POST['useremail'];
    $message = $_POST['message'];


    if(isset($_POST['Submit']) ){
      if (($name == "")||($email=="")||($message==""))
          {
          echo "All fields are required, please fill <a href=\"\">the form</a> again.";
          }
      else{
          $from="From: $name<$email>\r\nReturn-path: $email";
          $subject="MetLand Contact";
          mail("admin@bootstrapcafe.net", $subject, $message, $from);
          header('Location: thanks.html');
        }
    }
?>


