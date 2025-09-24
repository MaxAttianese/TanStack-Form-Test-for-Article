import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { SubmitButton } from "./submit-button";
import { ResetButton } from "./reset-button";
import { FieldText } from "./field-text";
import { FieldNumber } from "./field-number";
import { FieldTextArea } from "./field-textarea";
import { FieldPassword } from "./field-password";
import { FieldDate } from "./field-date";

export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField: FieldText,
    PasswordField: FieldPassword,
    DateField: FieldDate,
    TextAreaField: FieldTextArea,
    NumberField: FieldNumber,
  },
  formComponents: {
    SubmitButton,
    ResetButton,
  },
  fieldContext,
  formContext,
});
