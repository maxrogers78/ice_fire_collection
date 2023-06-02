import { AiOutlineLoading3Quarters } from 'react-icons/ai';

type ButtonType = 'button' | 'submit' | 'reset';
type ButtonVariant = 'primary' | 'secondary' | 'outlined';

interface Props {
  type?: ButtonType;
  variant?: ButtonVariant;
  text: string;
  onClick?: (...args: any[]) => void;
  icon?: JSX.Element | JSX.Element[];
  isLoading?: boolean;
  showLoadingIcon?: boolean;
  classes?: string;
}

const Button = ({
  type = 'button',
  variant = 'primary',
  text,
  onClick,
  icon,
  isLoading,
  showLoadingIcon,
  classes
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex h-auto w-full items-center justify-center gap-2 rounded-br-2xl rounded-tl-2xl border-2 px-6 py-3 text-lg transition-all hover:rounded-bl-2xl hover:rounded-br-none hover:rounded-tl-none hover:rounded-tr-2xl ${classes}
        ${variant === 'primary' ? 'border-sky-500 bg-sky-500 text-gray-50' : ''}
        ${
          variant === 'secondary'
            ? 'border-gray-400 bg-gray-400 text-gray-50'
            : ''
        }
        ${
          variant === 'outlined' ? 'border-sky-500 bg-gray-50 text-sky-500' : ''
        }
      `}
    >
      {showLoadingIcon && isLoading ? (
        <AiOutlineLoading3Quarters className="animate-spin" />
      ) : (
        icon
      )}
      {isLoading ? 'Cargando' : text}
    </button>
  );
};

export default Button;
