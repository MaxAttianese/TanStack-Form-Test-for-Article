import type { AnyFieldMeta } from "@tanstack/react-form";

type FieldErrorsProps = {
  meta: AnyFieldMeta;
};

export const FieldErrors = ({ meta }: FieldErrorsProps) => {
  if (!meta.isTouched) return null;

  return (
    <small className="text-red-500 italic flex flex-col gap-0.5">
      {meta.errors.map((error, index) => (
        <span key={index}>{error.message}</span>
      ))}
    </small>
  );
};
