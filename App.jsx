import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";

function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <Navbar />

      <h2>Total Students: {students.length}</h2>

      <input
        type="text"
        placeholder="Search Student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      <StudentForm addStudent={addStudent} />

      <StudentList
        students={filteredStudents}
        deleteStudent={deleteStudent}
      />

      <Footer />
    </div>
  );
}

export default App;