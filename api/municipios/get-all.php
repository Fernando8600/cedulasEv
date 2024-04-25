
<?php
include_once "../connection.php";


// Extract id from the URL
$jurisdiccion_id = $_GET['jurisdiccion_id'];
$conn = createConnection();
$sql = "Select * from municipios" . ($jurisdiccion_id != null ? " where jurisdiccion_id = '" . $jurisdiccion_id . "';" : "");
$result = $conn->query($sql);

// Fetch the first row from the result set as an associative array
$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

// Output the result as JSON
header('Content-Type: application/json');
echo json_encode($data);

$conn->close();
