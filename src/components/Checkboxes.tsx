import React, { useState } from 'react';

interface CheckboxProps {
  id: string;
  value: number;
  label: string;
  checked: boolean;
  onChange: (value: number) => void;
}

function Checkbox({ id, value, label, checked, onChange }: CheckboxProps) {
  return (
    <div className="inline-flex items-center">
      <label
        className="relative flex  items-center rounded-full p-3"
        htmlFor={id}
      >
        <input
          id={id}
          type="checkbox"
          className={`before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none bg-white rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-indigo-600 checked:bg-indigo-600 checked:before:bg-indigo-600 hover:before:opacity-10 ${checked ? 'peer-checked:checked' : ''
            }`}
          checked={checked}
          onChange={() => onChange(value)}
        />
        <div
          className={`pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity ${checked ? 'peer-checked:opacity-100' : ''
            }`}
        >
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </div>
      </label>
      <span className="mt-px  select-none font-medium text-gray-700">
        {label}
      </span>
    </div>
  );
}

interface CheckboxesProps {
  checkboxes: {
    id: string;
    value: number;
    label: string;
    checked: boolean;
  }[];
  onCheckboxesChange: (updatedCheckboxes: {
    id: string;
    value: number;
    label: string;
    checked: boolean;
  }[]) => void;
}

function Checkboxes({ checkboxes, onCheckboxesChange }: CheckboxesProps) {
  const [lastChecked, setLastChecked] = useState<number | null>(null);

  const handleCheckoxChange = (id: string, value: number) => {
    const updatedCheckboxes = checkboxes.map((checkbox) => ({
      ...checkbox,
      checked: checkbox.value === value,
    }));
    onCheckboxesChange(updatedCheckboxes);
    setLastChecked(value);
  };

  return (
    <>
      {checkboxes.map((checkbox) => (
        <Checkbox
          key={checkbox.id}
          id={checkbox.id}
          value={checkbox.value}
          label={checkbox.label}
          checked={checkbox.checked}
          onChange={() => handleCheckoxChange(checkbox.id, checkbox.value)}
        />
      ))}
      <p>Último valor seleccionado: {lastChecked}</p>
    </>
  );
}

export default Checkboxes;
