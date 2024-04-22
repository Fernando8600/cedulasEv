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
        {showQuestions && selectedOption === 'jurisdiccion3'&&( // Mostrar preguntas adicionales solo si showQuestions es true
          <>
            <label htmlFor="municipioJ3_1" className="block text-sm font-medium leading-6 text-gray-900">
              Selecciona el Municipio
            </label>
            <div className="">
              <select
                id="municipioJ3_1"
                name="municipioJ3_1"
                className="h-full rounded border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                onChange={handleChange}
              >
                <option value="municipioJ3_11">Cadereyta de Montes</option>
                <option value="municipioJ3_12">Ezequiel Montes</option>
                <option value="municipioJ3_13">Pedro Escobedo</option>
                <option value="municipioJ3_14">Peñamiller</option>
                <option value="municipioJ3_15">San Joaquín</option>
                <option value="municipioJ3_16">Tolimán</option>
              </select>
            </div>
            </>
        )}
          {showQuestions && selectedOption === 'municipioJ3_11'&&( // Mostrar preguntas adicionales solo si showQuestions es true
                    <>
                      <label htmlFor="centrosaludJ3_1" className="block text-sm font-medium leading-6 text-gray-900">
                        Selecciona un Centro de Salud
                      </label>
                      <div className="">
                        <select
                          id="centrosaludJ3_1"
                          name="centrosaludJ3_1"
                          className="h-full rounded border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        >
                          <option value="centrosaludJ3_11">QTSSA000480; CADEREYTA</option>
                          <option value="centrosaludJ3_12">QTSSA003655; CENTRO DE SALUD EL PALMAR</option>
                          <option value="centrosaludJ3_13">QTSSA000533; CHAVARRIAS</option>
                          <option value="centrosaludJ3_14">QTSSA000521; CORRAL BLANCO</option>
                          <option value="centrosaludJ3_15">QTSSA002616; EL AGUACATE</option>
                          <option value="centrosaludJ3_16">QTSSA000545; EL DOCTOR</option>
                          <option value="centrosaludJ3_17">QTSSA000562; HIGUERILLAS</option>
                          <option value="centrosaludJ3_18">QTSSA000550; LA ESPERANZA</option>
                          <option value="centrosaludJ3_19">QTSSA000632; LA TINAJA</option>
                          <option value="centrosaludJ3_110">QTSSA000574; LOS JUÁREZ</option>
                          <option value="centrosaludJ3_111">QTSSA003724; MACONI</option>
                          <option value="centrosaludJ3_112">QTSSA000591; OCOTITLAN</option>
                          <option value="centrosaludJ3_113">QTSSA002575; PATHE</option>
                          <option value="centrosaludJ3_114">QTSSA000673; RANCHO NUEVO</option>
                          <option value="centrosaludJ3_115">QTSSA000620; SOMBRERETE</option>
                          <option value="centrosaludJ3_116">QTSSA000644; TZIQUIA</option>
                          <option value="centrosaludJ3_117">QTSSA000656; VIZARRON</option>
                        </select>
                      </div>
                      </>
                  )}
          {showQuestions && selectedOption === 'municipioJ3_12'&&( // Mostrar preguntas adicionales solo si showQuestions es true
                    <>
                      <label htmlFor="centrosaludJ3_2" className="block text-sm font-medium leading-6 text-gray-900">
                        Selecciona un Centro de Salud
                      </label>
                      <div className="">
                        <select
                          id="centrosaludJ3_2"
                          name="centrosaludJ3_2"
                          className="h-full rounded border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        >
                          <option value="centrosaludJ3_21">QTSSA000912; BERNAL</option>
                          <option value="centrosaludJ3_22">QTSSA003691; CENTRO DE SALUD VILLA PROGRESO</option>
                          <option value="centrosaludJ3_23">QTSSA002563; EL CIERVO</option>
                          <option value="centrosaludJ3_24">QTSSA000895; EZEQUIEL MONTES</option>
                          <option value="centrosaludJ3_25">QTSSA000936; LAS ROSAS</option>
                        </select>
                      </div>
                      </>
                  )}
          {showQuestions && selectedOption === 'municipioJ3_13'&&( // Mostrar preguntas adicionales solo si showQuestions es true
                    <>
                      <label htmlFor="centrosaludJ3_3" className="block text-sm font-medium leading-6 text-gray-900">
                        Selecciona un Centro de Salud
                      </label>
                      <div className="">
                        <select
                          id="centrosaludJ3_3"
                          name="centrosaludJ3_3"
                          className="h-full rounded border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        >
                          <option value="centrosaludJ3_31">QTSSA002720; AGUA FRIA</option>
                          <option value="centrosaludJ3_32">QTSSA001595; CAMARGO</option>
                          <option value="centrosaludJ3_33">QTSSA003673; CENTRO DE SALUD PEÑA BLANCA</option>
                          <option value="centrosaludJ3_34">QTSSA003682; CENTRO DE SALUD VILLA EMILIANO ZAPATA</option>
                          <option value="centrosaludJ3_35">QTSSA001612; EL FRONTONCILLO</option>
                          <option value="centrosaludJ3_36">QTSSA001665; EL PORTUGUES</option>
                          <option value="centrosaludJ3_37">QTSSA001624; LA HIGUERA</option>
                          <option value="centrosaludJ3_38">QTSSA001600; LOS ENCINOS</option>
                          <option value="centrosaludJ3_39">QTSSA001636; MOLINITOS</option>
                          <option value="centrosaludJ3_310">QTSSA001566; PEÑAMILLER</option>
                          <option value="centrosaludJ3_311">QTSSA001653; PLAZUELA</option>
                          <option value="centrosaludJ3_312">QTSSA001682; RÍO BLANCO</option>
                          <option value="centrosaludJ3_313">QTSSA001694; SAN JUANICO</option>
                          <option value="centrosaludJ3_314">QTSSA001706; SAN MIGUEL PALMAS</option>
                        </select>
                      </div>
                      </>
                  )}
          {showQuestions && selectedOption === 'municipioJ3_14'&&( // Mostrar preguntas adicionales solo si showQuestions es true
                    <>
                      <label htmlFor="centrosaludJ3_4" className="block text-sm font-medium leading-6 text-gray-900">
                        Selecciona un Centro de Salud
                      </label>
                      <div className="">
                        <select
                          id="centrosaludJ3_4"
                          name="centrosaludJ3_4"
                          className="h-full rounded border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        >
                          <option value="centrosaludJ3_41">QTSSA002061; EL APARTADERO</option>
                          <option value="centrosaludJ3_42">QTSSA002090; MARAVILLAS</option>
                          <option value="centrosaludJ3_43">QTSSA002102; SAN CRISTÓBAL</option>
                          <option value="centrosaludJ3_44">QTSSA002044; SAN JOAQUÍN</option>
                          <option value="centrosaludJ3_45">QTSSA002114; SANTA  MARÍA ALAMOS</option>
                          <option value="centrosaludJ3_46">QTSSA002085; SANTIAGO AZOGUEZ</option>
                        </select>
                      </div>
                      </>
                  )}
          {showQuestions && selectedOption === 'municipioJ3_15'&&( // Mostrar preguntas adicionales solo si showQuestions es true
                    <>
                      <label htmlFor="centrosaludJ2_5" className="block text-sm font-medium leading-6 text-gray-900">
                        Selecciona un Centro de Salud
                      </label>
                      <div className="">
                        <select
                          id="centrosaludJ2_5"
                          name="centrosaludJ2_5"
                          className="h-full rounded border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        >
                          <option value="centrosaludJ3_51">QTSSA002452; CARRIZALILLO</option>
                          <option value="centrosaludJ3_52">QTSSA002662; CASA BLANCA</option>
                          <option value="centrosaludJ3_53">QTSSA002476; CASAS VIEJAS</option>
                          <option value="centrosaludJ3_54">QTSSA003664; CENTRO DE SALUD SAN PABLO</option>
                          <option value="centrosaludJ3_55">QTSSA002481; PANALES</option>
                          <option value="centrosaludJ3_56">QTSSA002493; SAN MIGUEL</option>
                          <option value="centrosaludJ3_57">QTSSA012911; TOLIMÁN</option>
                        </select>
                      </div>
                      </>
                  )}
                  
      </form>
   </div>
  );
}