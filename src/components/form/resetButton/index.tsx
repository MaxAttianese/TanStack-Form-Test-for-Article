import { useStore } from "@tanstack/react-form";
import { useFormContext } from "..";

export const ResetButton = () => {
  const form = useFormContext();

  const [isSubmitting] = useStore(form.store, (state) => [
    state.isSubmitting,
    state.canSubmit,
  ]);

  return (
    <button
      type="reset"
      disabled={isSubmitting}
      className="secondary-button"
      onClick={() => form.reset()}
    >
      Reset
    </button>
  );
};
