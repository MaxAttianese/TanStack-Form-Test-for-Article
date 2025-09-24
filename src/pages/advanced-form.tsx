import { useState } from "react";

import { Toggle } from "../components/toggle";
import { PageLayout } from "../components/page-layout";
import { Result } from "../components/result";
import {
  advancedUserSchema,
  defaultAdvancedUser,
  type AdvancedUser,
} from "../models/advanced-users";
import { useAppForm } from "../components";

export const AdvancedForm = () => {
  // State to store the submitted user
  const [user, setUser] = useState<AdvancedUser | null>(null);

  // Local state to handle visibility of optional sections
  const [isOptionalFieldsShow, setIsOptionalFieldsShow] = useState({
    address: false,
    socialLinks: false,
    workExperiences: false,
    skills: false,
  });

  // Toggle handler to show/hide optional sections
  const toggleHandler = (key: keyof typeof isOptionalFieldsShow) =>
    setIsOptionalFieldsShow((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

  // Initialize form using a custom hook wrapper around useForm (useAppForm)
  const form = useAppForm({
    defaultValues: defaultAdvancedUser,
    validators: { onChange: advancedUserSchema },
    onSubmit: async ({ value }) => {
      console.log(value);
      setUser(value);
      form.reset();
      setIsOptionalFieldsShow((prev) => ({
        ...prev,
        address: false,
        socialLinks: false,
        workExperiences: false,
        skills: false,
      }));
    },
  });

  return (
    <PageLayout title="Create New User (Advanced Form)">
      <div className="flex w-full justify-center gap-6">
        {/* Form element - connects handleSubmit from TanStack Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="flex flex-col gap-4 w-full md:w-2/3 max-w-md self-center"
        >
          {/* Basic fields (always visible) */}
          <form.AppField
            name="firstName"
            children={(field) => <field.TextField label="Firstname:" />}
          />
          <form.AppField
            name="lastName"
            children={(field) => <field.TextField label="Lastname:" />}
          />
          <form.AppField
            name="age"
            children={(field) => <field.NumberField label="Age:" />}
          />
          <form.AppField
            name="email"
            children={(field) => <field.TextField label="Email:" />}
          />
          <form.AppField
            name="password"
            children={(field) => <field.PasswordField label="Password:" />}
          />
          <form.AppField
            name="phoneNumber"
            children={(field) => <field.TextField label="Phone Number:" />}
          />
          <form.AppField
            name="bio"
            children={(field) => <field.TextAreaField label="Biografia:" />}
          />
          <Toggle
            label={"Add address"}
            value={isOptionalFieldsShow.address}
            onChange={() => toggleHandler("address")}
          />
          {isOptionalFieldsShow.address && (
            <>
              <form.AppField
                name="address.street"
                children={(field) => <field.TextField label="Street:" />}
              />
              <form.AppField
                name="address.city"
                children={(field) => <field.TextField label="City:" />}
              />
              <form.AppField
                name="address.state"
                children={(field) => <field.TextField label="State:" />}
              />
              <form.AppField
                name="address.zip"
                children={(field) => <field.TextField label="Zip:" />}
              />
            </>
          )}
          <Toggle
            label={"Add skills"}
            value={isOptionalFieldsShow.skills}
            onChange={() => toggleHandler("skills")}
          />
          {/* Array fields */}
          {isOptionalFieldsShow.skills && (
            <form.Field name="skills" mode="array">
              {(field) => {
                return (
                  <div className="flex flex-col gap-5 justify-center items-start">
                    {(field.state.value ?? []).map((_, i) => {
                      return (
                        <form.Field key={i} name={`skills[${i}]`}>
                          {() => {
                            return (
                              <div className="flex gap-5 items-end">
                                <form.AppField
                                  name={`skills[${i}]`}
                                  children={(field) => (
                                    <field.TextField label={`${i + 1}.`} />
                                  )}
                                />
                                <button
                                  type="button"
                                  onClick={() => field.removeValue(i)}
                                  className="bg-red-700 text-white px-3 py-1 rounded"
                                >
                                  Remove
                                </button>
                              </div>
                            );
                          }}
                        </form.Field>
                      );
                    })}
                    <button
                      className="self-end"
                      onClick={() => field.pushValue("")}
                      type="button"
                    >
                      Add skill
                    </button>
                  </div>
                );
              }}
            </form.Field>
          )}
          <Toggle
            label={"Add work experiences"}
            value={isOptionalFieldsShow.workExperiences}
            onChange={() => toggleHandler("workExperiences")}
          />
          {isOptionalFieldsShow.workExperiences && (
            <form.Field name="workExperiences" mode="array">
              {(field) => {
                return (
                  <div className="flex flex-col gap-6">
                    {(field.state.value ?? []).map((_, i) => {
                      return (
                        <div
                          key={i}
                          className="border rounded-xl p-4 flex flex-col gap-3"
                        >
                          {/* Nested fields use dot notation */}
                          <form.Field name={`workExperiences[${i}].jobTitle`}>
                            {() => (
                              <form.AppField
                                name={`workExperiences[${i}].jobTitle`}
                                children={(field) => (
                                  <field.TextField label="Job Title:" />
                                )}
                              />
                            )}
                          </form.Field>
                          <form.Field
                            name={`workExperiences[${i}].company.name`}
                          >
                            {() => (
                              <form.AppField
                                name={`workExperiences[${i}].company.name`}
                                children={(field) => (
                                  <field.TextField label="Company Name:" />
                                )}
                              />
                            )}
                          </form.Field>
                          <div className="grid grid-cols-2 gap-3">
                            <form.Field
                              name={`workExperiences[${i}].company.address.street`}
                            >
                              {() => (
                                <form.AppField
                                  name={`workExperiences[${i}].company.address.street`}
                                  children={(field) => (
                                    <field.TextField label="Street:" />
                                  )}
                                />
                              )}
                            </form.Field>

                            <form.Field
                              name={`workExperiences[${i}].company.address.city`}
                            >
                              {() => (
                                <form.AppField
                                  name={`workExperiences[${i}].company.address.city`}
                                  children={(field) => (
                                    <field.TextField label="City:" />
                                  )}
                                />
                              )}
                            </form.Field>

                            <form.Field
                              name={`workExperiences[${i}].company.address.state`}
                            >
                              {() => (
                                <form.AppField
                                  name={`workExperiences[${i}].company.address.state`}
                                  children={(field) => (
                                    <field.TextField label="State:" />
                                  )}
                                />
                              )}
                            </form.Field>

                            <form.Field
                              name={`workExperiences[${i}].company.address.zip`}
                            >
                              {() => (
                                <form.AppField
                                  name={`workExperiences[${i}].company.address.zip`}
                                  children={(field) => (
                                    <field.TextField label="Zip:" />
                                  )}
                                />
                              )}
                            </form.Field>
                          </div>

                          <form.Field name={`workExperiences[${i}].startDate`}>
                            {() => (
                              <form.AppField
                                name={`workExperiences[${i}].startDate`}
                                children={(field) => (
                                  <field.DateField label="Start Date:" />
                                )}
                              />
                            )}
                          </form.Field>

                          <form.Field name={`workExperiences[${i}].endDate`}>
                            {() => (
                              <form.AppField
                                name={`workExperiences[${i}].endDate`}
                                children={(field) => (
                                  <field.DateField label="End Date:" />
                                )}
                              />
                            )}
                          </form.Field>

                          <button
                            type="button"
                            onClick={() => field.removeValue(i)}
                            className="self-end bg-red-700 text-white px-3 py-1 rounded"
                          >
                            Remove
                          </button>
                        </div>
                      );
                    })}
                    <button
                      type="button"
                      onClick={() =>
                        field.pushValue({
                          jobTitle: "",
                          company: { name: "", address: {} },
                          startDate: "",
                          endDate: "",
                        })
                      }
                      className="self-end"
                    >
                      Add Experience
                    </button>
                  </div>
                );
              }}
            </form.Field>
          )}
          <Toggle
            label={"Add social links"}
            value={isOptionalFieldsShow.socialLinks}
            onChange={() => toggleHandler("socialLinks")}
          />
          {isOptionalFieldsShow.socialLinks && (
            <>
              <form.AppField
                name="socialLinks.twitter"
                children={(field) => <field.TextField label="Tweet:" />}
              />
              <form.AppField
                name="socialLinks.facebook"
                children={(field) => <field.TextField label="Facebook:" />}
              />
              <form.AppField
                name="socialLinks.linkedin"
                children={(field) => <field.TextField label="Linkedin:" />}
              />
              <form.AppField
                name="socialLinks.instagram"
                children={(field) => <field.TextField label="Instagram:" />}
              />
              <form.AppField
                name="socialLinks.site"
                children={(field) => <field.TextField label="Site:" />}
              />
            </>
          )}
          {/* AppForm groups the submit and reset buttons */}
          <form.AppForm>
            <div className="flex items-center gap-3 self-end">
              <form.SubmitButton />
              <form.ResetButton />
            </div>
          </form.AppForm>
        </form>
        {/* Shows submitted result */}
        <Result user={user} setUser={setUser} />
      </div>
    </PageLayout>
  );
};
