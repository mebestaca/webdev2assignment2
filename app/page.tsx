/**
 * @author  Marc Edison Estaca, 
 *          Reiner Justin Realica, 
 *          Joshua Dyck
 * @version 1.0
 * @returns Component: StudentListSection
 * @description Contains a list of student information (name, date of birth, current grade)
 */
'use client'
import StudentListSection from "./components/StudentListSection";

export default function Home() {
  return (
    <div>
      <div id="body" className="bg-slate-300 p-10 flex-1 ">
        <StudentListSection />
      </div>
    </div>
  );
}