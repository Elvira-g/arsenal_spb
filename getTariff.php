<?php

$name = $_POST['name'];
$phone = $_POST['phone'];

$tariff = $_POST['tariffName'];
$nds = $_POST['ndsValue'];
$gun = $_POST['gunValue'];

if (!$phone){
    echo '0';
    die();
}

$subject = "Арсенал - Заказ тарифа - $tariff";

$to = ['sale@myoxrana.ru'];

$headers = "MIME-Version: 1.0"."\r\n";
$headers .= "Content-type: text/html; charset=utf-8"."\r\n";

$message = '
           <html>
                <head>
                    <title>'.$subject.'</title>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                </head>
                <body>';

// body start

$message .= "<h2> Заказ тарифа - $tariff</h2>";

if($name) {
    $message .= "<h3> Имя: $name </h3>";
}

$message .= "<h3> Телефон: $phone </h3>";

$message .= "<h3> НДС: $nds </h3>";

$message .= "<h3> Оружие:  $gun</h3>";

// body end
$message .= '
                </body>
            </html>';


$sended = false;

foreach ($to as $mail){
    $send =  mail($mail, $subject, $message, $headers);
    if ($send) $sended = true;
}

echo $sended ? '1' : '0';

die();

?>