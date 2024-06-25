
<?php
include_once "../connection.php";
include_once "../helpers.php";
include_once "./answerWeights.php";

function getGradesCedula_02($answers_record)
{
    //     $answerWeight = require "./answerWeights.php";
    $score = 0;
    foreach ($answers_record as $column_name => $value) {

        $score += getAnswerValue($column_name, $value, $answers_record);
    }
    return $score;
}

$conn = createConnection();
$sql = "Select * from formulario_cedulas_01;";
$result = $conn->query($sql);
if ($result->num_rows == 0) {

    returnNotFoundResponse("0 results");
}
// Fetch all rows from the result set as an associative array
$data = array();
while ($row = $result->fetch_assoc()) {
    $row['calificacion'] = getGradesCedula_02($row);
    $data[] = $row;
}

$conn->close();
returnCsvResponse($data, "Califiaciones.csv");
