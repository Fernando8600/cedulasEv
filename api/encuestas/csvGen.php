<?php
include_once "../connection.php";
include_once "../helpers.php";

$conn = createConnection();
$sql = "SELECT * FROM formulario_cedulas_01;";
$result = $conn->query($sql);
if ($result->num_rows == 0) {
    returnNotFoundResponse("0 results");
}

$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

$conn->close();
returnCsvResponse($data, "Formulario_01.csv");
