import React, { useState } from 'react';

export default function Datos() {
    const [datos, setDatos] = useState({
        Jurisdiccion_sanitaria: 'Querétaro',
        municipio: "Corregidora",
    });

    // Actualizar el valor de una clave
    const actualizarEdad = () => {
        setDatos((prevDiccionario) => ({
            ...prevDiccionario,
            edad: 31,
        }));
    };

    return (
        <div>
            <p>Nombre: {datos.Jurisdiccion_sanitaria}</p>
            <p>Edad: {datos.municipio}</p>
        </div>
    );
}