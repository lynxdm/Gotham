import { classNames } from '@/utils/classNames';

interface TextfieldProps {
  id: string;
  value: string;
  className?: string;
  type?: string;
  placeholder?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export const Textfield: React.FC<TextfieldProps> = ({
  id,
  value,
  type = 'text',
  placeholder,
  className,
  handleChange,
  required = false,
}) => {
  const textFieldClassName = classNames('textfield', className);
  return (
    <input
      type={type}
      className={textFieldClassName}
      id={id}
      name={id}
      value={value}
      tabIndex={0}
      placeholder={placeholder}
      onChange={handleChange}
      required={required}
      aria-required={required}
      aria-label={placeholder} //Consider label || placeholder when there is a label prop
    />
  );
};
