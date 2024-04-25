'use client';
import React, { useState } from 'react';
import RootLayout from '../app/RootLayout';
import dynamic from "next/dynamic";
import Checkboxes from '@/components/Checkboxes2';
import RadioInput from '@/components/RadioInput';

interface Pregunta {
  id: string;
  texto: string;
  tipo: string; // Ejemplo: "texto", "checkbox", etc.
}

interface Respuestas {
  [key: string]: string | boolean | number;
}

const preguntasPorSeccion: { titulo: string; preguntas: Pregunta[] }[] = [
  {
    titulo: 'Vigilante',
    preguntas: [
      { id: 'nombre_encuestador', texto: 'Nombre del encuestador', tipo: 'texto' },
      { id: 'pregunta01', texto: 'Bitácoras de acceso a unidad', tipo: 'checkbox' },
      // preguntas
    ]
  },
  {
    titulo: 'RH',
    preguntas: [
      { id: 'pregunta02', texto: 'Porcentaje del personal en turno que se encuentra en este momento en la unidad', tipo: 'texto' },
      { id: 'pregunta03', texto: 'Porcentaje del personal del turno que se encuentra en su área de trabajo haciendo las actividades que le corresponden', tipo: 'texto' },
      { id: 'pregunta04', texto: 'El personal porta gafete visible', tipo: 'checkboxdual' },

    ]
  },

  {
    titulo: 'Productividad',
    preguntas: [
      { id: 'pregunta05', texto: 'Productividad de consulta reportada de los últimos 3 meses', tipo: 'texto' },
      { id: 'pregunta06', texto: 'Electrocardiogramas realizados en los últimos 2 meses', tipo: 'texto' },

    ],
  },
  {
    titulo: 'Otras condiciones de la unidad',
    preguntas: [
      { id: 'pregunta07', texto: 'Accesible para personas con discapacidad y adultos mayores (rampas, barandal, etc.).', tipo: 'checkboxdual' },
      { id: 'pregunta08', texto: 'Condiciones exteriores de infraestructura', tipo: 'checkbox' },//Aqui es 0-5
      { id: 'pregunta09', texto: 'Equipos de cómputo suficientes y funcionales', tipo: 'checkbox' },

    ],
  },
  {
    titulo: 'Primer contacto con px (Agenda)',
    preguntas: [
      { id: 'supervisor_01', texto: 'Nombre de personal de supervisión de primer contacto', tipo: 'texto' },
      { id: 'pregunta10', texto: 'Entre 3 y 6 citados por núcleo por turno', tipo: 'checkboxdual' },
      { id: 'pregunta11', texto: 'Citas cada 30 min', tipo: 'checkboxdual' },
      { id: 'pregunta12', texto: 'Porcentaje de citados que asistieron', tipo: 'texto' },
      { id: 'pregunta13', texto: 'Buen registro de citados y abiertas intercalados, quienes acudieron y los que no', tipo: 'checkbox' },
      { id: 'pregunta14', texto: 'Coinciden px en agenda (que llegaron) con hoja diaria médica', tipo: 'checkbox' },
      { id: 'pregunta15', texto: 'Reloj checador', tipo: 'checkboxdual' },
      { id: 'pregunta16', texto: 'Carpeta de incidencias con bitácora de campo', tipo: 'checkboxdual' },
      { id: 'pregunta17', texto: 'Carpeta de expediente de recursos humanos', tipo: 'checkboxdual' },

    ],
  },
  {
    titulo: 'Sala de espera',
    preguntas: [
      { id: 'pregunta18', texto: 'Con techo adecuado', tipo: 'checkboxdual' },
      { id: 'pregunta19', texto: 'Tamaño adecuado', tipo: 'checkboxdual' },
      { id: 'pregunta20', texto: 'Bancas en buen estado', tipo: 'checkboxdual' },
      { id: 'pregunta21', texto: 'Cuenta con baños de pacientes H/M y discapacitados', tipo: 'checkbox' },
      //Preguntas opcionales

    ],
  },
  {
    titulo: 'Somatometría',
    preguntas: [
      { id: 'supervisor_02', texto: 'Nombre de Enfermera de supervisión', tipo: 'texto' },
      { id: 'pregunta25', texto: 'Báscula con estadímetro', tipo: 'checkboxdual' },
      { id: 'pregunta26', texto: 'Báscula pesa bebé', tipo: 'checkboxdual' },
      { id: 'pregunta27', texto: 'Pesas patrón', tipo: 'checkboxdual' },
      { id: 'pregunta28', texto: 'Mesa de exploración pediátrica', tipo: 'checkboxdual' },
      { id: 'pregunta29', texto: 'Hoja diaria de enfermería', tipo: 'checkbox' },
      { id: 'pregunta30', texto: 'Termómetro', tipo: 'checkboxdual' },
      { id: 'pregunta31', texto: 'Glucómetro', tipo: 'checkboxdual' },
      { id: 'pregunta32', texto: 'Esfigmomanómetro', tipo: 'checkboxdual' },
      { id: 'pregunta33', texto: 'Estetoscopio', tipo: 'checkboxdual' },
      { id: 'pregunta34', texto: 'Oxímetro', tipo: 'checkboxdual' },
      { id: 'pregunta35', texto: 'Tiras para glicemia', tipo: 'checkboxdual' },
      { id: 'pregunta36', texto: 'Cinta de perímetro cefálico', tipo: 'checkboxdual' },
      { id: 'pregunta37', texto: 'Cinta de perímetro abdominal', tipo: 'checkboxdual' },
      { id: 'pregunta38', texto: 'Pruebas de VIH, VDRL', tipo: 'checkboxdual' },
      { id: 'pregunta39', texto: 'Cardiocheck con tiras', tipo: 'checkboxdual' },
      { id: 'pregunta40', texto: 'Sello de  RCV', tipo: 'checkboxdual' },
      { id: 'pregunta41', texto: 'Prueba con tiras de HbA1C', tipo: 'checkboxdual' },
      { id: 'pregunta42', texto: 'Bote de RPBI', tipo: 'checkboxdual' },
      { id: 'pregunta43', texto: 'Tiras urobililabstix', tipo: 'checkboxdual' },
      { id: 'pregunta44', texto: 'Bitácora de mantenimiento  prev de equipo', tipo: 'checkbox' },
      { id: 'pregunta45', texto: 'Porcentaje de pacientes de somatometría que pasan a consulta', tipo: 'texto' },
      { id: 'pregunta46', texto: 'Bitácora de calibración de básculas', tipo: 'checkbox' },


    ],
  },
  {
    titulo: 'Curaciones',
    preguntas: [
      { id: 'pregunta47', texto: 'Instrumental estéril con fecha vigente', tipo: 'checkboxdual' },
      { id: 'pregunta48', texto: 'Esterilizador funcional', tipo: 'checkbox' },
      { id: 'pregunta49', texto: 'Insumos presentes y semaforizados', tipo: 'checkbox' },
      { id: 'pregunta50', texto: 'Mesa pasteur', tipo: 'checkboxdual' },
      { id: 'pregunta51', texto: 'Mesa mayo', tipo: 'checkboxdual' },
      { id: 'pregunta52', texto: 'Espejos vaginales, chico, mediano y grande', tipo: 'checkbox' },
      { id: 'pregunta53', texto: 'Espátulas', tipo: 'checkboxdual' },
      { id: 'pregunta54', texto: 'Batas', tipo: 'checkboxdual' },
      { id: 'pregunta55', texto: 'Formato muestra papanicolau', tipo: 'checkboxdual' },
      { id: 'pregunta56', texto: 'Cepillo citológico', tipo: 'checkboxdual' },
      { id: 'pregunta57', texto: 'Laminillas', tipo: 'checkboxdual' },
      { id: 'pregunta58', texto: 'Fijador o alcohol', tipo: 'checkboxdual' },
      { id: 'pregunta59', texto: 'Guantes chicos y medianos', tipo: 'checkbox' },
      { id: 'pregunta60', texto: 'Lámpara de examinación', tipo: 'checkboxdual' },
      { id: 'pregunta61', texto: 'Bitácora seg displasias', tipo: 'checkbox' },
      { id: 'pregunta62', texto: 'Bitácora de proceso de esterilización', tipo: 'checkbox' },
      { id: 'pregunta63', texto: 'Jarra y cuchara', tipo: 'checkboxdual' },
      { id: 'pregunta64', texto: 'VSO', tipo: 'checkboxdual' },
      { id: 'pregunta65', texto: 'Cinta testigo', tipo: 'checkboxdual' },
      { id: 'pregunta66', texto: 'Frascos de antisépticos con fecha vigente', tipo: 'checkboxdual' },


    ],
  },
  {
    titulo: 'Preventiva',
    preguntas: [
      { id: 'pregunta67', texto: 'Refrigerador 18 pies puerta acero inoxidable', tipo: 'checkboxdual' },
      { id: 'pregunta68', texto: 'Termómetro de vástago', tipo: 'checkboxdual' },
      { id: 'pregunta69', texto: 'Termómetro tipo pluma', tipo: 'checkboxdual' },
      { id: 'pregunta70', texto: 'No dar citas (excepto BCG)', tipo: 'checkbox' },
      { id: 'pregunta71', texto: 'Bitácora de calibración de termómetros', tipo: 'checkbox' },
      { id: 'pregunta72', texto: 'Vacunas', tipo: 'checkbox' },//4 rango
      { id: 'pregunta73', texto: 'Lancetas para tamiz', tipo: 'checkboxdual' },
      { id: 'pregunta74', texto: 'Papel filtro', tipo: 'checkboxdual' },
      { id: 'pregunta75', texto: 'Bitácora limpieza refri', tipo: 'checkbox' },
      { id: 'pregunta76', texto: 'Bitácora tamiz', tipo: 'checkbox' },
      { id: 'pregunta77', texto: 'Vaso contenedor o rejilla', tipo: 'checkboxdual' },
      { id: 'pregunta78', texto: 'Jeringas', tipo: 'checkboxdual' },
      { id: 'pregunta79', texto: 'Torundas', tipo: 'checkboxdual' },
      { id: 'pregunta80', texto: 'Cartillas de vacunación', tipo: 'checkboxdual' },
      { id: 'pregunta81', texto: 'Termo de 9 litros', tipo: 'checkboxdual' },
      { id: 'pregunta82', texto: 'Paquetes congelantes', tipo: 'checkboxdual' },
      { id: 'pregunta83', texto: 'Botes de RPBI', tipo: 'checkboxdual' },
      { id: 'pregunta84', texto: 'Mesa de exploración con pierneras', tipo: 'checkboxdual' },
      { id: 'pregunta85', texto: 'Escalerilla de 2 peldaños', tipo: 'checkboxdual' },
      { id: 'pregunta86', texto: 'Lámpara de examinación', tipo: 'checkboxdual' },
      { id: 'pregunta87', texto: 'Batas', tipo: 'checkboxdual' },
      { id: 'pregunta88', texto: 'Bitácora de productividad', tipo: 'checkbox' },


    ],
  },
  {
    titulo: 'Farmacia',
    preguntas: [
      { id: 'supervisor_03', texto: 'Nombre del responsable de Farmacia', tipo: 'texto' },
      { id: 'pregunta89', texto: 'Termohigrómetro', tipo: 'checkboxdual' },
      { id: 'pregunta90', texto: 'Medicamentos lasa y alto riesgo', tipo: 'checkbox' },
      { id: 'pregunta91', texto: 'Semaforización y orden medicamentos y material de curación', tipo: 'checkbox' },
      { id: 'pregunta92', texto: 'Con lector óptico', tipo: 'checkboxdual' },
      { id: 'pregunta93', texto: 'Congruencia fisica y en sistema de 10 claves de medicamentos y 5 de material de curación', tipo: 'texto' },
      { id: 'pregunta94', texto: 'SIAM actualizado', tipo: 'checkboxdual' },
      { id: 'pregunta95', texto: 'Archivos simed max 3 días de retraso', tipo: 'checkboxdual' },
      { id: 'pregunta96', texto: 'Con computadora o computadora accesible a todo médico', tipo: 'checkboxdual' },

    ],
  },
  {
    titulo: 'Consultorio',
    preguntas: [
      { id: 'supervisor_04', texto: 'Médico a evaluar', tipo: 'texto' },
      { id: 'pregunta97', texto: 'Escritorio', tipo: 'checkboxdual' },
      { id: 'pregunta98', texto: 'Silla secretarial', tipo: 'checkboxdual' },
      { id: 'pregunta99', texto: 'Silla fija acojinada (2)', tipo: 'checkbox' },
      { id: 'pregunta100', texto: 'Mesa de exploración', tipo: 'checkboxdual' },
      { id: 'pregunta101', texto: 'Estuche de diagnóstico con pilas', tipo: '' },
      { id: 'pregunta102', texto: 'Estetoscopio', tipo: 'checkboxdual' },
      { id: 'pregunta103', texto: 'Fonodetector o estetoscopio de pinard', tipo: 'checkboxdual' },
      { id: 'pregunta104', texto: 'Martillo percutor', tipo: 'checkboxdual' },
      { id: 'pregunta105', texto: 'Monofilamento', tipo: 'checkboxdual' },
      { id: 'pregunta106', texto: 'Mesa mayo', tipo: 'checkboxdual' },
      { id: 'pregunta107', texto: 'Escalerilla de 2 peldaños', tipo: 'checkboxdual' },
      { id: 'pregunta108', texto: 'Luz y ventilacion adecuada', tipo: 'checkboxdual' },
      { id: 'pregunta109', texto: 'Lámpara de examinación', tipo: 'checkboxdual' },

    ],
  },
  {
    titulo: 'Referencia y contrareferencia',
    preguntas: [
      { id: 'pregunta110', texto: 'Verificar 3 expedientes clínicos que la referencia y contrareferencia se hayan realizado de manera correcta', tipo: 'checkbox' },//5


    ],
  },
  {
    titulo: 'Mantenimiento',
    preguntas: [
      { id: 'supervisor_05', texto: 'Responsable de unidad', tipo: 'texto' },
      { id: 'pregunta111', texto: 'Correcto registro de reportes en plataforma de mantenimiento', tipo: 'checkbox' },


    ],
  },
  // Secciones
];

