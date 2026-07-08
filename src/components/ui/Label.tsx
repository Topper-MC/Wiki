interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
  children: React.ReactNode;
}

export default function Label({ htmlFor, children, className = '', ...props }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={`form-label ${className}`} {...props}>
      {children}
    </label>
  );
}
