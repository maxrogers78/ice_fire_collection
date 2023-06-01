import { useState, ChangeEvent } from 'react';
import { IOption } from '../interfaces';

interface Props {
  id: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  options: IOption[];
  required?: boolean;
  classes?: string;
}

const Select = ({
  id,
  name,
  onChange,
  placeholder,
  options,
  required,
  classes
}: Props) => {
  const [selectedValue, setSelectedValue] = useState('0');

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e);
    setSelectedValue(e.target.value);
  };

  return (
    <div className="relative w-full">
      <select
        name={name}
        id={id}
        onChange={handleOnChange}
        className={`peer w-full px-5 pb-2 pt-6 font-light outline-none ${classes}`}
        required={required}
        defaultValue="0"
      >
        <option value="0">Seleccione</option>

        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>

      <label
        htmlFor={id}
        className="absolute left-5 top-[6px] text-xs font-bold uppercase text-sky-600 transition-colors peer-invalid:text-red-600"
      >
        {placeholder}
      </label>

      <div
        className={`absolute left-0 top-0 h-full w-[8px] bg-sky-600 transition-all peer-invalid:bg-red-600 peer-focus:w-[12px]
            ${selectedValue !== '0' ? 'w-[12px]' : ''}
        `}
      />
    </div>
  );
};

export default Select;
