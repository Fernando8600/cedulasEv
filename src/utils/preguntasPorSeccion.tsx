'use client';
import { Pregunta } from '../app/page';

export  const preguntasPorSeccion: { titulo: string; preguntas: Pregunta[]; }[] = [
    {
        titulo: 'RH y Productividad',
        preguntas: [
            { id: 'nombre_encuestador', texto: 'Nombre del encuestador', tipo: 'textoNombre', ponderacion: 0 },
            { id: 'pregunta_01', texto: 'Cuenta con bitácoras de acceso a unidad', tipo: 'checkbox', ponderacion: 0.5 },
            { id: 'pregunta_02', texto: 'Porcentaje del personal en turno que se encuentra en este momento en la unidad (0-100)', tipo: 'texto', ponderacion: 1 },
            { id: 'pregunta_03', texto: 'Porcentaje del personal del turno que se encuentra en su área de trabajo haciendo las actividades que le corresponden (0-100)', tipo: 'texto', ponderacion: 3 },
            { id: 'pregunta_04', texto: 'El personal porta gafete visible', tipo: 'checkbox', ponderacion: 0.5 },
            { id: 'pregunta_05', texto: 'Productividad de consulta reportada de los últimos 2 meses (0-12)', tipo: 'textoDecimal', ponderacion: 3 },
            { id: 'pregunta_06', texto: 'Reloj checador funcionando', tipo: 'checkboxdual', ponderacion: 0.5 },
            { id: 'pregunta_07', texto: 'Cuenta con carpeta de expediente de recursos humanos', tipo: 'checkboxdual', ponderacion: 0.5 },
            { id: 'pregunta_08', texto: 'Electrocardiogramas realizados en bitácora en los últimos 2 meses (0-25)', tipo: 'texto', ponderacion: 1 },
        ],
    },
    {
        titulo: 'Mantenimiento y otras condiciones de la unidad',
        preguntas: [
            { id: 'supervisor_01', texto: 'Nombre de responsable de unidad', tipo: 'textoNombre', ponderacion: 0 },
            { id: 'pregunta_09', texto: 'Accesible para personas con discapacidad y adultos mayores (rampas, barandal, etc.).', tipo: 'checkboxdual', ponderacion: 1 },
            { id: 'pregunta_10', texto: 'Condiciones exteriores de infraestructura', tipo: 'checkboxquint', ponderacion: 2 }, //Aqui es 0-5
            { id: 'pregunta_11', texto: 'Correcto registro de reportes en plataforma de mantenimiento', tipo: 'checkbox', ponderacion: 7 },
            { id: 'pregunta_12', texto: 'Equipos de cómputo suficientes y funcionales', tipo: 'checkbox', ponderacion: 2 },
        ],
    },
    {
        titulo: 'Primer contacto con px (Agenda)',
        preguntas: [
            { id: 'supervisor_02', texto: 'Nombre de personal haciendo la función de recepción de pacientes', tipo: 'textoNombre', ponderacion: 0 },
            { id: 'pregunta_13', texto: 'Entre 3 y 6 citados por núcleo por turno', tipo: 'checkboxdual', ponderacion: 1 },
            { id: 'pregunta_14', texto: 'Citas cada 30 min', tipo: 'checkboxdual', ponderacion: 1 },
            { id: 'pregunta_15', texto: 'Buen registro de citados y abiertas intercalados, quienes acudieron y los que no', tipo: 'checkbox', ponderacion: 1 },
            { id: 'pregunta_16', texto: 'Coinciden px en agenda (que llegaron) con hoja diaria médica', tipo: 'checkboxAgenda', ponderacion: 1 },
        ],
    },
    {
        titulo: 'Sala de espera',
        preguntas: [
            { id: 'pregunta_17', texto: 'Con techo adecuado y tamaño adecuado', tipo: 'checkboxdual', ponderacion: 0.7 },
            { id: 'pregunta_18', texto: 'Bancas en buen estado', tipo: 'checkboxdual', ponderacion: 0.5 },
            { id: 'pregunta_19', texto: 'Los pacientes la utilizan', tipo: 'checkboxdual', ponderacion: 0.6 },
            { id: 'pregunta_20', texto: 'Cuenta con baños abiertos para pacientes H/M', tipo: 'checkbox', ponderacion: 0.4 },
            { id: 'pregunta_21', texto: 'Sanitas y jabón', tipo: 'opcional', ponderacion: 0.8 },
            { id: 'pregunta_22', texto: 'Agua', tipo: 'opcional', ponderacion: 1 },
            //Preguntas opcionales
        ],
    },
    {
        titulo: 'Somatometría',
        preguntas: [
            { id: 'supervisor_03', texto: 'Nombre de Enfermera de supervisión', tipo: 'textoNombre', ponderacion: 0 },
            { id: 'pregunta_23', texto: 'Báscula con estadímetro funcional', tipo: 'checkboxdual', ponderacion: 0.5 },
            { id: 'pregunta_24', texto: 'Báscula pesa bebé funcional', tipo: 'checkboxdual', ponderacion: 0.5 },
            { id: 'pregunta_25', texto: 'Pesas patrón', tipo: 'checkboxdual', ponderacion: 0.2 },
            { id: 'pregunta_26', texto: 'Correcto llenado de hoja diaria de enfermería', tipo: 'checkbox', ponderacion: 0.6 },
            { id: 'pregunta_27', texto: 'Termómetro funcional', tipo: 'checkboxdual', ponderacion: 0.4 },
            { id: 'pregunta_28', texto: 'Glucómetro funcional', tipo: 'checkboxdual', ponderacion: 1 },
            { id: 'pregunta_29', texto: 'Esfigmomanómetro funcional', tipo: 'checkboxdual', ponderacion: 0.5 },
            { id: 'pregunta_30', texto: 'Estetoscopio funcional', tipo: 'checkboxdual', ponderacion: 0.4 },
            { id: 'pregunta_31', texto: 'Oxímetro funcional', tipo: 'checkboxdual', ponderacion: 0.4 },
            { id: 'pregunta_32', texto: 'Tiras para glicemia', tipo: 'checkboxdual', ponderacion: 1 },
            { id: 'pregunta_33', texto: 'Cinta de perímetro cefálico', tipo: 'checkboxdual', ponderacion: 0.4 },
            { id: 'pregunta_34', texto: 'Cinta de perímetro abdominal', tipo: 'checkboxdual', ponderacion: 0.3 },
            { id: 'pregunta_35', texto: 'Pruebas de VIH, VDRL funcionales', tipo: 'checkboxdual', ponderacion: 0.3 },
            { id: 'pregunta_36', texto: 'Cardiocheck con tiras funcional', tipo: 'checkboxdual', ponderacion: 1 },
            { id: 'pregunta_37', texto: 'Cuenta con y utiliza sello de  RCV', tipo: 'checkboxdual', ponderacion: 0.2 },
            { id: 'pregunta_38', texto: 'Prueba con tiras de HbA1C', tipo: 'checkboxdual', ponderacion: 1 },
            { id: 'pregunta_39', texto: 'Bote de RPBI', tipo: 'checkboxdual', ponderacion: 0.4 },
            { id: 'pregunta_40', texto: 'Tiras urobililabstix', tipo: 'checkboxdual', ponderacion: 0.3 },
            { id: 'pregunta_41', texto: 'Bitácora de mantenimiento  preventivo de equipo', tipo: 'checkbox', ponderacion: 0.1 },
            { id: 'pregunta_42', texto: 'Bitácora de calibración de básculas', tipo: 'checkbox', ponderacion: 0.5 },
        ],
    },
    {
        titulo: 'Curaciones ',
        preguntas: [
            { id: 'pregunta_43', texto: 'Instrumental estéril con fecha vigente', tipo: 'checkboxdual', ponderacion: 0.3 },
            { id: 'pregunta_44', texto: 'Esterilizador funcional', tipo: 'checkbox', ponderacion: 0.5 },
            { id: 'pregunta_45', texto: 'Insumos en vitrina presentes y semaforizados', tipo: 'checkbox', ponderacion: 0.3 },
            { id: 'pregunta_46', texto: 'Mesa pasteur', tipo: 'checkboxdual', ponderacion: 0.2 },
            { id: 'pregunta_47', texto: 'Mesa mayo', tipo: 'checkboxdual', ponderacion: 0.2 },
            { id: 'pregunta_48', texto: 'Espejos vaginales, chico, mediano y grande', tipo: 'checkbox', ponderacion: 1 },
            { id: 'pregunta_49', texto: 'Espátulas', tipo: 'checkboxdual', ponderacion: 0.4 },
            { id: 'pregunta_50', texto: 'Batas', tipo: 'checkboxdual', ponderacion: 0.3 },
            { id: 'pregunta_51', texto: 'Formato muestra papanicolau', tipo: 'checkboxdual', ponderacion: 0.4 },
            { id: 'pregunta_52', texto: 'Cepillo citológico', tipo: 'checkboxdual', ponderacion: 0.4 },
            { id: 'pregunta_53', texto: 'Laminillas', tipo: 'checkboxdual', ponderacion: 0.3 },
            { id: 'pregunta_54', texto: 'Fijador o alcohol', tipo: 'checkboxdual', ponderacion: 0.2 },
            { id: 'pregunta_55', texto: 'Guantes chicos y medianos', tipo: 'checkbox', ponderacion: 0.4 },
            { id: 'pregunta_56', texto: 'Lámpara de examinación funcional', tipo: 'checkboxdual', ponderacion: 0.5 },
            { id: 'pregunta_57', texto: 'Bitácora seguimiento displasias', tipo: 'checkbox', ponderacion: 0.5 },
            { id: 'pregunta_58', texto: 'Bitácora de proceso de esterilización', tipo: 'checkbox', ponderacion: 0.1 },
            { id: 'pregunta_59', texto: 'Mesa de exploración con pierneras', tipo: 'checkbox', ponderacion: 0.5 },
            { id: 'pregunta_60', texto: 'VSO, Jarra y cuchara', tipo: 'checkboxdual', ponderacion: 0.2 },
            { id: 'pregunta_61', texto: 'Cinta testigo', tipo: 'checkboxdual', ponderacion: 0.2 },
            { id: 'pregunta_62', texto: 'Frascos de antisépticos con fecha vigente', tipo: 'checkboxdual', ponderacion: 0.1 },
        ],
    },
    {
        titulo: 'Preventiva',
        preguntas: [
            { id: 'pregunta_63', texto: 'Refrigerador 18 pies puerta acero inoxidable', tipo: 'checkboxdual', ponderacion: 0.7 },
            { id: 'pregunta_64', texto: 'Termómetro de vástago', tipo: 'checkboxdual', ponderacion: 0.1 },
            { id: 'pregunta_65', texto: 'Termómetro tipo pluma', tipo: 'checkboxdual', ponderacion: 0.2 },
            { id: 'pregunta_66', texto: 'No dar citas (excepto BCG)', tipo: 'checkboxBCG', ponderacion: 0.7 },
            { id: 'pregunta_67', texto: 'Bitácora de calibración de termómetros', tipo: 'checkbox', ponderacion: 0.1 },
            { id: 'pregunta_68', texto: 'Existencia de esquema básico (Vacunas)', tipo: 'checkboxquad', ponderacion: 1 }, //4 rango
            { id: 'pregunta_69', texto: 'Lancetas para tamiz', tipo: 'checkboxdual', ponderacion: 0.2 },
            { id: 'pregunta_70', texto: 'Papel filtro', tipo: 'checkboxdual', ponderacion: 0.2 },
            { id: 'pregunta_71', texto: 'Bitácora limpieza de refrigerador', tipo: 'checkbox', ponderacion: 0.1 },
            { id: 'pregunta_72', texto: 'Bitácora tamiz', tipo: 'checkbox', ponderacion: 0.1 },
            { id: 'pregunta_73', texto: 'Vaso contenedor o rejilla', tipo: 'checkboxdual', ponderacion: 0.1 },
            { id: 'pregunta_74', texto: 'Jeringas', tipo: 'checkboxdual', ponderacion: 0.1 },
            { id: 'pregunta_75', texto: 'Torundas', tipo: 'checkboxdual', ponderacion: 0.2 },
            { id: 'pregunta_76', texto: 'Cartillas de vacunación', tipo: 'checkboxdual', ponderacion: 0.7 },
            { id: 'pregunta_77', texto: 'Termo de 9 litros', tipo: 'checkboxdual', ponderacion: 0.1 },
            { id: 'pregunta_78', texto: 'Paquetes congelantes', tipo: 'checkboxdual', ponderacion: 0.1 },
            { id: 'pregunta_79', texto: 'Botes de RPBI', tipo: 'checkboxdual', ponderacion: 0.3 },
            { id: 'pregunta_80', texto: 'Bitácora de temperatura refrigerador', tipo: 'checkbox', ponderacion: 0.5 },
            { id: 'pregunta_81', texto: 'Bitácora de productividad', tipo: 'checkbox', ponderacion: 0.5 },
        ],
    },
    {
        titulo: 'Farmacia',
        preguntas: [
            { id: 'supervisor_04', texto: 'Nombre del responsable de Farmacia', tipo: 'textoNombre', ponderacion: 0 },
            { id: 'pregunta_82', texto: 'Termohigrómetro', tipo: 'checkboxdual', ponderacion: 0.1 },
            { id: 'pregunta_83', texto: 'Medicamentos lasa y alto riesgo correctamente clasificados', tipo: 'checkbox', ponderacion: 0.4 },
            { id: 'pregunta_84', texto: 'Semaforización y orden medicamentos y material de curación', tipo: 'checkbox', ponderacion: 2 },
            { id: 'pregunta_85', texto: 'Con lector óptico accesible a todo médico', tipo: 'checkboxdual', ponderacion: 1 },
            { id: 'pregunta_86', texto: 'Congruencia fisica y en sistema de 10 claves de medicamentos y 5 de material de curación (0-15, 1 punto por clave)', tipo: 'texto', ponderacion: 6 },
            { id: 'pregunta_87', texto: 'SIAM actualizado', tipo: 'checkboxdual', ponderacion: 1 },
            { id: 'pregunta_88', texto: 'Archivos simed enviados (máximo 3 días de retraso)', tipo: 'checkboxdual', ponderacion: 1.5 },
            { id: 'pregunta_89', texto: 'Con computadora o computadora accesible a todo médico', tipo: 'checkboxdual', ponderacion: 1 },
        ],
    },
    {
        titulo: 'Consultorio',
        preguntas: [
            { id: 'supervisor_05', texto: 'Médico a evaluar', tipo: 'textoNombre', ponderacion: 0 },
            { id: 'pregunta_90', texto: 'Escritorio', tipo: 'checkboxdual', ponderacion: 0.2 },
            { id: 'pregunta_91', texto: 'Silla fija acojinada (2)', tipo: 'checkbox', ponderacion: 0.5 },
            { id: 'pregunta_92', texto: 'Mesa de exploración', tipo: 'checkboxdual', ponderacion: 0.6 },
            { id: 'pregunta_93', texto: 'Estuche de diagnóstico con pilas', tipo: 'checkbox', ponderacion: 0.6 },
            { id: 'pregunta_94', texto: 'Estetoscopio', tipo: 'checkboxdual', ponderacion: 0.5 },
            { id: 'pregunta_95', texto: 'Fonodetector o estetoscopio de pinard', tipo: 'checkboxdual', ponderacion: 0.5 },
            { id: 'pregunta_96', texto: 'Martillo percutor', tipo: 'checkboxdual', ponderacion: 0.1 },
            { id: 'pregunta_97', texto: 'Monofilamento', tipo: 'checkboxdual', ponderacion: 0.1 },
            { id: 'pregunta_98', texto: 'Mesa mayo', tipo: 'checkboxdual', ponderacion: 0.1 },
            { id: 'pregunta_99', texto: 'Escalerilla de 2 peldaños', tipo: 'checkboxdual', ponderacion: 0.2 },
            { id: 'pregunta_100', texto: 'Luz y ventilacion adecuada', tipo: 'checkboxdual', ponderacion: 0.3 },
            { id: 'pregunta_101', texto: 'Lámpara de examinación', tipo: 'checkboxdual', ponderacion: 0.3 },
        ],
    },
    {
        titulo: 'Referencia y contrareferencia',
        preguntas: [
            { id: 'pregunta_102', texto: 'Verificar 3 expedientes clínicos que la referencia y contrareferencia se hayan realizado de manera correcta', tipo: 'checkboxquint', ponderacion: 1 }, //5
        ],
    },
    {
        titulo: 'Calculadora de acciones preventivas - Expediente 1', // realizar 2 .
        preguntas: [
            { id: 'pregunta_103', texto: 'Número de acciones recomendadas por la calculadora de Acciones Preventivas ', tipo: 'texto', ponderacion: 0 },
            { id: 'pregunta_104', texto: 'De cuántas de las acciones recomendadas hay evidencia de que se hayan cumplido en la periodicidad indicada ', tipo: 'texto', ponderacion: 4.5 },
            { id: 'pregunta_105', texto: 'De las acciones recomendadas, cuántas requieren seguimiento por resultados anormales', tipo: 'texto', ponderacion: 0 },
            { id: 'pregunta_106', texto: 'A cuántas de éstas se le ha dado seguimiento', tipo: 'texto', ponderacion: 2.5 },
        ],
    },
    {
        titulo: 'Calculadora de acciones preventivas - Expediente 2', // realizar 2 veces
        preguntas: [
            { id: 'pregunta_107', texto: 'Número de acciones recomendadas por la calculadora de Acciones Preventivas ', tipo: 'texto', ponderacion: 0 },
            { id: 'pregunta_108', texto: 'De cuántas de las acciones recomendadas hay evidencia de que se hayan cumplido en la periodicidad indicada ', tipo: 'texto', ponderacion: 4.5 },
            { id: 'pregunta_109', texto: 'De las acciones recomendadas, cuántas requieren seguimiento por resultados anormales', tipo: 'texto', ponderacion: 0 },
            { id: 'pregunta_110', texto: 'A cuántas de éstas se le ha dado seguimiento', tipo: 'texto', ponderacion: 2.5 },
        ],
    },
    {
        titulo: 'Motivo de consulta',
        preguntas: [
            { id: 'expediente_01', texto: 'Expediente 1 - Seleccione una opción', tipo: 'selec', ponderacion: 0 },
            { id: 'pregunta_111', texto: 'De acuerdo al algoritmo de manejo de paciente diabetico califique el manejo que se le ha dado a este paciente (0-10)', tipo: 'exp1dTxtNum', ponderacion: 2 },
            { id: 'pregunta_112', texto: 'Correcta selección de fármacos', tipo: 'exp1d', ponderacion: 1.5 },
            { id: 'pregunta_113', texto: 'De acuerdo al algoritmo de manejo de paciente hipertenso califique el manejo que se le ha dado a este paciente (0-10)', tipo: 'exp1hTxtNum', ponderacion: 2 },
            { id: 'pregunta_114', texto: 'Correcta selección de fármacos', tipo: 'exp1h', ponderacion: 1.5 },
            { id: 'pregunta_115', texto: 'Congruencia de Cuadro Clínico - Diagnostico - Tratamiento', tipo: 'checkboxdual', ponderacion: 1 },
            { id: 'pregunta_116', texto: 'Nombre completo y fecha de nacimiento en todos los formatos solicitados', tipo: 'checkboxdual', ponderacion: 0.3 },
            { id: 'pregunta_117', texto: 'Cuenta con riesgo de caídas', tipo: 'checkboxdual', ponderacion: 0.2 },
            //IRAS
            { id: 'expediente_02', texto: 'Expediente 2 - Seleccione una opción', tipo: 'selec2', ponderacion: 0 },
            { id: 'pregunta_118', texto: '¿Se recetó antibiótico?', tipo: 'exp2Ir', ponderacion: 0 },
            { id: 'pregunta_119', texto: '¿El cuadro clínico justifica la respuesta de la pregunta anterior?', tipo: 'exp2Ir', ponderacion: 1.5 },
            { id: 'pregunta_120', texto: 'El antibiótico fue adecuado para el padecimiento', tipo: 'opcional2', ponderacion: 1 },
            { id: 'pregunta_121', texto: 'De acuerdo al manejo seleccionado ¿el esquema y posología es el adecuado?', tipo: 'exp2IrTr', ponderacion: 1 },
            //IVU
            { id: 'pregunta_122', texto: 'La paciente presenta: ', tipo: 'checkboxdualIVU', ponderacion: 0 },
            { id: 'pregunta_123', texto: 'Correcto interrogatorio y estado de diagnóstico', tipo: 'exp2Iv', ponderacion: 0.5 },
            { id: 'pregunta_124', texto: '¿Se recetó antibiótico?', tipo: 'exp2IvEsp', ponderacion: 0.5 },
            { id: 'pregunta_125', texto: '¿El cuadro clínico justifica la respuesta de la pregunta anterior?', tipo: 'exp2Iv', ponderacion: 1 },
            { id: 'pregunta_126', texto: 'El antibiótico seleccionado fue adecuado para el padecimiento', tipo: 'opcional3', ponderacion: 1 },
            { id: 'pregunta_127', texto: 'De acuerdo al manejo seleccionado ¿el esquema y posología es el adecuado?', tipo: 'exp2IvTr', ponderacion: 0.5 },
            //GEPI
            { id: 'pregunta_128', texto: 'El paciente presenta uno o más de los siguientes síntomas: Fiebre/ Diarrea intensa/ Sangre o moco en heces ', tipo: 'exp2Ge', ponderacion: 0 },
            { id: 'pregunta_129', texto: 'Se recetó antibiótico', tipo: 'exp2Ge', ponderacion: 1 },
            { id: 'pregunta_130', texto: 'Se recetó Ciprofloxacino o Azitromicina o Metronidazol o Albendazol ', tipo: 'opcional4', ponderacion: 1.5 },
            { id: 'pregunta_131', texto: 'De acuerdo al manejo seleccionado ¿el esquema y posología es el adecuado?', tipo: 'opcional4Tr', ponderacion: 0.5 },
            { id: 'pregunta_132', texto: 'Hay evidencia de esquema de Hidratacion', tipo: 'exp2Ge', ponderacion: 0.5 },
            { id: 'pregunta_133', texto: 'Congruencia de Cuadro Clínico - Diagnostico - Tratamiento', tipo: 'checkboxdualW', ponderacion: 1 },
            { id: 'pregunta_134', texto: 'Nombre completo y fecha de nacimiento en todos los formatos solicitados', tipo: 'checkboxdualW', ponderacion: 0.3 },
            { id: 'pregunta_135', texto: 'Cuenta con riesgo de caídas', tipo: 'checkboxdualW', ponderacion: 0.2 },
            // EXP 3 Niño sano
            { id: 'expediente_03', texto: 'Expediente 3 - Seleccione una opción', tipo: 'selec3', ponderacion: 0 },
            { id: 'pregunta_136', texto: 'Se evaluó el Desarrollo neurológico (hitos del desarrollo)', tipo: 'exp3N', ponderacion: 1 },
            { id: 'pregunta_137', texto: 'Se realizó Peso/talla', tipo: 'exp3N', ponderacion: 1 },//texto
            { id: 'pregunta_138', texto: 'Se realizó Peso/edad', tipo: 'exp3N', ponderacion: 0.5 },
            { id: 'pregunta_139', texto: 'Se realizó Talla/edad', tipo: 'exp3N', ponderacion: 1 },
            //Embarazo
            { id: 'pregunta_140', texto: 'Hay evidencia de que Se entregaron suplementos FE y acido fólico', tipo: 'exp3Em', ponderacion: 1 },
            { id: 'pregunta_141', texto: 'Se registró la frecuencia cardiaca fetal ', tipo: 'exp3Em', ponderacion: 1.5 },
            { id: 'pregunta_142', texto: '¿Es embarazada de alto riesgo o semana 36 o más?', tipo: 'exp3Em', ponderacion: 0 }, //si, aparece la siguiente:
            { id: 'pregunta_143', texto: 'Cuenta con referencia por ser embarazada de alto riesgo o en semana de gestacion 36', tipo: 'exp3EmEsp', ponderacion: 1 },

            { id: 'pregunta_144', texto: 'Congruencia de Cuadro Clínico Diagnostico Tratamiento', tipo: 'checkboxdual', ponderacion: 1 },
            { id: 'pregunta_145', texto: 'Nombre completo y fecha de nacimiento en todos los formatos solicitados', tipo: 'checkboxdual', ponderacion: 0.3 },
            { id: 'pregunta_146', texto: 'Cuenta con riesgo de caídas', tipo: 'checkboxdual', ponderacion: 0.2 },
        ],
    },
    //Secciones
];
