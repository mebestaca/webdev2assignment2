import StudentListSection from "./components/StudentListSection";
import NavBar from "./components/NavBar";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <div id="body" className="bg-slate-300 p-10 flex-1 ">
        <StudentListSection />
      </div>
      <Footer />
    </div>
  );
}