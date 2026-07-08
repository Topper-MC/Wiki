interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  id?: string;
  description?: string;
  children: React.ReactNode;
}

export default function Checkbox({ id, description, children, className = '', ...props }: CheckboxProps) {
  return (
    <div className="checkbox-container">
      <div className="checkbox-wrapper">
        <input
          id={id}
          type="checkbox"
          className={`form-checkbox ${className}`}
          {...props}
        />
      </div>
      <div className="label-wrapper">
        <label htmlFor={id} className="checkbox-label">
          {children}
        </label>
        {description && <p className="checkbox-description">{description}</p>}
      </div>
    </div>
  );
}
