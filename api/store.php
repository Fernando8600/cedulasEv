<?php
$filepath = $_FILES["file"]["name"];
//filepath = "uploads/pruebatxt.txt";
include_once "connection.php";
$file = fopen($filepath, "r");
$index = 0;
while (!feof($file)) {
    $index++;
    echo $index;

    $rowvalues = fgetcsv($file, null, ",");
    if ($index == 1) {
        echo "Continue";
        continue;
    }
    $sql = "INSERT INTO tabla_prueba (valor, valor2) VALUES ('" . $rowvalues[0] . "', '" . $rowvalues[1] . "')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        //echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
fclose($file);
$conn->close();
