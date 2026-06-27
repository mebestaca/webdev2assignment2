/**
 * @author  Marc Edison Estaca, 
 *          Reiner Justin Realica, 
 *          Joshua Dyck
 * @version 1.0
 * @description Contains the structure of the context. students is a list
 *          of Student objects, and addStudent is a method that accepts
 *          a Student object. Mainly used in the context provider
 */

import { Student } from "@/lib/data";
import { createContext } from "react";

type StudentContextType = {
  students: Student[];
  addStudent: (student: Student) => void;
};

export const StudentContext = createContext<StudentContextType | undefined>(undefined);