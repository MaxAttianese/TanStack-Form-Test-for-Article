import { useFieldContext } from ".";
import { FieldErrors } from "./field-errors";

type FieldTextProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FieldText = ({ label, ...inputProps }: FieldTextProps) => {
  const field = useFieldContext<string>();

  return (
    <div className="flex flex-col gap-2" key={field.name}>
      <div className="flex items-center justify-between">
        <label className="small italic" htmlFor={field.name}>
          {label}
        </label>
        {!field.state.meta.isValid ? (
          <FieldErrors meta={field.state.meta} />
        ) : null}
      </div>
      <input
        id={field.name}
        name={field.name}
        className={`${
          (field.form.state.isSubmitted || field.state.meta.isTouched) &&
          field.state.meta.errors.length > 0
            ? "error"
            : ""
        }`}
        value={field.state.value ?? ""}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        autoComplete=""
        {...inputProps}
      />
    </div>
  );
};
