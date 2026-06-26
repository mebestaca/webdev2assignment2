import { Student } from "@/lib/data";
import { createContext } from "react";

type StudentContextType = {
  students: Student[];
  addStudent: (student: Student) => void;
};

export const StudentContext = createContext<StudentContextType | undefined>(undefined);