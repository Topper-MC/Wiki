import { useId } from 'react';
import Label from './Label';

interface FieldWrapperProps {
  label?: string;
  description?: string;
  error?: string;
  id?: string;
  children: (id: string) => React.ReactNode;
}

export default function FieldWrapper({ label, description, error, id: propId, children }: FieldWrapperProps) {
  const generatedId = useId();
  const id = propId || generatedId;

  return (
    <div className="field-wrapper">
      {label && <Label htmlFor={id}>{label}</Label>}
      {children(id)}
      {description && <p className="field-description">{description}</p>}
      {error && <p className="field-error">{error}</p>}
    </div>
  );
}
