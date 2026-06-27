/**
 * @author  Marc Edison Estaca, 
 *          Reiner Justin Realica, 
 *          Joshua Dyck
 * @version 1.0
 * @returns StudentContext
 * @description Context so that the useState is available everywhere that this
 *          component is wrapped around with. Features students hook which 
 *          provides a list of students, and setStudents, a hook that allows
 *          the program to add a new student object to the list
 */

"use client";

import { useState } from "react";
import { StudentContext } from "./StudentContext";
import { Student, students as studentsList} from "@/lib/data";

export default function StudentProvider({ children}: {children: React.ReactNode;}) {
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