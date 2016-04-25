<?php

// Pear Mail Library
require_once "Mail.php";

// Email Submit
// Note: filter_var() requires PHP >= 5.2.0
if ( isset($_POST['email']) && isset($_POST['name']) && isset($_POST['subject']) && isset($_POST['message']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ) {
  // detect & prevent header injections
  $test = "/(content-type|bcc:|cc:|to:)/i";
  foreach ( $_POST as $key => $val ) {
    if ( preg_match( $test, $val ) ) {
      exit;
    }
  }

  $from = $_POST["name"];
  $to = 'dsainzm@gmail.com,cmejiasr88@gmail.com';
  $subject = $_POST['subject'];
  $body = 'We got an email from ' . $from . ' with email ' . $_POST['email'] . '. ' . $_POST['message'];

  $headers = array(
      'From' => $from,
      'To' => $to,
      'Subject' => $subject
  );

  $mail = new Mail();
  $smtp = $mail->factory('smtp', array(
          'host' => 'ssl://smtp.gmail.com',
          'port' => '465',
          'auth' => true,
          'username' => 'cmejiasr88@gmail.com',
          'password' => 'oatwwigbjtalxjuy'
      ));

  $mail = $smtp->send($to, $headers, $body);

  $pear = new PEAR();
  if ($pear->isError($mail)) {
      echo('<p>' . $mail->getMessage() . '</p>');
  } else {
      echo('<p>Message successfully sent!</p>');
  }

}

?>
