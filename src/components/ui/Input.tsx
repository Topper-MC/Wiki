interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
}

export default function Input({ id, className = '', ...props }: InputProps) {
  return (
    <input
      id={id}
      className={`form-input ${className}`}
      {...props}
    />
  );
}
