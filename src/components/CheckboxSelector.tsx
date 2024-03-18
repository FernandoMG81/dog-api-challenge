import { useState, ChangeEvent, useEffect } from 'react';

interface CheckboxSelectorProps {
  breed: string | undefined,
  options: string[];
  onChange: (selectedOptions: string[]) => void;
}

export const CheckboxSelector = ({ breed, options, onChange } : CheckboxSelectorProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    onChange(selectedOptions);
  }, [selectedOptions, onChange]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, option: string) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      // Si está marcado, agrega la opción a las opciones seleccionadas
      setSelectedOptions((prevSelected) => [...prevSelected, option]);
    } else {
      // Si no está marcado, quita la opción de las opciones seleccionadas
      setSelectedOptions((prevSelected) => prevSelected.filter((item) => item !== option));
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <fieldset className='flex flex-row border border-solid border-gray-300 p-3 w-fit gap-4 my-4'>
        <legend className='text-sm text-center'>Choose your favorite <div className='font-bold inline-block animate-tada animate-iteration-count-[3]'>{breed}</div> sub-breed</legend>
        {options.map((option) => (
          <div key={option}>
            <input
              type="checkbox"
              id={option}
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={(e) => handleCheckboxChange(e, option)}
            />
            <label className='ml-1' htmlFor={option}>{option}</label>
          </div>
        ))}
      </fieldset>
    </div>
  );
};


