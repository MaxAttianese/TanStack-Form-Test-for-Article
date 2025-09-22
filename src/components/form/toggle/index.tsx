import type { ChangeEventHandler } from "react";

type ToggleProps = {
  label: string;
  value: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
export function Toggle({ label, value, onChange }: ToggleProps) {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={value}
        className="sr-only peer"
        onChange={onChange}
      />
      <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-800 dark:peer-checked:bg-blue-800"></div>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 peer-checked:text-gray-700 ">
        {label}
      </span>
    </label>
  );
}
