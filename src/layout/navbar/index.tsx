import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="border-gray-200 text-white px-4 lg:px-6 py-3.5 bg-gray-800 flex flex-wrap justify-between items-center">
      <Link to="/" className="hover:underline">
        <h1>Tanstack Form</h1>
      </Link>
      <ul className="flex gap-3">
        <li>
          <Link to="/basic-form" className="hover:underline">
            Basic Form
          </Link>
        </li>
        <li>
          <Link to="/advanced-form" className="hover:underline">
            Advanced Form
          </Link>
        </li>
      </ul>
    </nav>
  );
}
