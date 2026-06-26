'use client'
import { useState } from "react";
import StudentListSection from "./components/StudentListSection";
import NavBar from "./components/NavBar";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";
import { students as initialStudents } from "@/lib/data";

export default function Home() {
  const [students, setStudents] = useState(initialStudents);

  const addStudent = (newStudent: any) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div>
      <div id="body" className="bg-slate-300 p-10 flex-1 ">
        <StudentListSection students={students} />
      </div>
    </div>
  );
}