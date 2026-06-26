import { Student } from '@/lib/data'
import React from 'react'
import Link from "next/link";

type StudentProp = {
    student: Student
}

const StudentCard = ({student} : StudentProp) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm-flex flex-col gap-10 mb-3">
      <h2 className="text-base font-bold text-slate-800">{`${student.firstName} ${student.lastName}`}</h2>
      <p className="text-sm text-slate-500 flex-1">{student.dateOfBirth.toLocaleDateString('en-US')}</p>
      <div className="flex items-center justify-between mt-1">
        <strong className="text-xl text-slate-800">Grade: {student.grade}</strong>
      </div>
    </div>
  )
}

export default StudentCard