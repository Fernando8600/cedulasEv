
import React, { useState, useEffect } from 'react';

interface InputVProps {
    title: string;
    onValueChange: (value: number) => void;
    value: number;
    disabled: boolean;
}

export default function InputNum({ title, onValueChange, value, disabled }: InputVProps) {

    const [errors, setErrors] = useState<boolean>(false);

    useEffect(() => {
        validateForm();
    }, [value]);

    const validateForm = () => {
        const parsedValue = Number(value);

        if (value === undefined || value === null) {
            setErrors(true);
        } else if (Number.isInteger(parsedValue) && parsedValue >= 0 && parsedValue <= 100) {
            setErrors(false);
        } else {
            setErrors(true);
        }
    };

    const handleValueChange = (newValue: string) => {
        if (/^\d*$/.test(newValue)) {
            const parsedValue = parseInt(newValue);
            if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 100) {
                onValueChange(parsedValue);
            } else if (newValue === '') {
                onValueChange(0);
            }
        }
    };

    return (
        <>
            <div>

                {disabled ? <>
                    <br />
                    <br />
                </> : null}
                <div className={disabled ? 'hidden' : 'relative h-10 min-w-[100px] w-40 md:my-3 sm:my-6 xs:mb-6 xs:my-2'}>
                    <input
                        className={errors ? "peer h-full w-full rounded-[7px] border border-red-500 border-t-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-red-500 placeholder-shown:border-t-red-500 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" : "peer h-full w-full rounded-[7px] border border-green-500 border-t-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-green-500 placeholder-shown:border-t-green-500 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"}
                        placeholder=" "
                        value={disabled ? '' : value}
                        onChange={(e) => handleValueChange(e.target.value)}
                        disabled={disabled}
                    />
                    {errors ? <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-red-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-red-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-red-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Error
                    </label> : <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-green-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-green-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-green-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Correcto
                    </label>}
                </div>
            </div>

            <link
                rel="stylesheet"
                href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
            />
        </>
    );
}