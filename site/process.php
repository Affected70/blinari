<?


//Retrieve form data.
//GET - user submitted data using AJAX
//POST - in case user does not support javascript, we'll use POST instead
$name = ($_GET['name']) ? $_GET['name']	 : $_POST['name'];
$email = ($_GET['email']) ?$_GET['email'] : $_POST['email'];
$phone_number = ($_GET['phone_number']) ?$_GET['phone_number'] : $_POST['phone_number'];
$comment = ($_GET['comment']) ?$_GET['comment'] : $_POST['comment'];
$mail = ($_GET['mail']) ?$_GET['mail'] : $_POST['mail'];
$rating = ($_GET['rating']) ?$_GET['rating'] : $_POST['rating'];
$config['smtp_charset'] = 'utf-8';	//кодировка сообщений. (windows-1251 или utf-8, итд)

//flag to indicate which method it uses. If POST set it to 1
if ($_POST) $post=1;

//Simple server side validation for POST data, of course, you should validate the email
if (!$name) $errors[count($errors)] = 'Please enter your name.';
if (!$email) $errors[count($errors)] = 'Please enter your email.';
if (!$comment) $errors[count($errors)] = 'Please enter your comment.';
if (!$phone_number) $errors[count($errors)] = 'Please enter your phone number.';

$subject = 'Comment from ' . $name;
$message = '
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head></head>
<body>
<table>
    <tr><td>Имя: </td><td>' . $name . '</td></tr>
    <tr><td>Email: </td><td>' . $email . '</td></tr>
    <tr><td>Телефон: </td><td>' . $phone_number . '</td></tr>
    <tr><td>Сообщение: </td><td>' . nl2br($comment) . '</td></tr>
    <tr><td>Рейтинг: </td><td>' . $rating . '</td></tr>
</table>
</body>
</html>';


// пример использования
require_once "SendMailSmtpClass.php"; // подключаем класс

if ($rating < 3)
   $mailSMTP = new SendMailSmtpClass('blinari.no-reply@yandex.ru', 'Ssirius1', 'ssl://smtp.yandex.ru', 'Blinari', 465); // создаем экземпляр класса
else
   $mailSMTP = new SendMailSmtpClass('blinari.no-reply@mail.ru', 'Ssirius1', 'ssl://smtp.mail.ru', 'Blinari', 465); // создаем экземпляр класса



// $mailSMTP = new SendMailSmtpClass('логин', 'пароль', 'хост', 'имя отправителя');

// заголовок письма
$headers  = 'MIME-Version: 1.0' . "\r\n";
//$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$headers .= "Content-Type: text/html; charset=\"".$config['smtp_charset']."\"\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";
if ($rating < 3) {
    $headers .= "From: blinari.no-reply@yandex.ru\r\n"; // от кого письмо !!! тут e-mail, через который происходит авторизация
    $headers .= "Reply-To: blinari.no-reply@yandex.ru\r\n";
    $headers .= "Return-Path: blinari.no-reply@yandex.ru\r\n";
    $headers .= "CC: blinari.no-reply@yandex.ru\r\n";
    $headers .= "BCC: blinari.no-reply@yandex.ru\r\n";
}
else {
    $headers .= "From: blinari.no-reply@mail.ru\r\n"; // от кого письмо !!! тут e-mail, через который происходит авторизация
    $headers .= "Reply-To: blinari.no-reply@mail.ru\r\n";
    $headers .= "Return-Path: blinari.no-reply@mail.ru\r\n";
    $headers .= "CC: blinari.no-reply@mail.ru\r\n";
    $headers .= "BCC: blinari.no-reply@mail.ru\r\n";
 }

$headers .= "X-Priority: 3\r\n\r\n";


//$result =  $mailSMTP->send('blinari@mail.ru', $subject, $message, $headers); // отправляем письмо

$result =  $mailSMTP->send($mail, $subject, $message, iconv ('utf-8', 'windows-1251', $headers)); // отправляем письмо
// $result =  $mailSMTP->send('Кому письмо', 'Тема письма', 'Текст письма', 'Заголовки письма');
//if($result === true){
//    return 1;
//}else{
//    return 0;
//}

return 1;

?>