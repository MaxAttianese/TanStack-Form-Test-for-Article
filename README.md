# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
# 📋 TanStack Form Playground

Practical examples of **forms in React** using [TanStack Form](https://tanstack.com/form/latest/docs/overview).  
The project includes two main forms:

- ✅ **BasicForm** — Simple user profile  
- ✅ **AdvancedForm** — Advanced user profile with nested fields, validations, and dynamic features  

---

## 🚀 Installation

Clone the repo and install dependencies:

```bash
npm install
```

---

## ▶️ Run the project

Start development mode:

```bash
npm run dev
```

---

## 📝 BasicForm: Basic User Profile

### 🔑 Fields
- First Name → text (required)
- Last Name → text (required)
- Email → email (required)
- Password → password (min length)

### ⚡ Features
- Synchronized validations (required, minLength)
- Submit and Reset buttons
- Logs values to console on submit

### 🎯 Technical goals
- Usage of register
- Handling handleSubmit
- Basic validations

---

## 📝 AdvancedForm: Advanced User Profile

### 🔑 Additional Fields
- Phone Number → optional, with custom validation
- Address → nested object: Street, City, ZIP, Country
- Skills → dynamic array (add/remove with useFieldArray)
- Avatar Upload → file upload with preview (Controller)
- Bio → textarea, with maxLength
- Social Links → object: LinkedIn, GitHub, Twitter
- Username → async validation (check if already in use)

### ⚡ Extra Features
- useFieldArray for dynamic skills
- watch for conditional fields (e.g., LinkedIn → show extra fields)
- Controller for custom inputs (file, select)
- Advanced validation with Zod/Yup
- Integration with React Hook Form Devtools

---

## 🔗 Advanced: Nested Data Structures

Example of handling deeply nested objects such as Work Experience:

```ts
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
  // ...other defined fields...
  workExperience: WorkExperience[];
}
```

---

## 🛠️ Tech Stack
- ⚛️ React + Vite
- 📦 TanStack Form
- ✅ Zod
