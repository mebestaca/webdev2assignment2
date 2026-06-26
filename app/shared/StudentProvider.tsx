"use client";

import { useState } from "react";
import { StudentContext } from "./StudentContext";
import { Student, students as studentsList} from "@/lib/data";

export default function StudentProvider({ children}: {
  children: React.ReactNode;
}) {
  const [students, setStudents] = useState<Student[]>(studentsList);

  const addStudent = (student: Student) => {
    setStudents((prev) => [...prev, student]);
  };

  return (
    <StudentContext value={{ students, addStudent }}>
      {children}
    </StudentContext>
  );
}