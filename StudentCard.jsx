function StudentCard({ student, index, deleteStudent }) {
  return (
    <div className="card">
      <h3>{student.name}</h3>
      <p>Course: {student.course}</p>
      <p>Age: {student.age}</p>

      <button onClick={() => deleteStudent(index)}>
        Delete
      </button>
    </div>
  );
}

export default StudentCard;