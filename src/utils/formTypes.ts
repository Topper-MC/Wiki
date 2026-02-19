// Shared types for data-driven config forms.
// Used by HolderForm.vue and each specific form wrapper.

export type FieldDef = {
  type: 'text' | 'checkbox' | 'array' | 'select' | 'object-array';
  name: string;
  labelKey: string;
  descriptionKey: string;
  /** HTML input type for text fields, e.g. 'number' (default: 'text') */
  inputType?: string;
  /** i18n key for the "Add" button label (required for array / object-array fields) */
  addLabelKey?: string;
  /** Options list (required for select fields) */
  options?: { label: string; value: string }[];
  /** Sub-field definitions (required for object-array fields) */
  subFields?: { name: string; placeholderKey: string }[];
  /** Default value pushed when adding a new item (required for object-array fields) */
  defaultItem?: Record<string, string>;
};

export type FormConfig = {
  /** Form fields to display */
  fields: FieldDef[];
  /** Default values for all form fields */
  defaults: Record<string, any>;
  /** Language for the output code block (e.g. 'yaml', 'json', 'text') */
  codeLang: string;
  /** Converts current form values into the output code string */
  generateCode: (values: Record<string, any>) => string;
};
