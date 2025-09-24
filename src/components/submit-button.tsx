import { useStore } from "@tanstack/react-form";
import { useFormContext } from ".";

export const SubmitButton = () => {
  const form = useFormContext();

  const [isSubmitting] = useStore(form.store, (state) => [state.isSubmitting]);

  return (
    <button type="submit" disabled={isSubmitting} className="primary-button">
      {isSubmitting ? "..." : "Submit"}
    </button>
  );
};
