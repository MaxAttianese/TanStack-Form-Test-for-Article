✅ BasicForm: Basic User Profile
Campi:

First Name (text, required)

Last Name (text, required)

Email (email, required)

Password (password, min length)

Caratteristiche:

Validazione sincronizzata (es. required, minLength)

Submit + reset

Mostra i valori in console alla submit

Obiettivo tecnico:

register, handleSubmit, validazioni base

✅ AdvancedForm: Advanced User Profile
Stessi campi del Basic, + questi extra:

Phone Number (optional, custom validation)

Address (nested: Street, City, ZIP, Country)

Skills (dynamic array — aggiunta/rimozione campi)

Avatar Upload (file upload con anteprima)

Bio (textarea, max length)

Social Links (object: LinkedIn, GitHub, Twitter)

Username (async check — es. già in uso)

Caratteristiche extra:

useFieldArray per skills

watch per mostrare campi condizionali (es. se ha LinkedIn)

Controller per campi custom (es. file, select)

Validazione con Zod/Yup

Devtools integration



nel caso di doppio nesting dell Advanced
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
  // ...campi precedenti...
  workExperience: WorkExperience[];
}




https://github.com/Balastrong/tanstack-form-demo/blob/07-form-composition/src/components/UserForm.tsx
https://www.youtube.com/watch?v=YJ3rW85fnKo