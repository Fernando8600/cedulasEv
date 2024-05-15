<?php
function getAnswerValue($column_name, $value, $answers)
{
    switch ($column_name) {
        case "pregunta_01":
        case "pregunta_42":
        case "pregunta_44":
        case "pregunta_57":
        case "pregunta_59":
        case "pregunta_80":
        case "pregunta_81":
        case "pregunta_91":
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
        case "pregunta_04":
        case "pregunta_06":
        case "pregunta_07":
        case "pregunta_10":
        case "pregunta_15":
        case "pregunta_16":
        case "pregunta_18":
        case "pregunta_23":
        case "pregunta_24":
        case "pregunta_29":
        case "pregunta_48":
        case "pregunta_56":
        case "pregunta_94":
        case "pregunta_95":
        case "pregunta_123":
        case "pregunta_124":
        case "pregunta_127":
            return $value * 0.5;
        case "pregunta_05":
            if ($value <= 12) {

                $value = $value / 12;
            }
            return $value * 3;
        case "pregunta_08":
            if ($value >= 3) {
                $value = 3;
            }
            $value = $value / 3;
            return $value;
        case "pregunta_09":
        case "pregunta_13":
        case "pregunta_12":
        case "pregunta_14":
        case "pregunta_22":
        case "pregunta_28":
        case "pregunta_32":
        case "pregunta_36":
        case "pregunta_38":
        case "pregunta_84":
        case "pregunta_85":
        case "pregunta_87":
        case "pregunta_89":
        case "pregunta_115":
        case "pregunta_120":
        case "pregunta_121":
        case "pregunta_125":
        case "pregunta_126":
        case "pregunta_133":
        case "pregunta_144":
            return $value;
        case "pregunta_11":
            return $value * 3.5;
        case "pregunta_17":
        case "pregunta_63":
        case "pregunta_76":
            return $value * 0.7;
        case "pregunta_19":
        case "pregunta_92":
            return $value * 0.6;
        case "pregunta_20":
        case "pregunta_25":
        case "pregunta_37":
        case "pregunta_46":
        case "pregunta_47":
        case "pregunta_54":
        case "pregunta_55":
        case "pregunta_60":
        case "pregunta_61":
        case "pregunta_65":
        case "pregunta_69":
        case "pregunta_70":
        case "pregunta_75":
        case "pregunta_83":
        case "pregunta_90":
        case "pregunta_99":
        case "pregunta_117":
        case "pregunta_146":
            return $value * 0.2;
        case "pregunta_21":
            return $value * 0.8;
        case "pregunta_26":
        case "pregunta_34":
        case "pregunta_35":
        case "pregunta_40":
        case "pregunta_43":
        case "pregunta_50":
        case "pregunta_53":
        case "pregunta_79":
        case "pregunta_93":
        case "pregunta_100":
        case "pregunta_101":
        case "pregunta_116":
        case "pregunta_145":
            return $value * 0.3;
        case "pregunta_27":
        case "pregunta_30":
        case "pregunta_31":
        case "pregunta_33":
        case "pregunta_39":
        case "pregunta_49":
        case "pregunta_51":
        case "pregunta_52":
            return $value * 0.4;
        case "pregunta_41":
        case "pregunta_58":
        case "pregunta_67":
        case "pregunta_71":
        case "pregunta_72":
            return $value * 0.05;
        case "pregunta_45":
            return $value * 0.15;
        case "pregunta_62":
        case "pregunta_64":
        case "pregunta_73":
        case "pregunta_74":
        case "pregunta_77":
        case "pregunta_78":
        case "pregunta_82":
        case "pregunta_96":
        case "pregunta_97":
        case "pregunta_98":
            return $value * 0.1;
        case "pregunta_66":
            return $value * 0.35;
        case "pregunta_68":
            if ($answers["pregunta_68"] == 3) {
                return 1;
            } else {
                return $value * 0.33;
            }
        case "pregunta_86":
            if ($answers["pregunta_86"] <= 15) {
                return $value / 2.5;
            }
        case "pregunta_88":
        case "pregunta_112":
        case "pregunta_114":
        case "pregunta_119":
            return $value * 1.5;
        case "pregunta_102":
            return $value / 4;
        case "pregunta_104":
            return ($value / $answers["pregunta_103"]) * 4.5; //4.5
        case "pregunta_106":
            return ($value / $answers["pregunta_105"]) * 2.5; //4.5
        case "pregunta_108":
            return ($value / $answers["pregunta_107"]) * 4.5; //4.5
        case "pregunta_110":
            return ($value / $answers["pregunta_109"]) * 2.5; //4.5        
        case "pregunta_111":
        case "pregunta_113":
            return $value * 2;

        case "pregunta_124":
            if (($answers["pregunta_122"] == 1 && $value == 1) || ($answers["pregunta_122"] == 0 && $value == 0)) {
                return 0.5;
            }
    }
    return null;
}

// Logica para exentar y ponderacion de 3 
// if ($value > 80) {
//     $value = 100;
// }
// $value = $value / 100;
// return $value * 3;
