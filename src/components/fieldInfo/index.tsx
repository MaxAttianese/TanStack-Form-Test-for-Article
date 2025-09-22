type FieldInfoProps = {
  fieldName: string;
  label: string;
  error?: React.ReactNode;
  input: React.ReactNode;
};
export function FieldInfo({ fieldName, label, error, input }: FieldInfoProps) {
  return (
    <div className="flex flex-col gap-2" key={fieldName}>
      <div className="flex items-center justify-between">
        <label className="small italic" htmlFor={fieldName}>
          {label}
        </label>
        {error}
      </div>
      {input}
    </div>
  );
}
