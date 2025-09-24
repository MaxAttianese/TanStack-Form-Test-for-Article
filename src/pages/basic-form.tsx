import { useForm } from "@tanstack/react-form";
import React, { useState } from "react";
import * as z from "zod";
import { FieldInfo } from "../components/field-info";
import { PageLayout } from "../components/page-layout";
import { Result } from "../components/result";

// Define the shape of our user data
export type BasicUser = {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  password: string;
};

export function BasicForm() {
  // State to store the submitted user
  const [user, setUser] = useState<BasicUser | null>(null);

  // Zod schema is used for validation
  // TanStack Form is validation-library agnostic, so you can plug in whatever you prefer,
  // or you can simply validate each field individually with custom logic instead of using a schema.
  const validationSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.email("Invalid email address"),
    age: z
      .string()
      .transform((val) => parseInt(val, 10)) // transform string input into number
      .refine((val) => !!val && val >= 18, {
        message: "You must be 18 years old to create an account",
      }),
    password: z
      .string("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      ),
  });

  // Initialize the form with TanStack Form
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      password: "",
    },
    // Attach validation schema - runs onChange
    validators: { onChange: validationSchema },
    // Handle form submission
    onSubmit: async ({ value }) => {
      setUser(value);
      form.reset();
    },
  });

  return (
    <PageLayout title="Create New User (Basic Form)">
      <div className="flex w-full justify-center gap-6 flex-wrap">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="flex flex-col gap-4 w-full md:w-2/3 max-w-md self-center"
        >
          {/* Each form field is declared with form.Field 
          This provides field state (value, errors, touched) and handlers */}
          <form.Field
            name="firstName"
            children={(field) => {
              return (
                <FieldInfo
                  fieldName={field.name}
                  label={"Firstname:"}
                  input={
                    <input
                      id={field.name}
                      name={field.name}
                      className={`${
                        field.state.meta.isTouched &&
                        field.state.meta.errors.length > 0
                          ? "error"
                          : ""
                      }`}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  }
                  /* Display error messages when touched or submitted */
                  error={
                    (field.form.state.isSubmitted ||
                      field.state.meta.isTouched) &&
                    !field.state.meta.isValid ? (
                      <small className="text-red-500 italic flex flex-col gap-0.5">
                        {field.state.meta.errors.map((error, index) => (
                          <React.Fragment key={index}>
                            <span>{error?.message}</span>
                          </React.Fragment>
                        ))}
                      </small>
                    ) : null
                  }
                />
              );
            }}
          />
          <form.Field
            name="lastName"
            children={(field) => {
              return (
                <FieldInfo
                  fieldName={field.name}
                  label={"Lastname:"}
                  input={
                    <input
                      id={field.name}
                      name={field.name}
                      className={`${
                        field.state.meta.isTouched &&
                        field.state.meta.errors.length > 0
                          ? "error"
                          : ""
                      }`}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  }
                  error={
                    (field.form.state.isSubmitted ||
                      field.state.meta.isTouched) &&
                    !field.state.meta.isValid ? (
                      <small className="text-red-500 italic flex flex-col gap-0.5">
                        {field.state.meta.errors.map((error, index) => (
                          <React.Fragment key={index}>
                            <span>{error?.message}</span>
                          </React.Fragment>
                        ))}
                      </small>
                    ) : null
                  }
                />
              );
            }}
          />
          <form.Field
            name="age"
            children={(field) => {
              return (
                <FieldInfo
                  fieldName={field.name}
                  label={"Age:"}
                  input={
                    <input
                      id={field.name}
                      max={150}
                      min={0}
                      className={`${
                        field.state.meta.isTouched &&
                        field.state.meta.errors.length > 0
                          ? "error"
                          : ""
                      }`}
                      type="number"
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  }
                  error={
                    (field.form.state.isSubmitted ||
                      field.state.meta.isTouched) &&
                    !field.state.meta.isValid ? (
                      <small className="text-red-500 italic flex flex-col gap-0.5">
                        {field.state.meta.errors.map((error, index) =>
                          typeof error === "string" ? (
                            error
                          ) : (
                            <React.Fragment key={index}>
                              <span>{error?.message}</span>
                            </React.Fragment>
                          )
                        )}
                      </small>
                    ) : null
                  }
                />
              );
            }}
          />
          <form.Field
            name="email"
            children={(field) => {
              return (
                <FieldInfo
                  fieldName={field.name}
                  label={"Email:"}
                  input={
                    <input
                      id={field.name}
                      name={field.name}
                      className={`${
                        field.state.meta.isTouched &&
                        field.state.meta.errors.length > 0
                          ? "error"
                          : ""
                      }`}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  }
                  error={
                    (field.form.state.isSubmitted ||
                      field.state.meta.isTouched) &&
                    !field.state.meta.isValid ? (
                      <small className="text-red-500 italic flex flex-col gap-0.5">
                        {field.state.meta.errors.map((error, index) => (
                          <React.Fragment key={index}>
                            <span>{error?.message}</span>
                          </React.Fragment>
                        ))}
                      </small>
                    ) : null
                  }
                />
              );
            }}
          />
          <form.Field
            name="password"
            children={(field) => {
              return (
                <FieldInfo
                  fieldName={field.name}
                  label={"Password:"}
                  input={
                    <input
                      className={`${
                        field.state.meta.isTouched &&
                        field.state.meta.errors.length > 0
                          ? "error"
                          : ""
                      }`}
                      id={field.name}
                      name={field.name}
                      type="password"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  }
                  error={
                    field.state.meta.isTouched && !field.state.meta.isValid ? (
                      <small className="text-red-500 italic flex flex-col gap-0.5">
                        {field.state.meta.errors.map((error, index) => (
                          <React.Fragment key={index}>
                            <span>{error?.message}</span>
                          </React.Fragment>
                        ))}
                      </small>
                    ) : null
                  }
                />
              );
            }}
          />

          {/* form.Subscribe lets us react to form-wide state 
          Here we track submission state to disable buttons */}
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([, isSubmitting]) => (
              <div className="flex items-center gap-3 self-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="primary-button"
                >
                  {isSubmitting ? "..." : "Submit"}
                </button>
                <button
                  type="reset"
                  disabled={isSubmitting}
                  className="secondary-button"
                  onClick={() => form.reset()}
                >
                  Reset
                </button>
              </div>
            )}
          />
        </form>

        {/* Display the result once the form is submitted */}
        <Result user={user} setUser={setUser} />
      </div>
    </PageLayout>
  );
}
