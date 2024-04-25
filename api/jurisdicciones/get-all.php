
<?php
include_once "../connection.php";


$conn = createConnection();
$sql = "Select * from jurisdicciones;";
$result = $conn->query($sql);

// Fetch all rows from the result set as an associative array
$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

// Output the result as JSON
header('Content-Type: application/json');
echo json_encode($data);

$conn->close();
