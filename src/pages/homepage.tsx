import { FormsLink } from "../components/form-links";
import { PageLayout } from "../components/page-layout";

export function Homepage() {
  return (
    <PageLayout title="Choose a Form">
      <ul className="flex flex-col lg:flex-row gap-6 w-full text-white ">
        <li className="w-full lg:w-1/2">
          <FormsLink
            description="This form showcases the core features of TanStack Form, including
              input registration, basic validation rules (such as required
              fields and minimum length), and a straightforward submission flow.
              Ideal for getting started with form handling."
            link="/basic-form"
            title="Basic Form"
          />
        </li>
        <li className="w-full lg:w-1/2">
          <FormsLink
            description="This form is designed to explore the full potential of TanStack
              Form. It includes multi-step navigation, dynamic field arrays
              (e.g. user experiences), conditional rendering based on field
              values, nested objects, and asynchronous validation scenarios.
              Perfect for testing real-world form complexity and performance."
            link="/advanced-form"
            title="Advanced Form"
          />
        </li>
      </ul>
    </PageLayout>
  );
}
