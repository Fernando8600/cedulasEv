import React, { useEffect, useState } from 'react';
import RadioInput from '../components/RadioInput';
import axios from 'axios';
import { preguntasPorSeccion } from '../utils/preguntasPorSeccion';
import InputNum from '../components/InputNum';
import InputDecimal from '../components/InputDecimal';

export interface Pregunta {
  id: string;
  texto: string;
  tipo: string; // Ejemplo: "texto", "checkbox", etc.
  ponderacion: number;
}
interface Jurisdiccion {
  id: number;
  name: string;
}
interface Municipio {
  id: number;
  name: string;
  jurisdiccion_id: number;
}
interface CentroSalud {
  id: number;
  code: string;
  name: string;
  municipio_id: number;
}

export interface Respuestas {
  [key: string]: string | number | undefined;
}


function Encuesta() {
  const [respuestas, setRespuestas] = useState<Respuestas>(JSON.parse(localStorage.getItem('answers-encuesta-01') ?? '{}'));

  const [jurisdicciones, setJurisdicciones] = useState<Jurisdiccion[]>([]);
  const [municipios, setMunicipios] = useState<Municipio[]>([]);
  const [centrosalud, setCentrosalud] = useState<CentroSalud[]>([]);
  const [paso, setPaso] = useState(0); // Comenzamos desde la sección 0
  const [valueSeleccion, setvalueSeleccion] = useState(2);
  const totalPasos = preguntasPorSeccion.length;
  const [isWideScreen, setIsWideScreen] = useState(false);

  const handleInputChange = (id: string, value: string | number | undefined) => {
    const newRespuestas = {

      ...respuestas,
      [id]: value
    };

    setRespuestas(newRespuestas);
    localStorage.setItem('answers-encuesta-01', JSON.stringify(newRespuestas));
    // console.log('Pregunta ' + id + ': ' + value)
  };





  const ChangeRespuestasState = (newRespuestas: Respuestas) => {

    setRespuestas(newRespuestas);
    localStorage.setItem('answers-encuesta-01', JSON.stringify(newRespuestas));
    console.log('Respuestas state has changed')
  };


  const avanzarPaso = () => {
    setPaso(paso + 1);
  };

  const retrocederPaso = () => {
    setPaso(paso - 1);
  };


  const handleJurisdiccionChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const jurisdiccion = jurisdicciones.find(j => j.id == parseInt(e.target.value));

    if (jurisdiccion != undefined) {
      await fetchMuncipios(jurisdiccion.id);
    } else {
      setMunicipios([]);
    }
    setCentrosalud([]);
    const newRespuestas = { ...respuestas, jurisdiccion_id: jurisdiccion?.id, municipio_id: undefined, centro_salud_id: undefined };
    ChangeRespuestasState(newRespuestas);

  };

  const handleMunicipioChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const municipio = municipios.find(j => j.id == parseInt(e.target.value));


    if (municipio != undefined) {
      await fetchCentrosSalud(municipio.id);
    } else {
      setCentrosalud([]);
    }
    const newRespuestas = { ...respuestas, municipio_id: municipio?.id, centro_salud_id: undefined };
    ChangeRespuestasState(newRespuestas);
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      // const totalPonderacion = getTotalPonderacion("pregunta", 0, respuestas, "");
      // console.log('Total Ponderacion:', totalPonderacion);
      delete respuestas.jurisdiccion_id;
      delete respuestas.municipio_id;
      const response = await axios.post('http://localhost:8088/api/encuestas/store.php', respuestas);
      console.log('Response:', response.data);

      alert("Enviado de manera correcta");
    } catch (error) {
      console.error('Error posting data:', error);
    }



  };
  const handleCentroSaludChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const centroSalud = centrosalud.find(j => j.id == parseInt(e.target.value));
    handleInputChange('centro_salud_id', centroSalud?.id);

  };



  const fetchMuncipios = async (jurisdiccion_id: number) => {
    try {
      const response = await axios.get('http://localhost:8088/api/municipios/get-all.php?jurisdiccion_id=' + jurisdiccion_id);
      setMunicipios(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchCentrosSalud = async (municipio_id: number) => {
    try {
      const response = await axios.get('http://localhost:8088/api/centros-salud/get-all.php?municipio_id=' + municipio_id);
      setCentrosalud(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  useEffect(() => {
    const fetchJurisdicciones = async () => {
      try {
        const response = await axios.get('http://localhost:8088/api/jurisdicciones/get-all.php');
        setJurisdicciones(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchJurisdicciones();
    if (respuestas.jurisdiccion_id) {
      fetchMuncipios(respuestas.jurisdiccion_id as number ?? 0);
    }
    if (respuestas.municipio_id) {
      fetchCentrosSalud(respuestas.municipio_id as number ?? 0);
    }

  }, [respuestas.jurisdiccion_id, respuestas.municipio_id]);

  const getCsv = async () => {
    try {
      const response = await axios.get('http://localhost:8088/api/encuestas/csvGen.php', {
        responseType: 'blob', // Important for file download
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Formulario_01.csv'); // Specify the filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error fetching CSV:', error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 680); // Cambia 1024 por el ancho deseado
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Ejecuta una vez para establecer el estado inicial

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='bg-gray-100 h-full pb-11'>
      <div className='ml-5'>
        {paso == 0 && (
          <form onSubmit={handleSubmit}>

            <label htmlFor="jurisdiccion" className="font-semibold">
              Selecciona una Jurisdicción Sanitaria
            </label>
            <div className="">
              <select

                id="jurisdiccion"
                name="jurisdiccion"
                className="h-full rounded border-0 py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                value={respuestas.jurisdiccion_id}
                onChange={handleJurisdiccionChange}
              >
                <option value="" >Selecciona la Jurisdicción...</option>
                {jurisdicciones.map((jurisdiccion) => (
                  <option key={jurisdiccion.id} value={jurisdiccion.id}>{jurisdiccion.name}</option>
                ))}

              </select>
            </div>

            <div>
              <label htmlFor="municipio" className="font-semibold">
                Selecciona un Municipio
              </label>
              <div className="">
                <select
                  id="municipio"
                  name="municipio"
                  className="h-full rounded border-0 py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  value={respuestas.municipio_id}
                  onChange={handleMunicipioChange}
                >
                  <option value="">Selecciona el Municipio...</option>
                  {/* Mapeo de los municipios de la jurisdicción seleccionada */}
                  {municipios.map((municipio) => (
                    <option key={municipio.id} value={municipio.id}>{municipio.name}</option>
                  ))}
                </select>
              </div>
            </div>


            <div>
              <label htmlFor="centroSalud" className="font-semibold">
                Selecciona un Centro de Salud
              </label>
              <div className="">
                <select
                  id="centroSalud"
                  name="centroSalud"
                  className="h-full rounded border-0 py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  value={respuestas.centro_salud_id}
                  onChange={handleCentroSaludChange}
                >
                  <option value="">Selecciona el Centro de salud...</option>
                  {/*  Mapeo de los centros de salud del municipio seleccionados */}
                  {centrosalud.map((centroSalud) => (
                    <option key={centroSalud.id} value={centroSalud.id}>{centroSalud.code} {centroSalud.name}</option>
                  ))}
                </select>
              </div>
            </div>


          </form>)}
        <br></br>
        <div className='flex'>
          <h2 className='font-bold mb-4'>{preguntasPorSeccion[paso].titulo}</h2>
          {paso == 5 && <><span className='block mb-4'></span>
            <h2 className='font-bold mb-4'>  - cuenta con:</h2></>}
          {paso == 14 && respuestas['expediente_01'] == 2 && respuestas['expediente_01'] != null && <h2 className='font-bold mb-4'> / Hipertensión</h2>}
          {paso == 14 && respuestas['expediente_01'] == 1 && respuestas['expediente_01'] != null && <h2 className='font-bold mb-4'> / Diabetes Mellitus</h2>}
        </div>

        {preguntasPorSeccion[paso].preguntas.map((pregunta: Pregunta) => (
          <div key={pregunta.id}>

            {pregunta.tipo === 'texto' && (
              <>
                <h3 className='font-semibold'>{pregunta.texto}</h3>

                <InputNum
                  title={pregunta.texto}
                  onValueChange={(value) => handleInputChange(pregunta.id, value)}
                  value={respuestas[pregunta.id] !== undefined ? parseInt(respuestas[pregunta.id] as string) : 0}
                  disabled={false}
                />
                {/* <input
                    type="text"
                    value={respuestas[pregunta.id]?.toString() ?? ''}
                    onChange={(e) => handleInputChange(pregunta.id, e.target.value)}
                    className="pl-2 block w-8/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  /> */}
              </>
            )}
            {pregunta.tipo === 'textoDecimal' && (
              <>
                <h3 className='font-semibold'>{pregunta.texto}</h3>

                <InputDecimal
                  title={pregunta.texto}
                  onValueChange={(value) => handleInputChange(pregunta.id, value)}
                  value={respuestas[pregunta.id] !== undefined ? parseInt(respuestas[pregunta.id] as string) : 0}
                  disabled={false}
                />
                {/* <input
                    type="text"
                    value={respuestas[pregunta.id]?.toString() ?? ''}
                    onChange={(e) => handleInputChange(pregunta.id, e.target.value)}
                    className="pl-2 block w-8/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  /> */}
              </>
            )}
            {pregunta.tipo === 'textoNombre' && (
              <>
                <h3 className='font-semibold'>{pregunta.texto}</h3>
                <input
                  type="text"
                  value={respuestas[pregunta.id]?.toString() ?? ''}
                  onChange={(e) => handleInputChange(pregunta.id, e.target.value)}
                  className="pl-2 block w-8/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </>
            )}
            {pregunta.tipo === 'checkbox' && (
              <>
                <h3 className='font-semibold'>{pregunta.texto}</h3>
                <RadioInput options={[{ text: 'Si', value: '2' }, { text: 'Parcialmente', value: '1' }, { text: 'No', value: '0' }]} onChange={(value) => handleInputChange(pregunta.id, parseInt(value))} value={respuestas[pregunta.id]?.toString() ?? ''}></RadioInput>
              </>

            )}
            {pregunta.tipo === 'checkboxAgenda' && (
              <>
                <h3 className='font-semibold'>{pregunta.texto}</h3>
                <RadioInput options={[{ text: 'Todos', value: '2' }, { text: 'La mayoría', value: '1' }, { text: 'No', value: '0' }]} onChange={(value) => handleInputChange(pregunta.id, parseInt(value))} value={respuestas[pregunta.id]?.toString() ?? ''}></RadioInput>
              </>

            )}
            {pregunta.tipo === 'checkboxBCG' && (
              <>
                <h3 className='font-semibold'>{pregunta.texto}</h3>
                <RadioInput options={[{ text: 'No da citas (excepto BCG)', value: '2' }, { text: 'No estoy seguro', value: '1' }, { text: 'Si da citas (además de BCG)', value: '0' }]} onChange={(value) => handleInputChange(pregunta.id, parseInt(value))} value={respuestas[pregunta.id]?.toString() ?? ''}></RadioInput>
              </>

            )}
            {pregunta.tipo === 'checkboxdual' && (
              <>
                <h3 className='font-semibold'>{pregunta.texto}</h3>
                <RadioInput options={[{ text: 'Si', value: '1' }, { text: 'No', value: '0' }]} onChange={(value) => handleInputChange(pregunta.id, parseInt(value))} value={respuestas[pregunta.id]?.toString() ?? ''}></RadioInput>
              </>
            )}
            {pregunta.tipo === 'checkboxquint' && (
              <>
                <h3 className='font-semibold'>{pregunta.texto}</h3>
                <RadioInput options={[{ text: 'Perfecto', value: '4' }, { text: 'Bueno', value: '3' }, { text: 'Medio', value: '2' }, { text: 'Bajo', value: '1' }, { text: 'Malo', value: '0' }]} onChange={(value) => handleInputChange(pregunta.id, parseInt(value))} value={respuestas[pregunta.id]?.toString() ?? ''}></RadioInput>
              </>
            )}
            {pregunta.tipo === 'checkboxquad' && (
              <>
                <h3 className='font-semibold'>{pregunta.texto}</h3>
                <RadioInput options={[{ text: 'Todas', value: '3' }, { text: 'La Mayoría', value: '2' }, { text: 'Pocas', value: '1' }, { text: 'Ninguna', value: '0' }]} onChange={(value) => handleInputChange(pregunta.id, parseInt(value))} value={respuestas[pregunta.id]?.toString() ?? ''}></RadioInput>
              </>
            )}
            {/* Pregunta opcional y dependiente */}


            {pregunta.tipo === 'opcional' && (respuestas['pregunta_20'] == 1 || respuestas['pregunta_20'] == 2) && (
              <>
                <h3 className='font-semibold'>{pregunta.texto}</h3>
                <RadioInput options={[{ text: 'Si', value: '1' }, { text: 'No', value: '0' }]} onChange={(value) => handleInputChange(pregunta.id, parseInt(value))} value={respuestas[pregunta.id]?.toString() ?? ''}></RadioInput>
              </>
            )}
            {pregunta.tipo === 'selec' && (
              <>
                <h3 className='font-bold'>{pregunta.texto}</h3>
                <RadioInput options={[{ text: 'Diabetes Mellitus', value: '1' }, { text: 'Hipertension', value: '2' }]} onChange={(value) => handleInputChange(pregunta.id, parseInt(value))} value={respuestas[pregunta.id]?.toString() ?? ''}></RadioInput>
              </>
            )}
            {pregunta.tipo === 'selec2' && (
              <>
                <div className='bg-white'>
                  <h3 className='mt-4 font-bold'>{pregunta.texto}</h3>
                  <RadioInput options={[{ text: 'IRAS', value: '1' }, { text: 'IVU', value: '2' }, { text: 'GEPI', value: '3' }]} onChange={(value) => handleInputChange(pregunta.id, parseInt(value))} value={respuestas[pregunta.id]?.toString() ?? ''}></RadioInput>
                </div>
              </>
            )}
            {pregunta.tipo === 'checkboxdualW' && (
              <>
                <div className='bg-white'>
                  <h3 className='font-semibold'>{pregunta.texto}</h3>
                  <RadioInput options={[{ text: 'Si', value: '1' }, { text: 'No', value: '0' }]} onChange={(value) => handleInputChange(pregunta.id, parseInt(value))} value={respuestas[pregunta.id]?.toString() ?? ''}></RadioInput>
                </div>
              </>
            )}
            {pregunta.tipo === 'selec3' && (
              <>
                <h3 className='mt-4 font-bold'>{pregunta.texto}</h3>
                <RadioInput options={[{ text: 'Niños sanos', value: '1' }, { text: 'Embarazo', value: '2' }]} onChange={(value) => handleInputChange(pregunta.id, parseInt(value))} value={respuestas[pregunta.id]?.toString() ?? ''}></RadioInput>
              </>
            )}

            {((pregunta.tipo === 'exp1d' && respuestas['expediente_01'] == 1) || (pregunta.tipo === 'exp1h' && respuestas['expediente_01'] == 2)) && (
              <>
                <h3 className='font-semibold'>{pregunta.texto}</h3>
                <RadioInput options={[{ text: 'Si', value: '1' }, { text: 'No', value: '0' }]} onChange={(value) => handleInputChange(pregunta.id, parseInt(value))} value={respuestas[pregunta.id]?.toString() ?? ''}></RadioInput>
              </>
            )}

            {((pregunta.tipo === 'exp1dTxtNum' && respuestas['expediente_01'] == 1) || (pregunta.tipo === 'exp1hTxtNum' && respuestas['expediente_01'] == 2)) && (
              <>
                <h3 className='font-semibold'>{pregunta.texto}</h3>
                <InputNum
                  title={pregunta.texto}
                  onValueChange={(value) => handleInputChange(pregunta.id, value)}
                  value={respuestas[pregunta.id] !== undefined ? parseInt(respuestas[pregunta.id] as string) : 0}
                  disabled={false}
                />
              </>
            )}
            {pregunta.tipo === 'checkboxdualIVU' && respuestas['expediente_02'] == 2 && (
              <>
                <div className='bg-white'>

                  <h3 className='font-semibold'>{pregunta.texto}</h3>
                  <RadioInput options={[{ text: 'Sintomas de IVU', value: '1' }, { text: 'Bacteriuria asintomática', value: '0' }]} onChange={(value) => handleInputChange(pregunta.id, parseInt(value))} value={respuestas[pregunta.id]?.toString() ?? ''}></RadioInput>
                </div>
              </>
            )}

            {((pregunta.tipo === 'exp2Ir' && respuestas['expediente_02'] == 1) || (pregunta.tipo === 'exp2Iv' && respuestas['expediente_02'] == 2) || (pregunta.tipo === 'exp2Ge' && respuestas['expediente_02'] == 3)) && (
              <>
                <div className='bg-white'>

                  <h3 className='font-semibold'>{pregunta.texto}</h3>
                  <RadioInput options={[{ text: 'Si', value: '1' }, { text: 'No', value: '0' }]} onChange={(value) => handleInputChange(pregunta.id, parseInt(value))} value={respuestas[pregunta.id]?.toString() ?? ''}></RadioInput>
                </div>
              </>
            )}
            {(pregunta.tipo === 'exp2IrTr' && respuestas['expediente_02'] == 1) && (
              <>
                <div className='bg-white'>

                  <h3 className='font-semibold'>{pregunta.texto}</h3>
                  <RadioInput options={[{ text: 'Si', value: '2' }, { text: 'Parcialmente', value: '1' }, { text: 'No', value: '0' }]} onChange={(value) => handleInputChange(pregunta.id, parseInt(value))} value={respuestas[pregunta.id]?.toString() ?? ''}></RadioInput>
                </div>
              </>
            )}
            {(pregunta.tipo === 'exp2IvTr' && respuestas['expediente_02'] == 2) && (
              <>
                <div className='bg-white'>

                  <h3 className='font-semibold'>{pregunta.texto}</h3>
                  <RadioInput options={[{ text: 'Si', value: '2' }, { text: 'Parcialmente', value: '1' }, { text: 'No', value: '0' }]} onChange={(value) => handleInputChange(pregunta.id, parseInt(value))} value={respuestas[pregunta.id]?.toString() ?? ''}></RadioInput>
                </div>
              </>
            )}
            {(pregunta.tipo === 'exp2GeTr' && respuestas['expediente_02'] == 2) && (
              <>
                <div className='bg-white'>

                  <h3 className='font-semibold'>{pregunta.texto}</h3>
                  <RadioInput options={[{ text: 'Si', value: '2' }, { text: 'Parcialmente', value: '1' }, { text: 'No', value: '0' }]} onChange={(value) => handleInputChange(pregunta.id, parseInt(value))} value={respuestas[pregunta.id]?.toString() ?? ''}></RadioInput>
                </div>
              </>
            )}
            {(pregunta.tipo === 'exp2IvEsp' && respuestas['expediente_02'] == 2) && (
              <>
                <div className='bg-white'>

                  <h3 className='font-semibold'>{pregunta.texto}</h3>
                  <RadioInput options={[{ text: 'Si', value: '1' }, { text: 'No', value: '0' }]} onChange={(value) => handleInputChange(pregunta.id, parseInt(value))} value={respuestas[pregunta.id]?.toString() ?? ''}></RadioInput>
                </div>
              </>
            )}
            {pregunta.tipo === 'opcional2' && respuestas['pregunta_118'] == 1 && respuestas['expediente_02'] == 1 && (
              <><div className='bg-white'>
                <h3 className='font-semibold'>{pregunta.texto}</h3>
                <RadioInput options={[{ text: 'Si', value: '1' }, { text: 'No', value: '0' }]} onChange={(value) => handleInputChange(pregunta.id, parseInt(value))} value={respuestas[pregunta.id]?.toString() ?? ''}></RadioInput>
              </div>
              </>
            )}
            {pregunta.tipo === 'opcional3' && respuestas['pregunta_124'] == 1 && respuestas['expediente_02'] == 2 && (
              <>
                <div className='bg-white'>
                  <h3 className='font-semibold'>{pregunta.texto}</h3>
                  <RadioInput options={[{ text: 'Si', value: '1' }, { text: 'No', value: '0' }]} onChange={(value) => handleInputChange(pregunta.id, parseInt(value))} value={respuestas[pregunta.id]?.toString() ?? ''}></RadioInput>
                </div>
              </>
            )}
            {pregunta.tipo === 'opcional4' && respuestas['pregunta_129'] == 1 && (
              <>
                <div className='bg-white'>
                  <h3 className='font-semibold'>{pregunta.texto}</h3>
                  <RadioInput options={[{ text: 'Si', value: '1' }, { text: 'No', value: '0' }]} onChange={(value) => handleInputChange(pregunta.id, parseInt(value))} value={respuestas[pregunta.id]?.toString() ?? ''}></RadioInput>
                </div>
              </>
            )}
            {pregunta.tipo === 'opcional4Tr' && respuestas['pregunta_129'] == 1 && (
              <>
                <div className='bg-white'>
                  <h3 className='font-semibold'>{pregunta.texto}</h3>
                  <RadioInput options={[{ text: 'Si', value: '2' }, { text: 'Parcialmente', value: '1' }, { text: 'No', value: '0' }]} onChange={(value) => handleInputChange(pregunta.id, parseInt(value))} value={respuestas[pregunta.id]?.toString() ?? ''}></RadioInput>
                </div>
              </>
            )}

            {pregunta.tipo === 'exp3EdTxt' && respuestas['expediente_03'] == 2 && (
              <>
                <h3 className='font-semibold'>{pregunta.texto}</h3>
                <input
                  type="text"
                  value={respuestas[pregunta.id]?.toString() ?? ''}
                  onChange={(e) => handleInputChange(pregunta.id, e.target.value)}
                  className="pl-2 block w-8/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </>
            )}
            {((pregunta.tipo === 'exp3N' && respuestas['expediente_03'] == 1) || (pregunta.tipo === 'exp3Ed' && respuestas['expediente_03'] == 2) || (pregunta.tipo === 'exp3Em' && respuestas['expediente_03'] == 2)) && (
              <>
                <h3 className='font-semibold'>{pregunta.texto}</h3>
                <RadioInput options={[{ text: 'Si', value: '1' }, { text: 'No', value: '0' }]} onChange={(value) => handleInputChange(pregunta.id, parseInt(value))} value={respuestas[pregunta.id]?.toString() ?? ''}></RadioInput>
              </>
            )}
            {((pregunta.tipo === 'exp3EmEsp' && respuestas['expediente_03'] == 2)) && respuestas['pregunta_142'] == 1 && (
              <>
                <h3 className='font-semibold'>{pregunta.texto}</h3>
                <RadioInput options={[{ text: 'Si', value: '1' }, { text: 'No', value: '0' }]} onChange={(value) => handleInputChange(pregunta.id, parseInt(value))} value={respuestas[pregunta.id]?.toString() ?? ''}></RadioInput>
              </>
            )}

          </div>
        ))}
        <div className='flex sm:mt-5'>

          {paso > 0 && isWideScreen && (
            <button onClick={retrocederPaso} className="mr-4 group relative h-7 w-16 overflow-hidden rounded-2xl bg-gray-900 text-sm font-bold text-white">
              Atrás
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>
          )}

          {/* <p>Página {paso + 1}</p> */}
          <form onSubmit={handleSubmit}>
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

            {paso == totalPasos - 1 && isWideScreen && (
              <button className='ml-4 group relative h-7 w-20 overflow-hidden rounded-2xl bg-blue-600 text-sm font-bold text-white' type='submit' >
                Enviar</button>
            )}

          </form>
          {paso < totalPasos - 1 && isWideScreen && (
            <button onClick={avanzarPaso} className="ml-4 group relative h-7 w-20 overflow-hidden rounded-2xl bg-gray-900 text-sm font-bold text-white">
              Siguiente
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>
          )}
          {(paso === totalPasos - 1 || paso === 0) && isWideScreen && (
            <button onClick={getCsv} className='ml-4 group relative h-7 w-20 overflow-hidden rounded-2xl bg-green-600 text-sm font-bold text-white'>
              CSV
            </button>
          )}

        </div>
        <div className='flex'>
          {paso > 0 && !isWideScreen && (
            <>
              <button onClick={retrocederPaso} className=" mr-8 h-7 w-16 overflow-hidden rounded-2xl bg-gray-900 text-sm font-bold text-white">
                Atrás
                <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
              </button>
            </>
          )}
          {paso == totalPasos - 1 && !isWideScreen && (
            <>
              <button className=' h-7 w-20 overflow-hidden rounded-2xl bg-blue-600 text-sm font-bold text-white' type='submit' >
                Enviar</button>
            </>
          )}
          {paso < totalPasos - 1 && !isWideScreen && (
            <button onClick={avanzarPaso} className="  h-7 w-20 overflow-hidden rounded-2xl bg-gray-900 text-sm font-bold text-white">
              Siguiente
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>
          )}
          {(paso === totalPasos - 1 || paso === 0) && !isWideScreen && (
            <button onClick={getCsv} className='ml-8  h-7 w-20 overflow-hidden rounded-2xl bg-green-600 text-sm font-bold text-white'>
              CSV
            </button>
          )}
        </div>
      </div>
    </div>
  );
};


export default Encuesta;
