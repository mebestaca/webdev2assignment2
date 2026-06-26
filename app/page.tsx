'use client'

import { useEffect, useState } from "react";
import StudentListSection from "./components/StudentListSection";

export default function Home() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    const savedStudents = localStorage.getItem("students");
  
    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    }
  
  }, []);

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <StudentListSection students={students} />
    </main>
  );
}