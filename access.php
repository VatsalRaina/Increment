<?php
// The first line just reads the current json file -> useful for PUT requests later
$json_array = json_decode(file_get_contents('data.json'), true);
$json_array = array('val' => $_POST['val']);
file_put_contents('data.json', json_encode($json_array));
?>
