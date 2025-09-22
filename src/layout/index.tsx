import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";

export function Layout() {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <Navbar />
      </header>
      <main className="min-h-[calc(100vh-152px)] px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <footer className="mt-auto border-gray-200 text-white px-4 lg:px-6 py-3.5 bg-gray-800 flex justify-center items-center">
        <h2>Tanstack Form</h2>
      </footer>
    </div>
  );
}
