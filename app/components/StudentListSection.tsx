import { students } from '@/lib/data'
import React from 'react'
import StudentCard from './StudentCard'

const StudentListSection = () => {
  return (
    <main>
      {students.map((student)=>(
        <StudentCard key={student.id} student={student}/>
      ))} 
    </main>
  )
}

export default StudentListSection