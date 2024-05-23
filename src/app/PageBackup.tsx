"use client";
import React, { useState } from 'react';
import Slider from '@/components/Slider';
import RootLayout from './RootLayout';
import { Range } from 'react-range';
import Checkboxes from '@/components/Checkboxes';
import InputTxt from '@/components/InputTxt';
import InputValidation from '@/components/InputValidation';


export default function Form() {
    const [selectedJurisdiccion, setSelectedJurisdiccion] = useState('');
    const [selectedMunicipio, setSelectedMunicipio] = useState('');
    const [showMunicipios, setShowMunicipios] = useState(false);
    const [showCentrosSalud, setShowCentrosSalud] = useState(false);
    const [showSlider, setSlider] = useState(false);
    const [valorSlider1, setValorSlider1] = useState(0);
    const [valorSlider2, setValorSlider2] = useState(0);
    const [validationChange, setValidationChange] = useState(0);
    const [validationChange2, setValidationChange2] = useState(0);

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

    const handleSliderChange1 = (value: number) => {
        setValorSlider1(value);
    };
    const handleSliderChange2 = (value: number) => {
        setValorSlider2(value);
    };
    const handleValidationChange = (value: number) => {
        setValidationChange(value);
    };
    const handleValidationChange2 = (value: number) => {
        setValidationChange2(value);
    };

    return (
        <RootLayout>

            <div className=" font-general-regular text-left bg-gray-100 p-10 pb-32 ">

                <h1 className=" ml-20 sm:text-3xl mb-1 text-ternary-dark font-semibold">Cedula Evaluaciones</h1>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="jurisdiccion" className="ml-20 block text-sm  leading-6 text-gray-900 font-medium">
                        Selecciona una Jurisdicción Sanitaria
                    </label>
                    <div className="">
                        <select
                            id="jurisdiccion"
                            name="jurisdiccion"
                            className="ml-20 full rounded border-0 py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            onChange={handleJurisdiccionChange}
                        >
                            <option value="" >Selecciona una Jurisdicción...</option>
                            <option value="jurisdiccion1">Jurisdicción Sanitaria 1 (Querétaro)</option>
                            <option value="jurisdiccion2">Jurisdicción Sanitaria 2 (San Juan del Río)</option>
                            <option value="jurisdiccion3">Jurisdicción Sanitaria 3 (Cadereyta de Montes)</option>
                            <option value="jurisdiccion4">Jurisdicción Sanitaria 4 (Jalpan de Serra)</option>
                        </select>
                    </div>

                    {showMunicipios && (
                        <div>
                            <label htmlFor="municipio" className="ml-20 block text-sm font-medium leading-6 text-gray-900">
                                Selecciona el Municipio
                            </label>
                            <div className="">
                                <select
                                    id="municipio"
                                    name="municipio"
                                    className="ml-20 h-full rounded border-0 py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                    onChange={handleMunicipioChange}
                                >
                                    <option value="">Selecciona un Municipio...</option>
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
                            <label htmlFor="centroSalud" className="ml-20 block text-sm font-medium leading-6 text-gray-900">
                                Selecciona Centro de Salud
                            </label>
                            <div className="">
                                <select
                                    id="centroSalud"
                                    name="centroSalud"
                                    className="ml-20 h-full rounded border-0 py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
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

                    {(showMunicipios || showCentrosSalud) && (
                        <button type="submit" className='ml-20 ' >Siguiente</button>
                    )}
                </form>
                <div className='ml-20 mr-60'>
                    <br></br>
                    <InputValidation max={25} title="¿Cual es el numero de doctores?" onValueChange={handleValidationChange}></InputValidation>
                    {/* <p>Valor del input es: {validationChange}</p> */}
                    <br></br>
                    <InputValidation max={50} title="¿Cual es el numero de doctores que están activos?" onValueChange={handleValidationChange2}></InputValidation>
                    {/* <p>Valor del input es: {validationChange}</p> */}
                    <br></br>
                    <Slider max={10} title="¿Cuál es el número de doctores?" onValueChange={handleSliderChange1}></Slider>
                    {/* <p>Valor del slider es: {valorSlider1}</p> */}
                    <br></br>
                    <Slider max={40} title="¿Cuál es el número de enfermeros?" onValueChange={handleSliderChange2}></Slider>
                    {/* <p>Valor del slider es: {valorSlider2}</p> */}
                    <br></br>

                    <label htmlFor="uniforme" className="block text-sm font-medium leading-6 text-gray-900">
                        ¿Se portó el uniforme completo?
                    </label>
                    <Checkboxes></Checkboxes>
                </div>
                <div className='ml-20 mr-60'>
                    <InputTxt></InputTxt>
                </div>
            </div>
        </RootLayout >
    );
}
