import React from "react";

interface RadioInputProps {

    options: RadioInputOption[];
    onChange: (value: string) => void;
    value: string;

}
interface RadioInputOption {
    text: string;
    value: string;
}


function RadioInputDisabled({ options, onChange, value }: RadioInputProps) {
    return (
        <div className="space-x-4">
            {
                options.map((option, index) => (
                    <label key={index}>
                        <input className="mr-2 mt-2 mb-5 pointer-events-none bg-gray-100" onChange={(e) => onChange(e.target.value)} checked={value === option.value} value={option.value} type="radio" />
                        {option.text}
                    </label>
                ))
            }

        </div>

    );
}
export default RadioInputDisabled;