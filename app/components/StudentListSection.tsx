/**
 * @author  Marc Edison Estaca, 
 *          Reiner Justin Realica, 
 *          Joshua Dyck
 * @version 1.0
 * @returns Main
 * @description Maps out the list of students provided by the context
 *          into a StudentCard component which displays the name,
 *          date of birth, and grade of the student
 */

import { useContext } from "react";
import StudentCard from './StudentCard'
import { StudentContext } from "../shared/StudentContext";

const StudentListSection = () => {
  const context = useContext(StudentContext);

  if (!context) return null;

  return (
    <main>
      {context.students.map((student)=>(
        <StudentCard key={student.id} student={student}/>
      ))} 
    </main>
  )
}

export default StudentListSection