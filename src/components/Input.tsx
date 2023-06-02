import { ChangeEvent } from 'react';

type ValueType = string | number;

type InputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

interface Props {
  type?: InputType;
  id: string;
  name: string;
  placeholder: string;
  value: ValueType;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  min?: number | string;
  max?: number | string;
  classes?: string;
}
const Input = ({
  type = 'text',
  id,
  name,
  value,
  onChange,
  max,
  min,
  required,
  placeholder,
  classes = ''
}: Props) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`peer w-full border border-l-0 border-sky-600 px-5 pb-2 pt-6 font-light outline-none invalid:border-red-600 ${classes}`}
        max={max}
        min={min}
        required={required}
        autoComplete="off"
      />

      <label
        htmlFor={id}
        className="absolute left-5 top-[6px] text-xs font-bold uppercase text-sky-600 transition-colors peer-invalid:text-red-600"
      >
        {placeholder}
      </label>

      <div
        className={`absolute left-0 top-0 h-full w-[8px] bg-sky-600 transition-all peer-invalid:bg-red-600 peer-focus:w-[12px]
            ${value.toString().length > 0 ? 'w-[12px]' : ''}
        `}
      />
    </div>
  );
};

export default Input;
