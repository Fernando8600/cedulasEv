'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RootLayout from '@/app/layout';
import { preguntasPorSeccion } from '../pages/preguntasPorSeccion';
import RadioInput from '@/components/RadioInput';

export interface Pregunta {
    id: string;
    texto: string;
    tipo: string;
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
    const [paso, setPaso] = useState(0);
    const totalPasos = preguntasPorSeccion.length;

    const handleInputChange = (id: string, value: string | number | undefined) => {
        const newRespuestas = { ...respuestas, [id]: value };
        setRespuestas(newRespuestas);
        localStorage.setItem('answers-encuesta-01', JSON.stringify(newRespuestas));
        console.log('Pregunta ' + id + ': ' + value);
    };

    const ChangeRespuestasState = (newRespuestas: Respuestas) => {
        setRespuestas(newRespuestas);
        localStorage.setItem('answers-encuesta-01', JSON.stringify(newRespuestas));
        console.log('Respuestas state has changed');
    };

    const valorTotal = preguntasPorSeccion.reduce((total, seccion) => {
        return total + seccion.preguntas.reduce((subtotal, pregunta) => subtotal + pregunta.ponderacion, 0);
    }, 0);

    const mostrarTotalPonderacion = () => {
        console.log('Total Ponderacion:', valorTotal);
    };

    const avanzarPaso = () => {
        setPaso(paso + 1);
    };

    const retrocederPaso = () => {
        setPaso(paso - 1);
    };
    
