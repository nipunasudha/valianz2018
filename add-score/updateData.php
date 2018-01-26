<?php

$username = $_GET['username'];
$password = $_GET['password'];
$team = $_GET['team'];
$game = $_GET['game'];
$score = $_GET['score'];

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_PORT => "9393",
    CURLOPT_URL => "http://valianz.ml:9393/api/updateData",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => "{\"requestType\":2,\"teamID\":".$team.",\"gameID\":".$game.",\"score\":".$score."}",
    CURLOPT_HTTPHEADER => array(
        "authorization: Basic ".base64_encode("$username:$password"),
        "cache-control: no-cache"
    ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
    echo "cURL Error #:" . $err;
} else {
    echo $response;
}