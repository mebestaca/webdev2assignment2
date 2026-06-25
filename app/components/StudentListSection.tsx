import { students } from '@/lib/data'
import React from 'react'
import StudentCard from './StudentCard'

const StudentListSection = () => {
  return (
    <div>
       {students.map((student)=>(
            <StudentCard key={student.id} student={student}/>
        ))} 
    </div>
  )
}

export default StudentListSection
