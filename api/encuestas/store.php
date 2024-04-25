
<?php
include_once "../connection.php";
function validateRequest($request)
{
    return  !isset($request['centro_salud_id']) || !isset($request['nombre_encuestador']) || !isset($request['pregunta_01']);
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $request = json_decode(file_get_contents("php://input"), true);
    if (validateRequest($request)) {
        // Return "Bad Request" status
        header('HTTP/1.0 400 Bad Request');
        echo "Missing required fields";
        exit();
    }
    $conn = createConnection();
    // echo var_dump($requestData);
    $sql = "INSERT INTO cedula_evaluacion.encuesta_prueba (centro_salud_id, nombre_encuestador, pregunta_01)
    values(" . $request["centro_salud_id"] . ",'" . $request["nombre_encuestador"] . "'," . $request["pregunta_01"] . ");";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();
}
