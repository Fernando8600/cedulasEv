 "use client";
import React, { useState } from 'react';

export default function Form2() {
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
        {showQuestions && selectedOption === 'jurisdiccion2'&&( // Mostrar preguntas adicionales solo si showQuestions es true
          <>
            <label htmlFor="municipioJ2_1" className="block text-sm font-medium leading-6 text-gray-900">
              Selecciona el Municipio
            </label>
            <div className="">
              <select
                id="municipioJ2_1"
                name="municipioJ2_1"
                className="h-full rounded border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                onChange={handleChange}
              >
                <option value="municipioJ2_11">Amealco de Bonfil</option>
                <option value="municipioJ2_12">Colón</option>
                <option value="municipioJ2_13">Pedro Escobedo</option>
                <option value="municipioJ2_14">San Juan Río</option>
                <option value="municipioJ2_15">Tequisquiapan</option>
              </select>
            </div>
            </>
        )}
          {showQuestions && selectedOption === 'municipioJ2_11'&&( // Mostrar preguntas adicionales solo si showQuestions es true
                    <>
                      <label htmlFor="centrosaludJ2_1" className="block text-sm font-medium leading-6 text-gray-900">
                        Selecciona un Centro de Salud
                      </label>
                      <div className="">
                        <select
                          id="centrosaludJ2_1"
                          name="centrosaludJ2_1"
                          className="h-full rounded border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        >
                          <option value="centrosaludJ2_11">QTSSA003451; CESSA AMEALCO</option>
                          <option value="centrosaludJ2_12">QTSSA000183; CHITEJE DE GARABATO</option>
                          <option value="centrosaludJ2_13">QTSSA000060; DONICA</option>
                          <option value="centrosaludJ2_14">QTSSA000055; EL ATORON</option>
                          <option value="centrosaludJ2_15">QTSSA000171; EL BOTHE</option>
                          <option value="centrosaludJ2_16">QTSSA002674; EL LINDERO</option>
                          <option value="centrosaludJ2_17">QTSSA000101; EL RINCÓN</option>
                          <option value="centrosaludJ2_18">QTSSA000072; GALINDILLO</option>
                          <option value="centrosaludJ2_19">QTSSA000096; LA PIEDAD</option>
                          <option value="centrosaludJ2_110">QTSSA000166; LA TORRE</option>
                          <option value="centrosaludJ2_111">QTSSA003631; SAN IDELFONSO</option>
                          <option value="centrosaludJ2_112">QTSSA000125; SAN JOSÉ ITHO</option>
                          <option value="centrosaludJ2_113">QTSSA012812; SAN MIGUEL TLAXCALTEPEC</option>
                          <option value="centrosaludJ2_114">QTSSA000130; SAN PEDRO TENANGO</option>
                          <option value="centrosaludJ2_115">QTSSA000142; SANTIAGO MEXQUITITLAN</option>
                          <option value="centrosaludJ2_116">QTSSA012614; SANTIAGO MEXQUITITLÁN BARRIO 5TO.</option>
                        </select>
                      </div>
                      </>
                  )}
          {showQuestions && selectedOption === 'municipioJ2_12'&&( // Mostrar preguntas adicionales solo si showQuestions es true
                    <>
                      <label htmlFor="centrosaludJ2_2" className="block text-sm font-medium leading-6 text-gray-900">
                        Selecciona un Centro de Salud
                      </label>
                      <div className="">
                        <select
                          id="centrosaludJ2_2"
                          name="centrosaludJ2_2"
                          className="h-full rounded border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        >
                          <option value="centrosaludJ2_21">QTSSA002580; AJUCHITLAN</option>
                          <option value="centrosaludJ2_22">QTSSA002732; COLON</option>
                          <option value="centrosaludJ2_23">QTSSA00726; EL BLANCO</option>
                          <option value="centrosaludJ2_24">QTSSA000784; EL ZAMORANO</option>
                          <option value="centrosaludJ2_25">QTSSA000731; GALERAS</option>
                          <option value="centrosaludJ2_26">QTSSA002650; LA PEÑUELA</option>
                          <option value="centrosaludJ2_27">QTSSA003613; PEÑA COLORADA</option>
                          <option value="centrosaludJ2_28">QTSSA000796; PUERTO DEL COYOTE</option>
                          <option value="centrosaludJ2_29">QTSSA000772; SANTA ROSA DE LIMA</option>
                        </select>
                      </div>
                      </>
                  )}
          {showQuestions && selectedOption === 'municipioJ2_13'&&( // Mostrar preguntas adicionales solo si showQuestions es true
                    <>
                      <label htmlFor="centrosaludJ2_3" className="block text-sm font-medium leading-6 text-gray-900">
                        Selecciona un Centro de Salud
                      </label>
                      <div className="">
                        <select
                          id="centrosaludJ2_3"
                          name="centrosaludJ2_3"
                          className="h-full rounded border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        >
                          <option value="centrosaludJ2_31">QTSSA001542; EL SAUZ</option>
                          <option value="centrosaludJ2_32">QTSSA001460; EPIGMENIO GONZÁLEZ</option>
                          <option value="centrosaludJ2_33">QTSSA001484; ESCOLASTICAS</option>
                          <option value="centrosaludJ2_34">QTSSA001472; LA D</option>
                          <option value="centrosaludJ2_35">QTSSA001496; LA LIRA</option>
                          <option value="centrosaludJ2_36">QTSSA001501; LA PALMA</option>
                          <option value="centrosaludJ2_37">QTSSA001554; LA VENTA</option>
                          <option value="centrosaludJ2_38">QTSSA001443; PEDRO ESCOBEDO</option>
                          <option value="centrosaludJ2_39">QTSSA001513; SAN CIRILO</option>
                          <option value="centrosaludJ2_310">QTSSA001525; SAN CLEMENTE</option>
                          <option value="centrosaludJ2_311">QTSSA003622; SAN FANDILA</option>
                        </select>
                      </div>
                      </>
                  )}
          {showQuestions && selectedOption === 'municipioJ2_14'&&( // Mostrar preguntas adicionales solo si showQuestions es true
                    <>
                      <label htmlFor="centrosaludJ2_4" className="block text-sm font-medium leading-6 text-gray-900">
                        Selecciona un Centro de Salud
                      </label>
                      <div className="">
                        <select
                          id="centrosaludJ2_4"
                          name="centrosaludJ2_4"
                          className="h-full rounded border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        >
                          <option value="centrosaludJ2_41">QTSSA002761; CENTRO DE SALUD ARCILA</option>
                          <option value="centrosaludJ2_42">QTSSA002551; CENTRO DE SALUD ORIENTE</option>
                          <option value="centrosaludJ2_43">QTSSA002160; CENTRO DE SALUD URBANO SAN JUAN DEL RÍO</option>
                          <option value="centrosaludJ2_44">QTSSA002184;  EL CAZADERO</option>
                          <option value="centrosaludJ2_45">QTSSA002312; EL SITIO</option>
                          <option value="centrosaludJ2_46">QTSSA002691; LA ESTANCIA</option>
                          <option value="centrosaludJ2_47">QTSSA002213; LA LLAVE</option>
                          <option value="centrosaludJ2_48">QTSSA002686; LA VALLA</option>
                          <option value="centrosaludJ2_49">QTSSA002225; ORGANAL</option>
                          <option value="centrosaludJ2_410">QTSSA002242; PASO DE MATA</option>
                          <option value="centrosaludJ2_411">QTSSA002196; SAN JOSÉ GALINDO</option>
                          <option value="centrosaludJ2_412">QTSSA002266; SAN MIGUEL GALINDO</option>
                          <option value="centrosaludJ2_413">QTSSA002336; SAN SEBASTIAN DE LA BARRANCAS</option>
                          <option value="centrosaludJ2_414">QTSSA002271; SANTA BÁRBARA DE LA CUEVA</option>
                          <option value="centrosaludJ2_415">QTSSA002283; SANTA LUCIA</option>
                          <option value="centrosaludJ2_416">QTSSA002300; SANTA ROSA XAJAY</option>
                          <option value="centrosaludJ2_417">QTSSA002230; SENEGAL DE LAS PALOMAS</option>
                        </select>
                      </div>
                      </>
                  )}
          {showQuestions && selectedOption === 'municipioJ2_15'&&( // Mostrar preguntas adicionales solo si showQuestions es true
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
                          <option value="centrosaludJ2_51">QTSSA002411; EL TEJOCOTE</option>
                          <option value="centrosaludJ2_52">QTSSA002394; FUENTEZUELAS</option>
                          <option value="centrosaludJ2_53">QTSSA002382; LA FUENTE</option>
                          <option value="centrosaludJ2_54">QTSSA002370; LOS CERRITOS</option>
                          <option value="centrosaludJ2_55">QTSSA002592; SAN NICOLAS</option>
                          <option value="centrosaludJ2_56">QTSSA002353; TEQUISQUIAPAN</option>
                        </select>
                      </div>
                      </>
                  )}
                  
      </form>
   </div>
  );
}