import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { SubmitButton } from "./submitButton";
import { ResetButton } from "./resetButton";
import { FieldText } from "./fieldText";
import { FieldNumber } from "./fieldNumber";
import { FieldTextArea } from "./fieldTextArea";
import { FieldPassword } from "./fieldPassword";
import { FieldDate } from "./fieldDate";

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
