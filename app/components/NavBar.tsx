import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-slate-700">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-5xl flex items-center">
          <div className="text-lg font-bold text-gray-900">
            <h1 className="text-lg font-bold text-gray-900">New Generation High School</h1>
            <p className="text-xs text-gray-400">Student Portal</p>
          </div>
        </div>
      </header>
      <div className="flex flex-row gap-10 mx-10 py-3 ">
        <Link
          href="/"
          className="text-gray-200 font-bold px-5 py-2 border-2 rounded-lg hover:text-blue-400 hover:bg-slate-800 flex items-center"
        >
          Students
        </Link>
        <Link
          href="/register"
          className="text-gray-200 font-bold px-5 py-2 border-2 rounded-lg hover:text-blue-400 hover:bg-slate-800 flex items-center"
        >
          Add a Student
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
