import { useState } from "react";

function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !course || !age) {
      alert("Please fill all the fields");
      return;
    }

    addStudent({
      name,
      course,
      age,
    });

    setName("");
    setCourse("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button>Add Student</button>
    </form>
  );
}

export default StudentForm;