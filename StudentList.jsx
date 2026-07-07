import StudentCard from "./StudentCard";

function StudentList({ students, deleteStudent }) {
  if (students.length === 0) {
    return <h3>No Students Found</h3>;
  }

  return (
    <div>
      {students.map((student, index) => (
        <StudentCard
          key={index}
          student={student}
          index={index}
          deleteStudent={deleteStudent}
        />
      ))}
    </div>
  );
}

export default StudentList;