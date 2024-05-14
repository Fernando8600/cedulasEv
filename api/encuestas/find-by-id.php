
<?php
include_once "../connection.php";

if (isset($_GET['id'])) {
    // Extract id from the URL
    $id = $_GET['id'];
    $conn = createConnection();
    $sql = "Select * from formulario_cedulas_02 where id = '" . $id . "';";
    $result = $conn->query($sql);
    if ($result->num_rows == 1) {
        // Fetch the first row from the result set as an associative array
        $row = $result->fetch_assoc();

        // Output the result as JSON
        header('Content-Type: application/json');
        echo json_encode($row);
    } elseif ($result->num_rows == 0) {
        http_response_code(404);
        echo "No record found";
    } else {

        echo "Multiple records found"; // This should not happen if 'id' is a unique key
    }
    $conn->close();
} else {
    http_response_code(400);
    echo "id parameter is missing in the URL";
}
