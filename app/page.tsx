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