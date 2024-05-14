<?php
function getAnswerValue($column_name, $value, $answers)
{
    switch ($column_name) {
        case "pregunta_01":
        case "pregunta_04":
            return $value * 0.25;
        case "pregunta_02":
            if ($value > 80) {
                $value = 100;
            }
            return $value / 100;
        case "pregunta_03":
            if ($value > 80) {
                $value = 100;
            }
            $value = $value / 100;
            return $value * 3;
        case "pregunta_124":
            if ($answers["pregunta_122"] == 1 && $value == 1) {
                return 1;
            }
    }
    return null;
}
