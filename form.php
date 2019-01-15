<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

$errors = [];

function validate($field, $message)
{
    global $errors;
    if (empty($field)) {
        $errors[] = $message;
    }
}

validate($_POST['name'], "Nombre");
validate($_POST['last_name'], "Apellido");
validate($_POST['email'], "E-mail");
validate($_POST['phone'], "Teléfono");
validate($_POST['comments'], "Mensaje");

$Body = "";
$Body .= "Nombre: ";
$Body .= $_POST["name"];
$Body .= "\n";

$Body .= "Apellido: ";
$Body .= $_POST["last_name"];
$Body .= "\n";

$Body .= "Teléfono: ";
$Body .= $_POST["phone"];
$Body .= "\n";

$Body .= "E-mail: ";
$Body .= $_POST["email"];
$Body .= "\n";

$Body .= "Mensaje: ";
$Body .= $_POST["comments"];
$Body .= "\n";

if(!empty($errors)) {
    echo "<strong>La siguiente información es de ingreso obligatorio:</strong> <br>" . implode(', ', $errors) . "<br><br>";
    die();
}

$email = $_POST["email"];
$name = $_POST["name"] . ", " . $_POST["last_name"];

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {

    //Server settings
    /*$mail->SMTPDebug = 1;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.sparkpostmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'SMTP_Injection';                 // SMTP username
    $mail->Password = '9fa50d17d9601c0d11c7bc2e2fe15eb22645ecf8';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to
    */

    //Recipients
    $mail->setFrom('contacto@escuadrone.com.ar', 'Escuadrone');
    $mail->addAddress('contacto@escuadrone.com.ar', 'Escuadrone');     // Add a recipient     // Name is optional
    //$mail->addAddress('maxinuss@gmail.com', 'Escuadrone');     // Add a recipient     // Name is optional
    $mail->addReplyTo($email, $name);

    //Content
    $mail->isHTML(false);                                  // Set email format to HTML
    $mail->Subject = 'Mensaje de contacto';
    $mail->Body    = $Body;
    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'OK';
} catch (Exception $e) {
    echo 'ERROR';
}