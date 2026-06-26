import React from 'react'
import StudentCard from './StudentCard'
import { Student } from '@/lib/data'

type Props = {
  students: Student[]
}

const StudentListSection = ({ students }: Props) => {
  return (
    <main>
      {students.map((student)=>(
        <StudentCard key={student.id} student={student}/>
      ))} 
    </main>
  )
}

export default StudentListSection