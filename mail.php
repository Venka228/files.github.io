<?php

$recepient = "easykatochka@mail.ru";
$sitename = "Voskr Shk";

$name = trim($_GET["name"]);
$surname = trim($_GET["surname"]);
$phone = trim($_GET["phone"]);

$name2 = trim($_GET["name"]);
$surname2 = trim($_GET["surname"]);
$phone2 = trim($_GET["phone"]);
$mail = trim($_GET["mail"]);
$password = trim($_GET["password"]);

$mail = trim($_GET["mail"]);
$password = trim($_GET["password"]);


$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nФамилия: $surname \nТелефон: $phone";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");