
<?php
include_once "../connection.php";


$conn = createConnection();
$sql = "Select * from formulario_cedulas_01;";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // Fetch all rows from the result set as an associative array
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    // Output the result as JSON
    header('Content-Type: application/json');
    echo json_encode($data);
} else {
    echo "0 results";
}



$conn->close();
