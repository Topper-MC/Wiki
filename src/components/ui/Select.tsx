
interface Option {
  label: string;
  value: string | number;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id?: string;
  options: Option[];
}

export default function Select({ id, options, className = '', ...props }: SelectProps) {
  return (
    <select
      id={id}
      className={`form-select ${className}`}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
