'use client';
import { Pregunta } from './Encuesta';

export const preguntasPorSeccion: { titulo: string; preguntas: Pregunta[]; }[] = [
    {
        titulo: 'Vigilante',
        preguntas: [
            { id: 'nombre_encuestador', texto: 'Nombre del encuestador', tipo: 'texto' },
            { id: 'pregunta_01', texto: 'Bitácoras de acceso a unidad', tipo: 'checkbox' },
            // preguntas
        ]
    },
    {
        titulo: 'RH',
        preguntas: [
            { id: 'pregunta_02', texto: 'Porcentaje del personal en turno que se encuentra en este momento en la unidad', tipo: 'texto' },
            { id: 'pregunta_03', texto: 'Porcentaje del personal del turno que se encuentra en su área de trabajo haciendo las actividades que le corresponden', tipo: 'texto' },
            { id: 'pregunta_04', texto: 'El personal porta gafete visible', tipo: 'checkboxdual' },
        ]
    },

    {
        titulo: 'Productividad',
        preguntas: [
            { id: 'pregunta_05', texto: 'Productividad de consulta reportada de los últimos 3 meses', tipo: 'texto' },
            { id: 'pregunta_06', texto: 'Electrocardiogramas realizados en los últimos 2 meses', tipo: 'texto' },
        ],
    },
    {
        titulo: 'Otras condiciones de la unidad',
        preguntas: [
            { id: 'pregunta_07', texto: 'Accesible para personas con discapacidad y adultos mayores (rampas, barandal, etc.).', tipo: 'checkboxdual' },
            { id: 'pregunta_08', texto: 'Condiciones exteriores de infraestructura', tipo: 'checkboxquint' }, //Aqui es 0-5
            { id: 'pregunta_09', texto: 'Equipos de cómputo suficientes y funcionales', tipo: 'checkbox' },
        ],
    },
    {
        titulo: 'Primer contacto con px (Agenda)',
        preguntas: [
            { id: 'supervisor_01', texto: 'Nombre de personal de supervisión de primer contacto', tipo: 'texto' },
            { id: 'pregunta_10', texto: 'Entre 3 y 6 citados por núcleo por turno', tipo: 'checkboxdual' },
            { id: 'pregunta_11', texto: 'Citas cada 30 min', tipo: 'checkboxdual' },
            { id: 'pregunta_12', texto: 'Porcentaje de citados que asistieron', tipo: 'texto' },
            { id: 'pregunta_13', texto: 'Buen registro de citados y abiertas intercalados, quienes acudieron y los que no', tipo: 'checkbox' },
            { id: 'pregunta_14', texto: 'Coinciden px en agenda (que llegaron) con hoja diaria médica', tipo: 'checkbox' },
            { id: 'pregunta_15', texto: 'Reloj checador', tipo: 'checkboxdual' },
            { id: 'pregunta_16', texto: 'Carpeta de incidencias con bitácora de campo', tipo: 'checkboxdual' },
            { id: 'pregunta_17', texto: 'Carpeta de expediente de recursos humanos', tipo: 'checkboxdual' },
        ],
    },
    {
        titulo: 'Sala de espera',
        preguntas: [
            { id: 'pregunta_18', texto: 'Con techo adecuado', tipo: 'checkboxdual' },
            { id: 'pregunta_19', texto: 'Tamaño adecuado', tipo: 'checkboxdual' },
            { id: 'pregunta_20', texto: 'Bancas en buen estado', tipo: 'checkboxdual' },
            { id: 'pregunta_21', texto: 'Cuenta con baños de pacientes H/M y discapacitados', tipo: 'checkbox' },
            { id: 'pregunta_22', texto: 'Sanitas', tipo: 'opcional' },
            { id: 'pregunta_23', texto: 'Agua', tipo: 'opcional' },
            { id: 'pregunta_24', texto: 'Jabón', tipo: 'opcional' },
            //Preguntas opcionales
        ],
    },
    {
        titulo: 'Somatometría',
        preguntas: [
            { id: 'supervisor_02', texto: 'Nombre de Enfermera de supervisión', tipo: 'texto' },
            { id: 'pregunta_25', texto: 'Báscula con estadímetro', tipo: 'checkboxdual' },
            { id: 'pregunta_26', texto: 'Báscula pesa bebé', tipo: 'checkboxdual' },
            { id: 'pregunta_27', texto: 'Pesas patrón', tipo: 'checkboxdual' },
            { id: 'pregunta_28', texto: 'Mesa de exploración pediátrica', tipo: 'checkboxdual' },
            { id: 'pregunta_29', texto: 'Hoja diaria de enfermería', tipo: 'checkbox' },
            { id: 'pregunta_30', texto: 'Termómetro', tipo: 'checkboxdual' },
            { id: 'pregunta_31', texto: 'Glucómetro', tipo: 'checkboxdual' },
            { id: 'pregunta_32', texto: 'Esfigmomanómetro', tipo: 'checkboxdual' },
            { id: 'pregunta_33', texto: 'Estetoscopio', tipo: 'checkboxdual' },
            { id: 'pregunta_34', texto: 'Oxímetro', tipo: 'checkboxdual' },
            { id: 'pregunta_35', texto: 'Tiras para glicemia', tipo: 'checkboxdual' },
            { id: 'pregunta_36', texto: 'Cinta de perímetro cefálico', tipo: 'checkboxdual' },
            { id: 'pregunta_37', texto: 'Cinta de perímetro abdominal', tipo: 'checkboxdual' },
            { id: 'pregunta_38', texto: 'Pruebas de VIH, VDRL', tipo: 'checkboxdual' },
            { id: 'pregunta_39', texto: 'Cardiocheck con tiras', tipo: 'checkboxdual' },
            { id: 'pregunta_40', texto: 'Sello de  RCV', tipo: 'checkboxdual' },
            { id: 'pregunta_41', texto: 'Prueba con tiras de HbA1C', tipo: 'checkboxdual' },
            { id: 'pregunta_42', texto: 'Bote de RPBI', tipo: 'checkboxdual' },
            { id: 'pregunta_43', texto: 'Tiras urobililabstix', tipo: 'checkboxdual' },
            { id: 'pregunta_44', texto: 'Bitácora de mantenimiento  prev de equipo', tipo: 'checkbox' },
            { id: 'pregunta_45', texto: 'Porcentaje de pacientes de somatometría que pasan a consulta', tipo: 'texto' },
            { id: 'pregunta_46', texto: 'Bitácora de calibración de básculas', tipo: 'checkbox' },
        ],
    },
    {
        titulo: 'Curaciones',
        preguntas: [
            { id: 'pregunta_47', texto: 'Instrumental estéril con fecha vigente', tipo: 'checkboxdual' },
            { id: 'pregunta_48', texto: 'Esterilizador funcional', tipo: 'checkbox' },
            { id: 'pregunta_49', texto: 'Insumos presentes y semaforizados', tipo: 'checkbox' },
            { id: 'pregunta_50', texto: 'Mesa pasteur', tipo: 'checkboxdual' },
            { id: 'pregunta_51', texto: 'Mesa mayo', tipo: 'checkboxdual' },
            { id: 'pregunta_52', texto: 'Espejos vaginales, chico, mediano y grande', tipo: 'checkbox' },
            { id: 'pregunta_53', texto: 'Espátulas', tipo: 'checkboxdual' },
            { id: 'pregunta_54', texto: 'Batas', tipo: 'checkboxdual' },
            { id: 'pregunta_55', texto: 'Formato muestra papanicolau', tipo: 'checkboxdual' },
            { id: 'pregunta_56', texto: 'Cepillo citológico', tipo: 'checkboxdual' },
            { id: 'pregunta_57', texto: 'Laminillas', tipo: 'checkboxdual' },
            { id: 'pregunta_58', texto: 'Fijador o alcohol', tipo: 'checkboxdual' },
            { id: 'pregunta_59', texto: 'Guantes chicos y medianos', tipo: 'checkbox' },
            { id: 'pregunta_60', texto: 'Lámpara de examinación', tipo: 'checkboxdual' },
            { id: 'pregunta_61', texto: 'Bitácora seg displasias', tipo: 'checkbox' },
            { id: 'pregunta_62', texto: 'Bitácora de proceso de esterilización', tipo: 'checkbox' },
            { id: 'pregunta_63', texto: 'Jarra y cuchara', tipo: 'checkboxdual' },
            { id: 'pregunta_64', texto: 'VSO', tipo: 'checkboxdual' },
            { id: 'pregunta_65', texto: 'Cinta testigo', tipo: 'checkboxdual' },
            { id: 'pregunta_66', texto: 'Frascos de antisépticos con fecha vigente', tipo: 'checkboxdual' },
        ],
    },
    {
        titulo: 'Preventiva',
        preguntas: [
            { id: 'pregunta_67', texto: 'Refrigerador 18 pies puerta acero inoxidable', tipo: 'checkboxdual' },
            { id: 'pregunta_68', texto: 'Termómetro de vástago', tipo: 'checkboxdual' },
            { id: 'pregunta_69', texto: 'Termómetro tipo pluma', tipo: 'checkboxdual' },
            { id: 'pregunta_70', texto: 'No dar citas (excepto BCG)', tipo: 'checkbox' },
            { id: 'pregunta_71', texto: 'Bitácora de calibración de termómetros', tipo: 'checkbox' },
            { id: 'pregunta_72', texto: 'Vacunas', tipo: 'checkboxquad' }, //4 rango
            { id: 'pregunta_73', texto: 'Lancetas para tamiz', tipo: 'checkboxdual' },
            { id: 'pregunta_74', texto: 'Papel filtro', tipo: 'checkboxdual' },
            { id: 'pregunta_75', texto: 'Bitácora limpieza refri', tipo: 'checkbox' },
            { id: 'pregunta_76', texto: 'Bitácora tamiz', tipo: 'checkbox' },
            { id: 'pregunta_77', texto: 'Vaso contenedor o rejilla', tipo: 'checkboxdual' },
            { id: 'pregunta_78', texto: 'Jeringas', tipo: 'checkboxdual' },
            { id: 'pregunta_79', texto: 'Torundas', tipo: 'checkboxdual' },
            { id: 'pregunta_80', texto: 'Cartillas de vacunación', tipo: 'checkboxdual' },
            { id: 'pregunta_81', texto: 'Termo de 9 litros', tipo: 'checkboxdual' },
            { id: 'pregunta_82', texto: 'Paquetes congelantes', tipo: 'checkboxdual' },
            { id: 'pregunta_83', texto: 'Botes de RPBI', tipo: 'checkboxdual' },
            { id: 'pregunta_84', texto: 'Mesa de exploración con pierneras', tipo: 'checkboxdual' },
            { id: 'pregunta_85', texto: 'Escalerilla de 2 peldaños', tipo: 'checkboxdual' },
            { id: 'pregunta_86', texto: 'Lámpara de examinación', tipo: 'checkboxdual' },
            { id: 'pregunta_87', texto: 'Batas', tipo: 'checkboxdual' },
            { id: 'pregunta_88', texto: 'Bitácora de productividad', tipo: 'checkbox' },
        ],
    },
    {
        titulo: 'Farmacia',
        preguntas: [
            { id: 'supervisor_03', texto: 'Nombre del responsable de Farmacia', tipo: 'texto' },
            { id: 'pregunta_89', texto: 'Termohigrómetro', tipo: 'checkboxdual' },
            { id: 'pregunta_90', texto: 'Medicamentos lasa y alto riesgo', tipo: 'checkbox' },
            { id: 'pregunta_91', texto: 'Semaforización y orden medicamentos y material de curación', tipo: 'checkbox' },
            { id: 'pregunta_92', texto: 'Con lector óptico', tipo: 'checkboxdual' },
            { id: 'pregunta_93', texto: 'Congruencia fisica y en sistema de 10 claves de medicamentos y 5 de material de curación', tipo: 'texto' },
            { id: 'pregunta_94', texto: 'SIAM actualizado', tipo: 'checkboxdual' },
            { id: 'pregunta_95', texto: 'Archivos simed max 3 días de retraso', tipo: 'checkboxdual' },
            { id: 'pregunta_96', texto: 'Con computadora o computadora accesible a todo médico', tipo: 'checkboxdual' },
        ],
    },
    {
        titulo: 'Consultorio',
        preguntas: [
            { id: 'supervisor_04', texto: 'Médico a evaluar', tipo: 'texto' },
            { id: 'pregunta_97', texto: 'Escritorio', tipo: 'checkboxdual' },
            { id: 'pregunta_98', texto: 'Silla secretarial', tipo: 'checkboxdual' },
            { id: 'pregunta_99', texto: 'Silla fija acojinada (2)', tipo: 'checkbox' },
            { id: 'pregunta_100', texto: 'Mesa de exploración', tipo: 'checkboxdual' },
            { id: 'pregunta_101', texto: 'Estuche de diagnóstico con pilas', tipo: 'checkbox' },
            { id: 'pregunta_102', texto: 'Estetoscopio', tipo: 'checkboxdual' },
            { id: 'pregunta_103', texto: 'Fonodetector o estetoscopio de pinard', tipo: 'checkboxdual' },
            { id: 'pregunta_104', texto: 'Martillo percutor', tipo: 'checkboxdual' },
            { id: 'pregunta_105', texto: 'Monofilamento', tipo: 'checkboxdual' },
            { id: 'pregunta_106', texto: 'Mesa mayo', tipo: 'checkboxdual' },
            { id: 'pregunta_107', texto: 'Escalerilla de 2 peldaños', tipo: 'checkboxdual' },
            { id: 'pregunta_108', texto: 'Luz y ventilacion adecuada', tipo: 'checkboxdual' },
            { id: 'pregunta_109', texto: 'Lámpara de examinación', tipo: 'checkboxdual' },
        ],
    },
    {
        titulo: 'Referencia y contrareferencia',
        preguntas: [
            { id: 'pregunta_110', texto: 'Verificar 3 expedientes clínicos que la referencia y contrareferencia se hayan realizado de manera correcta', tipo: 'checkboxquint' }, //5
        ],
    },
    {
        titulo: 'Mantenimiento',
        preguntas: [
            { id: 'supervisor_05', texto: 'Responsable de unidad', tipo: 'texto' },
            { id: 'pregunta_111', texto: 'Correcto registro de reportes en plataforma de mantenimiento', tipo: 'checkbox' },
        ],
    },
    {
        titulo: 'Calculadora de acciones preventivas',
        preguntas: [
            { id: 'pregunta_112', texto: 'Número de acciones recomendadas por la calculadora de AP ', tipo: 'texto' },
            { id: 'pregunta_113', texto: 'De las acciones recomendadas, de cuántas acciones hay evidencia de que se hayan cumplido en la periodicidad indicada ', tipo: 'texto' },
            { id: 'pregunta_114', texto: 'De las acciones recomendadas, cuántas requieren seguimiento popr resultados anormales', tipo: 'texto' },
            { id: 'pregunta_115', texto: 'A cuántas de éstas se han dado seguimiento', tipo: 'texto' },
        ],
    },
    // {
    //     titulo: 'Motivo de consulta',
    //     preguntas: [
    //         { id: 'pregunta_116', texto: 'Correcta selección de fármacos', tipo: 'texto' },
    //         { id: 'pregunta_117', texto: 'Correcta posología', tipo: 'texto' },
    //         { id: 'pregunta_118', texto: 'Correcta selección de fármacos', tipo: 'texto' },
    //         { id: 'pregunta_119', texto: 'Correcta posología', tipo: 'texto' },
    //     ],
    // },
    // {
    //     titulo: 'Motivo de consulta',
    //     preguntas: [
    //         { id: 'pregunta_116', texto: 'IRAS', tipo 'texto<'  },
    //         { id: 'pregunta_117', texto: 'IVU', tipo 'textO' },
    //         { id: 'pregunta_118', texto: 'GEPI', tipo: 'texto' },
    //         { id: 'pregunta_119', texto: 'A cuántas de éstas se han dado seguimiento', tipo: 'texto' },
    //     ],
    // },
    // {
    //     titulo: 'Motivo de consulta',
    //     preguntas: [
    //         { id: 'pregunta_120', texto: 'IRAS' },
    //         { id: 'pregunta_121', texto: 'IVU 'textO' },
    //         { id: 'pregunta_122', texto:  las acciones recomendadas, cuántas requieren seguimiento popr resultados anormales', tipo: 'texto' },
    //         { id: 'pregunta_123', texto: 'A cuántas de éstas se han dado seguimiento', tipo: 'texto' },
    //     ],
    // },
    // Secciones
];
