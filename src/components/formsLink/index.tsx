import { Link } from "react-router-dom";

type FormLinkProps = {
  description: string;
  link: string;
  title: string;
};

export function FormsLink({ description, link, title }: FormLinkProps) {
  return (
    <Link
      to={link}
      className="flex flex-col gap-3 rounded-lg border border-gray-200 px-4 bg-gray-800 hover:bg-gray-700 w-full h-65 lg:h-55 p-8"
    >
      <h3 className="text-2xl">{title}</h3>
      <p>{description} </p>
    </Link>
  );
}
