<?php
function returnCsvResponse($data, $file_name)
{


    // Send headers to force download of the file
    header('Content-Type: text/csv');
    header('Content-Disposition: attachment;filename="' . $file_name . '"');
    header('Cache-Control: max-age=0');

    // Open the output stream
    $output = fopen('php://output', 'w');
    if ($output === false) {
        die('Error opening the output stream');
    }

    if (!empty($data)) {
        // Write the column headers
        $headers = array_keys($data[0]);
        fputcsv($output, $headers);

        // Write each row of data
        foreach ($data as $row) {
            fputcsv($output, $row);
        }
    }

    // Close the output stream
    fclose($output);

    exit();
}
function returnJSONResponse($data)
{
    header('Content-Type: application/json');
    echo json_encode($data);
    exit();
}

function returnNotFoundResponse($message)
{
    http_response_code(404);
    echo $message;
    exit();
}
function returnBadRequestResponse($message)
{
    http_response_code(400);
    echo $message;
    exit();
}
