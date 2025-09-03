<?php
// proxy.php
$url = "https://github.com/alexkens/js-tutorial";
header("Content-Type: image/jpeg");
echo file_get_contents($url);
?>