    const handleJurisdiccionChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const jurisdiccion = jurisdicciones.find(j => j.id === parseInt(e.target.value));
        if (jurisdiccion) {
            await fetchMuncipios(jurisdiccion.id);
        } else {
            setMunicipios([]);
        }
        setCentrosalud([]);
        const newRespuestas = { ...respuestas, jurisdiccion_id: jurisdiccion?.id, municipio_id: undefined, centro_salud_id: undefined };
        ChangeRespuestasState(newRespuestas);
    };

    const handleMunicipioChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const municipio = municipios.find(j => j.id === parseInt(e.target.value));
        if (municipio) {
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
            const response = await axios.post('http://localhost:8088/encuestas/store.php', respuestas);
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    const handleCentroSaludChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const centroSalud = centrosalud.find(j => j.id === parseInt(e.target.value));
        handleInputChange('centro_salud_id', centroSalud?.id);
    };

    const fetchMuncipios = async (jurisdiccion_id: number) => {
        try {
            const response = await axios.get(`http://localhost:8088/municipios/get-all.php?jurisdiccion_id=${jurisdiccion_id}`);
            setMunicipios(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchCentrosSalud = async (municipio_id: number) => {
        try {
            const response = await axios.get(`http://localhost:8088/centros-salud/get-all.php?municipio_id=${municipio_id}`);
            setCentrosalud(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        const fetchJurisdicciones = async () => {
            try {
                const response = await axios.get('http://localhost:8088/jurisdicciones/get-all.php');
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
    }, []);

    const gradeSurvey = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        let totalPonderacion = 0;

        Object.entries(respuestas).forEach(([preguntaId, respuesta]) => {
            const pregunta = preguntasPorSeccion.flatMap(seccion => seccion.preguntas).find(pregunta => pregunta.id === preguntaId);

            if (pregunta) {
                switch (pregunta.tipo) {
                    case 'texto':
                    case 'checkbox':
                        totalPonderacion += parseInt(respuesta?.toString() ?? '0') * (pregunta.ponderacion / 2);
                        break;
                    case 'checkboxdual':
                        totalPonderacion += parseInt(respuesta?.toString() ?? '0') * pregunta.ponderacion;
                        break;
                    case 'checkboxquint':
                        totalPonderacion += parseInt(respuesta?.toString() ?? '0') * (pregunta.ponderacion / 5);
                        break;
                    case 'checkboxquad':
                        totalPonderacion += parseInt(respuesta?.toString() ?? '0') * (pregunta.ponderacion / 4);
                        break;
                    case 'checkboxdualW':
                        totalPonderacion += parseInt(respuesta?.toString() ?? '0') * pregunta.ponderacion;
                        break;
                    case 'checkboxdualIVU':
                        totalPonderacion += parseInt(respuesta?.toString() ?? '0') * pregunta.ponderacion;
                        break;
                    case 'opcional':
                        if (respuestas['pregunta_20'] == 1 || respuestas['pregunta_20'] == 2) {
                            totalPonderacion += parseInt(respuesta?.toString() ?? '0') * pregunta.ponderacion;
                        }
                        break;
                    case 'opcional2':
                        if (respuestas['pregunta_118'] == 1) {
                            totalPonderacion += parseInt(respuesta?.toString() ?? '0') * pregunta.ponderacion;
                        } else if (respuestas['pregunta_118'] == 0) {
                            totalPonderacion += pregunta.ponderacion;
                        }
                        break;
                    case 'exp1d':
                        if (respuestas['expediente_01'] == 1) {
                            totalPonderacion += parseInt(respuesta?.toString() ?? '0') * pregunta.ponderacion;
                        }
                        break;
                    case 'exp1h':
                        if (respuestas['expediente_01'] == 2) {
                            totalPonderacion += parseInt(respuesta?.toString() ?? '0') * pregunta.ponderacion;
                        }
                        break;
                    case 'exp2Ir':
                        if (respuestas['expediente_02'] == 1) {
                            totalPonderacion += parseInt(respuesta?.toString() ?? '0') * pregunta.ponderacion;
                        }
                        break;
                    case 'exp2Iv':
                        if (respuestas['expediente_02'] == 2) {
                            totalPonderacion += parseInt(respuesta?.toString() ?? '0') * pregunta.ponderacion;
                        }
                        break;
                    case 'exp2IvEsp':
                        if (respuestas['expediente_02'] == 2 && (respuestas['pregunta_23'] == 0 || respuestas['pregunta_23'] == 1 || respuestas['pregunta_23'] == 2)) {
                            totalPonderacion += parseInt(respuesta?.toString() ?? '0') * pregunta.ponderacion;
                        }
                        break;
                    case 'exp2Id':
                        if (respuestas['expediente_02'] == 3) {
                            totalPonderacion += parseInt(respuesta?.toString() ?? '0') * pregunta.ponderacion;
                        }
                        break;
                    case 'exp2IdEsp':
                        if (respuestas['expediente_02'] == 3 && (respuestas['pregunta_23'] == 0 || respuestas['pregunta_23'] == 1 || respuestas['pregunta_23'] == 2)) {
                            totalPonderacion += parseInt(respuesta?.toString() ?? '0') * pregunta.ponderacion;
                        }
                        break;
                    case 'exp3':
                        if (respuestas['expediente_03'] == 1 || respuestas['expediente_03'] == 2 || respuestas['expediente_03'] == 3) {
                            totalPonderacion += parseInt(respuesta?.toString() ?? '0') * pregunta.ponderacion;
                        }
                        break;
                    default:
                        break;
                }
            }
        });

        alert(`El total de ponderación es: ${totalPonderacion}`);
    };

    return (
        <RootLayout>
            <form className="m-8 p-4 flex flex-col justify-center items-center">
                <div className="max-w-3xl w-full">
                    <h1 className="text-2xl font-bold mb-4">Encuesta de Calidad de Centros de Salud</h1>
                    {preguntasPorSeccion[paso]?.preguntas.map(pregunta => (
                        <div key={pregunta.id} className="mb-4">
                            <label className="block mb-2">{pregunta.texto}</label>
                            {pregunta.tipo === 'texto' && (
                                <input
                                    type="text"
                                    value={respuestas[pregunta.id] ?? ''}
                                    onChange={(e) => handleInputChange(pregunta.id, e.target.value)}
                                    className="border p-2 w-full"
                                />
                            )}
                            {pregunta.tipo === 'checkbox' && (
                                <input
                                    type="checkbox"
                                    checked={Boolean(respuestas[pregunta.id])}
                                    onChange={(e) => handleInputChange(pregunta.id, e.target.checked ? 1 : 0)}
                                    className="border p-2"
                                />
                            )}
                            {pregunta.tipo === 'radio' && (
                                <RadioInput
                                    value={respuestas[pregunta.id] ?? ''}
                                    onChange={(value) => handleInputChange(pregunta.id, value)}
                                    options={[{ value: '1', label: 'Sí' }, { value: '0', label: 'No' }]}
                                />
                            )}
                        </div>
                    ))}
                    <div className="flex justify-between mt-4">
                        {paso > 0 && <button type="button" onClick={retrocederPaso} className="bg-blue-500 text-white px-4 py-2 rounded">Anterior</button>}
                        {paso < totalPasos - 1 && <button type="button" onClick={avanzarPaso} className="bg-blue-500 text-white px-4 py-2 rounded">Siguiente</button>}
                        {paso === totalPasos - 1 && <button type="button" onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">Enviar</button>}
                    </div>
                    <button type="button" onClick={mostrarTotalPonderacion} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded">Mostrar Total Ponderación</button>
                </div>
            </form>
        </RootLayout>
    );
}

export default Encuesta;
