
<?php
include_once "../connection.php";


// Extract id from the URL
$municipio_id = $_GET['municipio_id'];
$conn = createConnection();
$sql = "Select * from centros_salud" . ($municipio_id != null ? " where municipio_id = '" . $municipio_id . "';" : "");
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
