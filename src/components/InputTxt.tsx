import React, { useState } from 'react';
interface InputVProps {
    event: any;
    title: string;
    onValueChange: (value: number) => void;
}

const Opinion = () => {
    const [opinion, setOpinion] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleOpinionChange = (event: { target: { value: any; }; }) => {
        const newOpinion = event.target.value;
        setOpinion(newOpinion);

        if (newOpinion.length > 200) {
            setFeedback('El texto debe contener máximo 200 caracteres');
        } else {
            setFeedback('');
        }
    };

    return (
        <div className="col-span-full">
            <label className="text-left block text-sm font-medium leading-6 text-gray-900">Otros comentarios</label>
            <textarea
                className="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={opinion}
                onChange={handleOpinionChange}
                placeholder="Escribe aqui..."
            />

            {feedback && (
                <div className={`mt-2 text-${feedback === '' ? 'green' : 'red'}-500`}>
                    {feedback}
                </div>
            )}
        </div>
    );
};

export default Opinion;
