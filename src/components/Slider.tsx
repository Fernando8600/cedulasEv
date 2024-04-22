import React, { useState } from 'react';
import { Range } from 'react-range';

interface SliderProps {
    max: number;
    title: string;
    onValueChange: (value: number) => void;
}

export default function Slider({ max, title, onValueChange }: SliderProps) {
    const [value, setValue] = useState(0);

    const handleValueChange = (newValue: number) => {
        setValue(newValue);
        onValueChange(newValue);
    };

    return (
        <div className="mr-5 font-general-regular text-left">
            <label htmlFor={title} className="block text-sm font-medium leading-6 text-gray-900">
                {title}: {value}
            </label>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <Range
                    step={1}
                    min={0}
                    max={max} // Aquí utilizamos el valor máximo recibido como prop
                    values={[value]}
                    onChange={(values) => handleValueChange(values[0])}
                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '6px',
                                width: '100%',
                                backgroundColor: '#ccc',
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '16px',
                                width: '16px',
                                backgroundColor: '#007bff',
                                borderRadius: '50%',
                                outline: 'none',
                            }}
                        />
                    )}
                />
            </div>
        </div>
    );
}