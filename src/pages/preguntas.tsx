import { useState, useEffect } from 'react';

interface Pregunta {
    id: number;
    pregunta: string;
}

function Preguntas() {
    const [preguntas, setPreguntas] = useState<Pregunta[]>([]);

    useEffect(() => {
        fetch('/api/preguntas')
            .then(res => res.json())
            .then((data: Pregunta[]) => setPreguntas(data))
            .catch(error => console.error('Error fetching preguntas:', error));
    }, []);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const respuestas = preguntas.map(pregunta => ({
            id_pregunta: pregunta.id,
            respuesta: (document.getElementById(respuesta - ${ pregunta.id }) as HTMLInputElement).value
        }));

        try {
            const response = await fetch('/api/guardar-respuestas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(respuestas)
            });
            if (response.ok) {
                console.log('Respuestas guardadas exitosamente');
            } else {
                console.error('Error al guardar respuestas:', response.statusText);
            }
        } catch (error) {
            console.error('Error al enviar respuestas:', error);
        }
    }

    return (
        <div>
            <h1>Preguntas</h1>
            <form onSubmit={handleSubmit}>
                {preguntas.map(pregunta => (
          <div key={pregunta.id}>
            <label htmlFor={respuesta-${pregunta.id}}>{pregunta.pregunta}</label>
            <input type="text" id={respuesta-${pregunta.id}} />
        </div>
    ))
}
<button type="submit">Enviar respuestas</button>
      </form >
    </div >
  );
}

export default Preguntas;