✅ BasicForm: Basic User Profile
Fields:

First Name (text, required)
Last Name (text, required)
Email (email, required)
Password (password, min length)

Features:

Synchronized validation (e.g., required, minLength)
Submit + reset
Show values in console on submit

Technical goal:

register, handleSubmit, basic validations

✅ AdvancedForm: Advanced User Profile
Same fields as Basic, + these extras:

Phone Number (optional, custom validation)
Address (nested: Street, City, ZIP, Country)
Skills (dynamic array — add/remove fields)
Avatar Upload (file upload with preview)
Bio (textarea, max length)
Social Links (object: LinkedIn, GitHub, Twitter)
Username (async check — e.g., already in use)

Extra Features:

useFieldArray for skills
watch to show conditional fields (e.g., if LinkedIn exists)
Controller for custom fields (e.g., file, select)
Validation with Zod/Yup
Devtools integration

In case of double nesting in Advanced:

interface CompanyAddress {
street: string;
city: string;
country: string;
}

interface WorkExperience {
jobTitle: string;
company: {
name: string;
address: CompanyAddress;
};
startDate: string;
endDate?: string;
}

interface AdvancedProfile {
// ...previous fields...
workExperience: WorkExperience[];
}

https://github.com/Balastrong/tanstack-form-demo/blob/07-form-composition/src/components/UserForm.tsx

https://www.youtube.com/watch?v=YJ3rW85fnKo