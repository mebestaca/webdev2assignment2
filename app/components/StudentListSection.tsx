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