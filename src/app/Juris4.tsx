"use client";
import React, { useState } from 'react';

export default function Form3() {
    const [selectedOption, setSelectedOption] = useState('react');
    const [showQuestions, setShowQuestions] = useState(false); // Estado para controlar la visibilidad de las preguntas adicionales

    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedOption(e.target.value);
        setShowQuestions(true); // Mostrar preguntas adicionales cuando se selecciona una opción
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Opción seleccionada: ', selectedOption);
    };

    return (
        <div className="m-4 mr-5 font-general-regular text-left">
            <form onSubmit={handleSubmit}>
                <label htmlFor="jurisdiccion" className="block text-sm font-medium leading-6 text-gray-900">
                    Selecciona una Jurisdicción Sanitaria
                </label>
                <div className="">
                    <select
                        id="jurisdiccion"
                        name="jurisdiccion"
                        className="h-full rounded border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        onChange={handleChange}
                    >
                        <option value="jurisdiccion0"> Seleccione una Opcion (--)</option>
                        <option value="jurisdiccion1">Jurisdicción Sanitaria 1 (Querétaro)</option>
                        <option value="jurisdiccion2">Jurisdicción Sanitaria 2 (San Juan del Río)</option>
                        <option value="jurisdiccion3">Jurisdicción Sanitaria 3 (Cadereyta de Montes)</option>
                        <option value="jurisdiccion4">Jurisdicción Sanitaria 4 (Jalpan de Serra)</option>
                    </select>
                </div>
                {showQuestions && selectedOption === 'jurisdiccion4' && ( // Mostrar preguntas adicionales solo si showQuestions es true
                    <>
                        <label htmlFor="municipioJ4_1" className="block text-sm font-medium leading-6 text-gray-900">
                            Selecciona el Municipio
                        </label>
                        <div className="">
                            <select
                                id="municipioJ4_1"
                                name="municipioJ4_1"
                                className="h-full rounded border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                onChange={handleChange}
                            >
                                <option value="municipioJ4_11">Arroyo Seco</option>
                                <option value="municipioJ4_12">Jalpan de Serra</option>
                                <option value="municipioJ4_13">Landa de Matamoros</option>
                                <option value="municipioJ4_14">Pinal de Amoles</option>
                            </select>
                        </div>
                    </>
                )}
                {showQuestions && selectedOption === 'municipioJ4_11' && ( // Mostrar preguntas adicionales solo si showQuestions es true
                    <>
                        <label htmlFor="centrosaludJ4_1" className="block text-sm font-medium leading-6 text-gray-900">
                            Selecciona un Centro de Salud
                        </label>
                        <div className="">
                            <select
                                id="centrosaludJ4_1"
                                name="centrosaludJ4_1"
                                className="h-full rounded border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            >
                                <option value="centrosaludJ4_11">QTSSA000364; ARROYO SECO</option>
                                <option value="centrosaludJ4_12">QTSSA012836; CONCÁ</option>
                                <option value="centrosaludJ4_13">QTSSA002633; EL REFUGIO</option>
                                <option value="centrosaludJ4_14">QTSSA000405; LA FLORIDA</option>
                                <option value="centrosaludJ4_15">QTSSA012841; PURÍSIMA DE ARISTA</option>
                                <option value="centrosaludJ4_16">QTSSA003460; SAN JUAN BUENAVENTURA</option>
                                <option value="centrosaludJ4_17">QTSSA000463; SANTA MARÍA DE LOS COCOS</option>
                            </select>
                        </div>
                    </>
                )}
                {showQuestions && selectedOption === 'municipioJ4_12' && ( // Mostrar preguntas adicionales solo si showQuestions es true
                    <>
                        <label htmlFor="centrosaludJ4_2" className="block text-sm font-medium leading-6 text-gray-900">
                            Selecciona un Centro de Salud
                        </label>
                        <div className="">
                            <select
                                id="centrosaludJ4_2"
                                name="centrosaludJ4_2"
                                className="h-full rounded border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            >
                                <option value="centrosaludJ4_21">QTSSA001093; BARREALES</option>
                                <option value="centrosaludJ4_22">QTSSA001122; EL SAUCILLO</option>
                                <option value="centrosaludJ4_23">QTSSA001064; JALPAN URBANO 1</option>
                                <option value="centrosaludJ4_24">QTSSA002546; JALPAN URBANO 2</option>
                                <option value="centrosaludJ4_25">QTSSA001105; LAGUNA DE PITZQUINTLA</option>
                                <option value="centrosaludJ4_26">QTSSA001134; TANCAMA</option>
                                <option value="centrosaludJ4_27">QTSSA001146; TANCOYOL</option>
                                <option value="centrosaludJ4_28">QTSSA001110; VALLE VERDE</option>
                                <option value="centrosaludJ4_29">QTSSA001163; ZOYAPILCA</option>
                            </select>
                        </div>
                    </>
                )}
                {showQuestions && selectedOption === 'municipioJ4_13' && ( // Mostrar preguntas adicionales solo si showQuestions es true
                    <>
                        <label htmlFor="centrosaludJ4_3" className="block text-sm font-medium leading-6 text-gray-900">
                            Selecciona un Centro de Salud
                        </label>
                        <div className="">
                            <select
                                id="centrosaludJ4_3"
                                name="centrosaludJ4_3"
                                className="h-full rounded border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            >
                                <option value="centrosaludJ4_31">QTSSA001192; ACATITLÁN DE ZARAGOZA</option>
                                <option value="centrosaludJ4_32">QTSSA001204; AGUA ZARCA</option>
                                <option value="centrosaludJ4_33">QTSSA001233; EL LOBO</option>
                                <option value="centrosaludJ4_34">QTSSA001221; LA LAGUNITA</option>
                                <option value="centrosaludJ4_35">QTSSA012991; LANDA DE MATAMOROS</option>
                                <option value="centrosaludJ4_36">QTSSA013000; NEBLINAS</option>
                                <option value="centrosaludJ4_37">QTSSA001250; RÍO VERDITO</option>
                                <option value="centrosaludJ4_38">QTSSA001274; SANTA INES</option>
                                <option value="centrosaludJ4_39">QTSSA001286; TILACO</option>
                                <option value="centrosaludJ4_310">QTSSA001303; VALLE DE GUADALUPE</option>
                            </select>
                        </div>
                    </>
                )}
                {showQuestions && selectedOption === 'municipioJ4_14' && ( // Mostrar preguntas adicionales solo si showQuestions es true
                    <>
                        <label htmlFor="centrosaludJ4_4" className="block text-sm font-medium leading-6 text-gray-900">
                            Selecciona un Centro de Salud
                        </label>
                        <div className="">
                            <select
                                id="centrosaludJ4_4"
                                name="centrosaludJ4_4"
                                className="h-full rounded border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            >
                                <option value="centrosaludJ4_41">QTSSA000212; AHUACATLÁN DE GUADALUPE</option>
                                <option value="centrosaludJ4_42">QTSSA000236; BUCARELI</option>
                                <option value="centrosaludJ4_43">QTSSA000253; DERRAMADERO DE JUÁREZ</option>
                                <option value="centrosaludJ4_44">QTSSA000352; MADROÑO</option>
                                <option value="centrosaludJ4_45">QTSSA012824; PINAL DE AMOLES</option>
                                <option value="centrosaludJ4_46">QTSSA000282; SAN GASPAR</option>
                                <option value="centrosaludJ4_47">QTSSA002645; SAN PEDRO EL VIEJO</option>
                                <option value="centrosaludJ4_48">QTSSA000311; SAN PEDRO ESCANELA</option>
                                <option value="centrosaludJ4_49">QTSSA000323; SANTA AGUEDA</option>
                            </select>
                        </div>
                    </>
                )}

            </form>
        </div>
    );
}