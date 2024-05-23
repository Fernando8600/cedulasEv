
<?php
include_once "../connection.php";

include_once "./answerWeights.php";
include_once "../helpers.php";
const TABLE_NAME = "formulario_cedulas_03";
function generateSqlFromRequest($request)
{
    $sql = "insert into " . TABLE_NAME . " (";
    $sql = $sql . implode(",", array_keys($request));
    $sql = $sql . ") values('";
    $sql = $sql . implode("','", array_values($request));
    $sql = $sql . "')";

    return $sql;
}
function getGradesCedula_02($answers_record)
{
    //     $answerWeight = require "./answerWeights.php";
    $score = 0;
    foreach ($answers_record as $column_name => $value) {
        $tmp = getAnswerValue($column_name, $value, $answers_record);
        $score += $tmp;
        file_put_contents("borrar.txt", file_get_contents("borrar.txt") . $column_name . ": " . $tmp . " | " . $score . "\n");
    }


    return $score;
}
function validateRequest($request)
{
    return  !isset($request['centro_salud_id']) || !isset($request['nombre_encuestador']) || !isset($request['pregunta_01']) || !isset($request['pregunta_02']) || !isset($request['pregunta_03']) || !isset($request['pregunta_04']) || !isset($request['pregunta_05']) || !isset($request['pregunta_06']) || !isset($request['pregunta_07']) || !isset($request['pregunta_08']) || !isset($request['pregunta_09']) || !isset($request['supervisor_01']) || !isset($request['pregunta_10']) || !isset($request['supervisor_02']) || !isset($request['pregunta_11']) || !isset($request['pregunta_12']) || !isset($request['pregunta_13']) || !isset($request['pregunta_14']) || !isset($request['pregunta_15']) || !isset($request['pregunta_16']) || !isset($request['pregunta_17']) || !isset($request['pregunta_18']) || !isset($request['pregunta_19']) || !isset($request['pregunta_20'])  || !isset($request['supervisor_03']) || !isset($request['pregunta_23']) || !isset($request['pregunta_24']) || !isset($request['pregunta_25']) || !isset($request['pregunta_26']) || !isset($request['pregunta_27']) || !isset($request['pregunta_28']) || !isset($request['pregunta_29']) || !isset($request['pregunta_30']) || !isset($request['pregunta_31']) || !isset($request['pregunta_32']) || !isset($request['pregunta_33']) || !isset($request['pregunta_34']) || !isset($request['pregunta_35']) || !isset($request['pregunta_36']) || !isset($request['pregunta_37']) || !isset($request['pregunta_38']) || !isset($request['pregunta_39']) || !isset($request['pregunta_40']) || !isset($request['pregunta_41']) || !isset($request['pregunta_42']) || !isset($request['pregunta_43']) || !isset($request['pregunta_44']) || !isset($request['pregunta_45']) || !isset($request['pregunta_46']) || !isset($request['pregunta_47']) || !isset($request['pregunta_48']) || !isset($request['pregunta_49']) || !isset($request['pregunta_50']) || !isset($request['pregunta_51']) || !isset($request['pregunta_52']) || !isset($request['pregunta_53']) || !isset($request['pregunta_54']) || !isset($request['pregunta_55']) || !isset($request['pregunta_56']) || !isset($request['pregunta_57']) || !isset($request['pregunta_58']) || !isset($request['pregunta_59']) || !isset($request['pregunta_60']) || !isset($request['pregunta_61']) || !isset($request['pregunta_62']) || !isset($request['pregunta_63']) || !isset($request['pregunta_64']) || !isset($request['pregunta_65']) || !isset($request['pregunta_66']) || !isset($request['pregunta_67']) || !isset($request['pregunta_68']) || !isset($request['pregunta_69']) || !isset($request['pregunta_70']) || !isset($request['pregunta_71']) || !isset($request['pregunta_72']) || !isset($request['pregunta_73']) || !isset($request['pregunta_74']) || !isset($request['pregunta_75']) || !isset($request['pregunta_76']) || !isset($request['pregunta_77']) || !isset($request['pregunta_78']) || !isset($request['pregunta_79']) || !isset($request['pregunta_80']) || !isset($request['pregunta_81']) || !isset($request['pregunta_82']) || !isset($request['pregunta_83']) || !isset($request['pregunta_84']) || !isset($request['pregunta_85']) || !isset($request['pregunta_86']) || !isset($request['pregunta_87']) || !isset($request['pregunta_88']) || !isset($request['pregunta_89']) || !isset($request['supervisor_04']) || !isset($request['pregunta_90']) || !isset($request['pregunta_91']) || !isset($request['pregunta_92']) || !isset($request['pregunta_93']) || !isset($request['pregunta_94']) || !isset($request['pregunta_95']) || !isset($request['pregunta_96']) || !isset($request['pregunta_97']) || !isset($request['supervisor_05']) || !isset($request['pregunta_98']) || !isset($request['pregunta_99']) || !isset($request['pregunta_100']) || !isset($request['pregunta_101']) || !isset($request['pregunta_102']) || !isset($request['pregunta_103']) || !isset($request['pregunta_104']) || !isset($request['pregunta_105']) || !isset($request['pregunta_106']) || !isset($request['pregunta_107']) || !isset($request['pregunta_108']) || !isset($request['pregunta_109']) || !isset($request['pregunta_110']) || !isset($request['expediente_01']) || !isset($request['pregunta_115']) || !isset($request['pregunta_116']) || !isset($request['pregunta_117']) || !isset($request['expediente_02']) || !isset($request['pregunta_133']) || !isset($request['pregunta_134']) || !isset($request['pregunta_135']) || !isset($request['expediente_03']) || !isset($request['pregunta_144'])  || !isset($request['pregunta_145'])  || !isset($request['pregunta_146']);
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $request = json_decode(file_get_contents("php://input"), true);

    if (validateRequest($request)) {
        returnBadRequestResponse("Missing Required fields");
    }
    $conn = createConnection();
    // echo var_dump($requestData);
    $calificacion = getGradesCedula_02($request);
    $request["calificacion"] = $calificacion;
    $sql = generateSqlFromRequest($request);
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();
}
