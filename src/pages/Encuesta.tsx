'use client';
import React, { useState } from 'react';
import RootLayout from '../app/RootLayout';
import dynamic from "next/dynamic";
import Checkboxes from '@/components/Checkboxes2';

interface Pregunta {
  id: string;
  texto: string;
  tipo: string; // Ejemplo: "texto", "checkbox", etc.
}

interface Respuestas {
  [key: string]: string | boolean;
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

  const handleInputChange = (id: string, value: string | boolean) => {
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

  return (
    <RootLayout>
      <div className='bg-gray-100 h-full pb-11'>
        <div className='ml-5'>
          <h2 className='font-bold mb-4'>{preguntasPorSeccion[paso].titulo}</h2>
          {preguntasPorSeccion[paso].preguntas.map((pregunta: Pregunta) => (
            <div key={pregunta.id}>
              <h3 className='font-semibold'>{pregunta.texto}</h3>
              {pregunta.tipo === 'texto' && (
                <input
                  type="text"
                  value={respuestas[pregunta.id] || ''}
                  onChange={(e) => handleInputChange(pregunta.id, e.target.value)}
                  className="pl-2 block w-8/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              )}
              {pregunta.tipo === 'checkbox' && (
                <Checkboxes
                  id={pregunta.id}
                  options={['Si', 'Parcialmente', 'No']}
                  onChange={handleInputChange}
                />
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