function Encuesta() {
  const [respuestas, setRespuestas] = useState<Respuestas>({});
  const [paso, setPaso] = useState(0); // Comenzamos desde la sección 0
  const totalPasos = preguntasPorSeccion.length;

  const handleInputChange = (id: string, value: string | boolean | number) => {
    setRespuestas({
      ...respuestas,
      [id]: value
    });
    console.log('Pregunta ' + id + ': ' + value)
  };

  const avanzarPaso = () => {
    setPaso(paso + 1);
  };

  const retrocederPaso = () => {
    setPaso(paso - 1);
  };
  const [selectedJurisdiccion, setSelectedJurisdiccion] = useState('');
  const [selectedMunicipio, setSelectedMunicipio] = useState('');
  const [showMunicipios, setShowMunicipios] = useState(false);
  const [showCentrosSalud, setShowCentrosSalud] = useState(false);
  const handleJurisdiccionChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedJurisdiccion(e.target.value);
    setShowMunicipios(true);
    setShowCentrosSalud(false);
  };

  const handleMunicipioChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedMunicipio(e.target.value);
    setShowCentrosSalud(true);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Jurisdicción seleccionada: ', selectedJurisdiccion);
    console.log('Municipio seleccionado: ', selectedMunicipio);
  };

  return (
    <RootLayout>
      <div className='bg-gray-100 h-full pb-11'>
        <div className='ml-5'>
          {paso == 0 && (
            <form onSubmit={handleSubmit}>
              <label htmlFor="jurisdiccion" className="font-bold">
                Selecciona una Jurisdicción Sanitaria
              </label>
              <div className="">
                <select
                  id="jurisdiccion"
                  name="jurisdiccion"
                  onChange={handleJurisdiccionChange}
                >
                  <option value="" >Selecciona una opción...</option>
                  <option value="jurisdiccion1">Jurisdicción Sanitaria 1 (Querétaro)</option>
                  <option value="jurisdiccion2">Jurisdicción Sanitaria 2 (San Juan del Río)</option>
                  <option value="jurisdiccion3">Jurisdicción Sanitaria 3 (Cadereyta de Montes)</option>
                  <option value="jurisdiccion4">Jurisdicción Sanitaria 4 (Jalpan de Serra)</option>
                </select>
              </div>

              {showMunicipios && (
                <div>
                  <label htmlFor="municipio" className="font-semibold">
                    Selecciona el Municipio
                  </label>
                  <div className="">
                    <select
                      id="municipio"
                      name="municipio"
                      className="h-full rounded border-0 py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      onChange={handleMunicipioChange}
                    >
                      <option value="">Selecciona un municipio...</option>
                      {/* Mapeo de los municipios de la jurisdicción seleccionada */}
                      {selectedJurisdiccion === 'jurisdiccion1' && (
                        <>
                          <option value="municipio1_1">Corregidora</option>
                          <option value="municipio1_2">El Marqués</option>
                          <option value="municipio1_3">Huimilpan</option>
                          <option value="municipio1_4">Querétaro</option>
                        </>
                      )}
                      {selectedJurisdiccion === 'jurisdiccion2' && (
                        <>
                          <option value="municipio2_1">Amealco de Bonfil</option>
                          <option value="municipio2_2">Colón</option>
                          <option value="municipio2_3">Pedro Escobedo</option>
                          <option value="municipio2_4">San Juan Río</option>
                          <option value="municipio2_5">Tequisquiapan</option>
                        </>
                      )}
                      {selectedJurisdiccion === 'jurisdiccion3' && (
                        <>
                          <option value="municipio3_1">Cadereyta de Montes</option>
                          <option value="municipio3_2">Ezequiel Montes</option>
                          <option value="municipio3_3">Peñamiller</option>
                          <option value="municipio3_4">San Joaquín</option>
                          <option value="municipio3_5">Tolimán</option>
                        </>
                      )}
                      {selectedJurisdiccion === 'jurisdiccion4' && (
                        <>
                          <option value="municipio4_1">Arroyo Seco</option>
                          <option value="municipio4_2">Jalpan de Serra</option>
                          <option value="municipio4_3">Landa de Matamoros</option>
                          <option value="municipio4_4">Pinal de Amoles</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>
              )}

              {showCentrosSalud && (
                <div>
                  <label htmlFor="centroSalud" className="font-semibold">
                    Selecciona Centro de Salud
                  </label>
                  <div className="">
                    <select
                      id="centroSalud"
                      name="centroSalud"
                      className="h-full rounded border-0 py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    >
                      {/*  Mapeo de los centros de salud del municipio seleccionados */}
                      {selectedMunicipio === 'municipio1_1' && (
                        <>
                          <option value="centrosalud1_1">QTSSA012602; EMILIANO ZAPATA</option>
                          <option value="centrosalud1_2">QTSSA000854; JOAQUÍN HERRERA (LA CUEVA)</option>
                          <option value="centrosalud1_3">QTSSA012252; LA NEGRETA</option>
                          <option value="centrosalud1_4">QTSSA000842; LOS ÁNGELES</option>
                          <option value="centrosalud1_5">QTSSA000866; LOS OLVERA</option>
                          <option value="centrosalud1_6">QTSSA003640; PRESA DE BRAVO</option>
                          <option value="centrosalud1_7">QTSSA000883; SAN JOSÉ DE LOS OLVERA</option>
                          <option value="centrosalud1_8">QTSSA000830; SANTA BÁRBARA</option>
                        </>
                      )}
                      {selectedMunicipio === 'municipio1_2' && (
                        <>
                          <option value="centrosalud2_1">QTSSA012643; ALFAJAYUCAN</option>
                          <option value="centrosalud2_2">QTSSA001332; AMAZCALA</option>
                          <option value="centrosalud2_3">QTSSA001344; ATONGO</option>
                          <option value="centrosalud2_4">QTSSA003571; CHICHIMEQUILLAS</option>
                          <option value="centrosalud2_5">QTSSA001431; EL PARAÍSO</option>
                          <option value="centrosalud2_6">QTSSA001402; JESÚS MARÍA</option>
                          <option value="centrosalud2_7">QTSSA001315; LA CAÑADA</option>
                          <option value="centrosalud2_8">QTSSA001390; LA GRIEGA</option>
                          <option value="centrosalud2_9">QTSSA012940; LA PIEDAD</option>
                          <option value="centrosalud2_10">QTSSA003580; NAVAJAS</option>
                          <option value="centrosalud2_11">QTSSA001426; PALO ALTO</option>
                          <option value="centrosalud2_12">QTSSA001933; SAN ISIDRO MIRANDA</option>
                          <option value="centrosalud2_13">QTSSA001356; SAN MIGUEL LÁZARO CÁRDENAS</option>
                        </>
                      )}
                      {selectedMunicipio === 'municipio1_3' && (
                        <>
                          <option value="centrosalud3_1">QTSSA000970; APAPATARO</option>
                          <option value="centrosalud3_2">QTSSA000994; CEJA DE BRAVO</option>
                          <option value="centrosalud3_3">QTSSA003700; CENTRO DE SALUD BUENAVISTA</option>
                          <option value="centrosalud3_4">QTSSA001023; EL MILAGRO</option>
                          <option value="centrosalud3_5">QTSSA000953; HUIMILPAN</option>
                          <option value="centrosalud3_6">QTSSA001035; LA NORIA</option>
                          <option value="centrosalud3_7">QTSSA001011; LAGUNILLAS</option>
                          <option value="centrosalud3_8">QTSSA001006; LOS CUES</option>
                          <option value="centrosalud3_9">QTSSA001040; SAN PEDRO HUIMILPAN</option>
                        </>
                      )}
                      {selectedMunicipio === 'municipio1_4' && (
                        <>
                          <option value="centrosalud4_1">QTSSA001846; FELIPE CARRILLO PUERTO</option>
                          <option value="centrosalud4_2">QTSSA001904; JOFRITO</option>
                          <option value="centrosalud4_3">QTSSA001793; JURICA</option>
                          <option value="centrosalud4_4">QTSSA003715; LA GOTERA</option>
                          <option value="centrosalud4_5">QTSSA002003; LA SOLANA</option>
                          <option value="centrosalud4_6">QTSSA002522; LÁZARO CÁRDENAS</option>
                          <option value="centrosalud4_7">QTSSA001851; LOMA BONITA</option>
                          <option value="centrosalud4_8">QTSSA012982; LOMAS DE CASABLANCA</option>
                          <option value="centrosalud4_9">QTSSA001810; MENCHACA</option>
                          <option value="centrosalud4_10">QTSSA002703; MENCHACA NORTE</option>
                          <option value="centrosalud4_11">QTSSA001916; MONTENEGRO</option>
                          <option value="centrosalud4_12">QTSSA001863; PEDRO ESCOBEDO</option>
                          <option value="centrosalud4_13">QTSSA001921; PIE DE GALLO</option>
                          <option value="centrosalud4_14">QTSSA001822; SAN ANTONIO DE LA PUNTA</option>
                          <option value="centrosalud4_15">QTSSA001945; SAN JOSÉ BUENAVISTA</option>
                          <option value="centrosalud4_16">QTSSA012240; SAN JOSÉ EL ALTO</option>
                          <option value="centrosalud4_17">QTSSA001962; SAN MIGUELITO</option>
                          <option value="centrosalud4_18">QTSSA001834; SAN PABLO</option>
                          <option value="centrosalud4_19">QTSSA002534; SAN PEDRITO PEÑUELAS</option>
                          <option value="centrosalud4_20">QTSSA012976; SAN PEDRO MÁRTIR</option>
                          <option value="centrosalud4_21">QTSSA001974; SANTA MARÍA MAGDALENA</option>
                          <option value="centrosalud4_22">QTSSA012655; SANTA ROSA JÁUREGUI</option>
                          <option value="centrosalud4_23">QTSSA012923; SATELITE</option>
                          <option value="centrosalud4_24">QTSSA002015; TINAJA DE LA ESTANCIA</option>
                          <option value="centrosalud4_25">QTSSA002020; TLACOTE EL BAJO</option>
                        </>
                      )}
                      {selectedMunicipio === 'municipio2_1' && (
                        <>
                          <option value="centrosaludJ2_1_1">QTSSA003451; CESSA AMEALCO</option>
                          <option value="centrosaludJ2_1_2">QTSSA000183; CHITEJE DE GARABATO</option>
                          <option value="centrosaludJ2_1_3">QTSSA000060; DONICA</option>
                          <option value="centrosaludJ2_1_4">QTSSA000055; EL ATORON</option>
                          <option value="centrosaludJ2_1_5">QTSSA000171; EL BOTHE</option>
                          <option value="centrosaludJ2_1_6">QTSSA002674; EL LINDERO</option>
                          <option value="centrosaludJ2_1_7">QTSSA000101; EL RINCÓN</option>
                          <option value="centrosaludJ2_1_8">QTSSA000072; GALINDILLO</option>
                          <option value="centrosaludJ2_1_9">QTSSA000096; LA PIEDAD</option>
                          <option value="centrosaludJ2_1_10">QTSSA000166; LA TORRE</option>
                          <option value="centrosaludJ2_1_11">QTSSA003631; SAN IDELFONSO</option>
                          <option value="centrosaludJ2_1_12">QTSSA000125; SAN JOSÉ ITHO</option>
                          <option value="centrosaludJ2_1_13">QTSSA012812; SAN MIGUEL TLAXCALTEPEC</option>
                          <option value="centrosaludJ2_1_14">QTSSA000130; SAN PEDRO TENANGO</option>
                          <option value="centrosaludJ2_1_15">QTSSA000142; SANTIAGO MEXQUITITLAN</option>
                          <option value="centrosaludJ2_1_16">QTSSA012614; SANTIAGO MEXQUITITLÁN BARRIO 5TO.</option>
                        </>
                      )}
                      {selectedMunicipio === 'municipio2_2' && (
                        <>
                          <option value="centrosaludJ2_2_1">QTSSA002580; AJUCHITLAN</option>
                          <option value="centrosaludJ2_2_2">QTSSA002732; COLON</option>
                          <option value="centrosaludJ2_2_3">QTSSA00726; EL BLANCO</option>
                          <option value="centrosaludJ2_2_4">QTSSA000784; EL ZAMORANO</option>
                          <option value="centrosaludJ2_2_5">QTSSA000731; GALERAS</option>
                          <option value="centrosaludJ2_2_6">QTSSA002650; LA PEÑUELA</option>
                          <option value="centrosaludJ2_2_7">QTSSA003613; PEÑA COLORADA</option>
                          <option value="centrosaludJ2_2_8">QTSSA000796; PUERTO DEL COYOTE</option>
                          <option value="centrosaludJ2_2_9">QTSSA000772; SANTA ROSA DE LIMA</option>
                        </>
                      )}
                      {selectedMunicipio === 'municipio2_3' && (
                        <>
                          <option value="centrosaludJ2_3_1">QTSSA001542; EL SAUZ</option>
                          <option value="centrosaludJ2_3_2">QTSSA001460; EPIGMENIO GONZÁLEZ</option>
                          <option value="centrosaludJ2_3_3">QTSSA001484; ESCOLASTICAS</option>
                          <option value="centrosaludJ2_3_4">QTSSA001472; LA D</option>
                          <option value="centrosaludJ2_3_5">QTSSA001496; LA LIRA</option>
                          <option value="centrosaludJ2_3_6">QTSSA001501; LA PALMA</option>
                          <option value="centrosaludJ2_3_7">QTSSA001554; LA VENTA</option>
                          <option value="centrosaludJ2_3_8">QTSSA001443; PEDRO ESCOBEDO</option>
                          <option value="centrosaludJ2_3_9">QTSSA001513; SAN CIRILO</option>
                          <option value="centrosaludJ2_3_10">QTSSA001525; SAN CLEMENTE</option>
                          <option value="centrosaludJ2_3_11">QTSSA003622; SAN FANDILA</option>
                        </>
                      )}
                      {selectedMunicipio === 'municipio2_4' && (
                        <>
                          <option value="centrosaludJ2_4_1">QTSSA002761; CENTRO DE SALUD ARCILA</option>
                          <option value="centrosaludJ2_4_2">QTSSA002551; CENTRO DE SALUD ORIENTE</option>
                          <option value="centrosaludJ2_4_3">QTSSA002160; CENTRO DE SALUD URBANO SAN JUAN DEL RÍO</option>
                          <option value="centrosaludJ2_4_4">QTSSA002184;  EL CAZADERO</option>
                          <option value="centrosaludJ2_4_5">QTSSA002312; EL SITIO</option>
                          <option value="centrosaludJ2_4_6">QTSSA002691; LA ESTANCIA</option>
                          <option value="centrosaludJ2_4_7">QTSSA002213; LA LLAVE</option>
                          <option value="centrosaludJ2_4_8">QTSSA002686; LA VALLA</option>
                          <option value="centrosaludJ2_4_9">QTSSA002225; ORGANAL</option>
                          <option value="centrosaludJ2_4_10">QTSSA002242; PASO DE MATA</option>
                          <option value="centrosaludJ2_4_11">QTSSA002196; SAN JOSÉ GALINDO</option>
                          <option value="centrosaludJ2_4_12">QTSSA002266; SAN MIGUEL GALINDO</option>
                          <option value="centrosaludJ2_4_13">QTSSA002336; SAN SEBASTIAN DE LA BARRANCAS</option>
                          <option value="centrosaludJ2_4_14">QTSSA002271; SANTA BÁRBARA DE LA CUEVA</option>
                          <option value="centrosaludJ2_4_15">QTSSA002283; SANTA LUCIA</option>
                          <option value="centrosaludJ2_4_16">QTSSA002300; SANTA ROSA XAJAY</option>
                          <option value="centrosaludJ2_4_17">QTSSA002230; SENEGAL DE LAS PALOMAS</option>
                        </>
                      )}
                      {selectedMunicipio === 'municipio2_5' && (
                        <>
                          <option value="centrosaludJ2_5_1">QTSSA002411; EL TEJOCOTE</option>
                          <option value="centrosaludJ2_5_2">QTSSA002394; FUENTEZUELAS</option>
                          <option value="centrosaludJ2_5_3">QTSSA002382; LA FUENTE</option>
                          <option value="centrosaludJ2_5_4">QTSSA002370; LOS CERRITOS</option>
                          <option value="centrosaludJ2_5_5">QTSSA002592; SAN NICOLAS</option>
                          <option value="centrosaludJ2_5_6">QTSSA002353; TEQUISQUIAPAN</option>
                        </>
                      )}
                      {selectedMunicipio === 'municipio3_1' && (
                        <>
                          <option value="centrosaludJ3_1_1">QTSSA000480; CADEREYTA</option>
                          <option value="centrosaludJ3_1_2">QTSSA003655; CENTRO DE SALUD EL PALMAR</option>
                          <option value="centrosaludJ3_1_3">QTSSA000533; CHAVARRIAS</option>
                          <option value="centrosaludJ3_1_4">QTSSA000521; CORRAL BLANCO</option>
                          <option value="centrosaludJ3_1_5">QTSSA002616; EL AGUACATE</option>
                          <option value="centrosaludJ3_1_6">QTSSA000545; EL DOCTOR</option>
                          <option value="centrosaludJ3_1_7">QTSSA000562; HIGUERILLAS</option>
                          <option value="centrosaludJ3_1_8">QTSSA000550; LA ESPERANZA</option>
                          <option value="centrosaludJ3_1_9">QTSSA000632; LA TINAJA</option>
                          <option value="centrosaludJ3_1_10">QTSSA000574; LOS JUÁREZ</option>
                          <option value="centrosaludJ3_1_11">QTSSA003724; MACONI</option>
                          <option value="centrosaludJ3_1_12">QTSSA000591; OCOTITLAN</option>
                          <option value="centrosaludJ3_1_13">QTSSA002575; PATHE</option>
                          <option value="centrosaludJ3_1_14">QTSSA000673; RANCHO NUEVO</option>
                          <option value="centrosaludJ3_1_15">QTSSA000620; SOMBRERETE</option>
                          <option value="centrosaludJ3_1_16">QTSSA000644; TZIQUIA</option>
                          <option value="centrosaludJ3_1_17">QTSSA000656; VIZARRON</option>
                        </>
                      )}
                      {selectedMunicipio === 'municipio3_2' && (
                        <>
                          <option value="centrosaludJ3_2_1">QTSSA000912; BERNAL</option>
                          <option value="centrosaludJ3_2_2">QTSSA003691; CENTRO DE SALUD VILLA PROGRESO</option>
                          <option value="centrosaludJ3_2_3">QTSSA002563; EL CIERVO</option>
                          <option value="centrosaludJ3_2_4">QTSSA000895; EZEQUIEL MONTES</option>
                          <option value="centrosaludJ3_2_5">QTSSA000936; LAS ROSAS</option>
                        </>
                      )}
                      {selectedMunicipio === 'municipio3_3' && (
                        <>
                          <option value="centrosaludJ3_3_1">QTSSA002720; AGUA FRIA</option>
                          <option value="centrosaludJ3_3_2">QTSSA001595; CAMARGO</option>
                          <option value="centrosaludJ3_3_3">QTSSA003673; CENTRO DE SALUD PEÑA BLANCA</option>
                          <option value="centrosaludJ3_3_4">QTSSA003682; CENTRO DE SALUD VILLA EMILIANO ZAPATA</option>
                          <option value="centrosaludJ3_3_5">QTSSA001612; EL FRONTONCILLO</option>
                          <option value="centrosaludJ3_3_6">QTSSA001665; EL PORTUGUES</option>
                          <option value="centrosaludJ3_3_7">QTSSA001624; LA HIGUERA</option>
                          <option value="centrosaludJ3_3_8">QTSSA001600; LOS ENCINOS</option>
                          <option value="centrosaludJ3_3_9">QTSSA001636; MOLINITOS</option>
                          <option value="centrosaludJ3_3_10">QTSSA001566; PEÑAMILLER</option>
                          <option value="centrosaludJ3_3_11">QTSSA001653; PLAZUELA</option>
                          <option value="centrosaludJ3_3_12">QTSSA001682; RÍO BLANCO</option>
                          <option value="centrosaludJ3_3_13">QTSSA001694; SAN JUANICO</option>
                          <option value="centrosaludJ3_3_14">QTSSA001706; SAN MIGUEL PALMAS</option>
                        </>
                      )}
                      {selectedMunicipio === 'municipio3_4' && (
                        <>
                          <option value="centrosaludJ3_4_1">QTSSA002061; EL APARTADERO</option>
                          <option value="centrosaludJ3_4_2">QTSSA002090; MARAVILLAS</option>
                          <option value="centrosaludJ3_4_3">QTSSA002102; SAN CRISTÓBAL</option>
                          <option value="centrosaludJ3_4_4">QTSSA002044; SAN JOAQUÍN</option>
                          <option value="centrosaludJ3_4_5">QTSSA002114; SANTA  MARÍA ALAMOS</option>
                          <option value="centrosaludJ3_4_6">QTSSA002085; SANTIAGO AZOGUEZ</option>
                        </>
                      )}
                      {selectedMunicipio === 'municipio3_5' && (
                        <>
                          <option value="centrosaludJ3_5_1">QTSSA002452; CARRIZALILLO</option>
                          <option value="centrosaludJ3_5_2">QTSSA002662; CASA BLANCA</option>
                          <option value="centrosaludJ3_5_3">QTSSA002476; CASAS VIEJAS</option>
                          <option value="centrosaludJ3_5_4">QTSSA003664; CENTRO DE SALUD SAN PABLO</option>
                          <option value="centrosaludJ3_5_5">QTSSA002481; PANALES</option>
                          <option value="centrosaludJ3_5_6">QTSSA002493; SAN MIGUEL</option>
                          <option value="centrosaludJ3_5_7">QTSSA012911; TOLIMÁN</option>
                        </>
                      )}
                      {selectedMunicipio === 'municipio4_1' && (
                        <>
                          <option value="centrosaludJ4_1_1">QTSSA000364; ARROYO SECO</option>
                          <option value="centrosaludJ4_1_2">QTSSA012836; CONCÁ</option>
                          <option value="centrosaludJ4_1_3">QTSSA002633; EL REFUGIO</option>
                          <option value="centrosaludJ4_1_4">QTSSA000405; LA FLORIDA</option>
                          <option value="centrosaludJ4_1_5">QTSSA012841; PURÍSIMA DE ARISTA</option>
                          <option value="centrosaludJ4_1_6">QTSSA003460; SAN JUAN BUENAVENTURA</option>
                          <option value="centrosaludJ4_1_7">QTSSA000463; SANTA MARÍA DE LOS COCOS</option>
                        </>
                      )}
                      {selectedMunicipio === 'municipio4_2' && (
                        <>
                          <option value="centrosaludJ4_2_1">QTSSA001093; BARREALES</option>
                          <option value="centrosaludJ4_2_2">QTSSA001122; EL SAUCILLO</option>
                          <option value="centrosaludJ4_2_3">QTSSA001064; JALPAN URBANO 1</option>
                          <option value="centrosaludJ4_2_4">QTSSA002546; JALPAN URBANO 2</option>
                          <option value="centrosaludJ4_2_5">QTSSA001105; LAGUNA DE PITZQUINTLA</option>
                          <option value="centrosaludJ4_2_6">QTSSA001134; TANCAMA</option>
                          <option value="centrosaludJ4_2_7">QTSSA001146; TANCOYOL</option>
                          <option value="centrosaludJ4_2_8">QTSSA001110; VALLE VERDE</option>
                          <option value="centrosaludJ4_2_9">QTSSA001163; ZOYAPILCA</option>
                        </>
                      )}
                      {selectedMunicipio === 'municipio4_3' && (
                        <>
                          <option value="centrosaludJ4_3_1">QTSSA001192; ACATITLÁN DE ZARAGOZA</option>
                          <option value="centrosaludJ4_3_2">QTSSA001204; AGUA ZARCA</option>
                          <option value="centrosaludJ4_3_3">QTSSA001233; EL LOBO</option>
                          <option value="centrosaludJ4_3_4">QTSSA001221; LA LAGUNITA</option>
                          <option value="centrosaludJ4_3_5">QTSSA012991; LANDA DE MATAMOROS</option>
                          <option value="centrosaludJ4_3_6">QTSSA013000; NEBLINAS</option>
                          <option value="centrosaludJ4_3_7">QTSSA001250; RÍO VERDITO</option>
                          <option value="centrosaludJ4_3_8">QTSSA001274; SANTA INES</option>
                          <option value="centrosaludJ4_3_9">QTSSA001286; TILACO</option>
                          <option value="centrosaludJ4_3_10">QTSSA001303; VALLE DE GUADALUPE</option>
                        </>
                      )}
                      {selectedMunicipio === 'municipio4_4' && (
                        <>
                          <option value="centrosaludJ4_4_1">QTSSA000212; AHUACATLÁN DE GUADALUPE</option>
                          <option value="centrosaludJ4_4_2">QTSSA000236; BUCARELI</option>
                          <option value="centrosaludJ4_4_3">QTSSA000253; DERRAMADERO DE JUÁREZ</option>
                          <option value="centrosaludJ4_4_4">QTSSA000352; MADROÑO</option>
                          <option value="centrosaludJ4_4_5">QTSSA012824; PINAL DE AMOLES</option>
                          <option value="centrosaludJ4_4_6">QTSSA000282; SAN GASPAR</option>
                          <option value="centrosaludJ4_4_7">QTSSA002645; SAN PEDRO EL VIEJO</option>
                          <option value="centrosaludJ4_4_8">QTSSA000311; SAN PEDRO ESCANELA</option>
                          <option value="centrosaludJ4_4_9">QTSSA000323; SANTA AGUEDA</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>
              )}

            </form>)}
          <br></br>
          <h2 className='font-bold mb-4'>{preguntasPorSeccion[paso].titulo}</h2>
          {preguntasPorSeccion[paso].preguntas.map((pregunta: Pregunta) => (
            <div key={pregunta.id}>
              <h3 className='font-semibold'>{pregunta.texto}</h3>
              {pregunta.tipo === 'texto' && (
                <input
                  type="text"
                  value={respuestas[pregunta.id]?.toString() ?? ''}
                  onChange={(e) => handleInputChange(pregunta.id, e.target.value)}
                  className="pl-2 block w-8/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              )}
              {pregunta.tipo === 'checkbox' && (
                // <Checkboxes
                //   id={pregunta.id}
                //   options={['Si', 'Parcialmente', 'No']}
                //   onChange={handleInputChange}

                // />
                <RadioInput options={[{ text: 'Si', value: '2' }, { text: 'Parcialmente', value: '1' }, { text: 'No', value: '0' }]} onChange={(value) => handleInputChange(pregunta.id, parseInt(value))} value={respuestas[pregunta.id]?.toString() ?? ''}></RadioInput>

              )}
              {pregunta.tipo === 'checkboxdual' && (
                <Checkboxes
                  id={pregunta.id}
                  options={['Si', 'No']}
                  onChange={handleInputChange}
                />
              )}
            </div>
          ))}
          <div className='flex mt-5'>

            {paso > 0 && (
              <button onClick={retrocederPaso} className="mr-4 group relative h-7 w-16 overflow-hidden rounded-2xl bg-gray-900 text-sm font-bold text-white">
                Atrás
                <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
              </button>
            )}
            {/* <p>Página {paso + 1}</p> */}
            <form>
              <select
                name="pagina"
                id="paso"
                value={paso}
                onChange={(e) => setPaso(parseInt(e.target.value))}
              >
                {preguntasPorSeccion.map((seccion, index) => (
                  <option key={index} value={index}>
                    {seccion.titulo}
                  </option>
                ))}
              </select>
            </form>
            {paso < totalPasos - 1 && (
              <button onClick={avanzarPaso} className="ml-4 group relative h-7 w-20 overflow-hidden rounded-2xl bg-gray-900 text-sm font-bold text-white">
                Siguiente
                <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
              </button>
            )}
          </div>

        </div>
      </div>
    </RootLayout>
  );
};


export default dynamic(() => Promise.resolve(Encuesta), { ssr: false })