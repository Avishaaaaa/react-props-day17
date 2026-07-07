# Student Management Dashboard

## Overview

The Student Management Dashboard is a beginner-friendly React project that demonstrates how to build an interactive application using core React concepts. Users can add student details, search for students by name, view all student records, and remove students from the list. The project focuses on understanding component-based architecture and state management in React.

## Features

* Add new students with their name, course, and age
* Display all students in individual cards
* Search students by name
* Delete student records
* View the total number of students
* Display a message when no students are available

## Concepts Practiced

* React Components
* Props
* useState Hook
* Event Handling
* Controlled Components
* Rendering Lists with `map()`
* Filtering Data with `filter()`
* Conditional Rendering
* State Management

## Project Structure

```text
src/
│── components/
│   ├── Navbar.jsx
│   ├── StudentForm.jsx
│   ├── StudentCard.jsx
│   ├── StudentList.jsx
│   └── Footer.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

## How It Works

1. Enter the student's name, course, and age.
2. Click **Add Student** to save the record.
3. The student appears in the list below.
4. Use the search box to find students by name.
5. Click **Delete** to remove a student from the dashboard.
6. The total number of students updates automatically whenever a student is added or removed.

## Technologies Used

* React
* JavaScript (ES6+)
* Vite
* CSS

## Learning Outcomes

Through this project, I learned how to:

* Build reusable React components.
* Manage application state using the `useState` hook.
* Pass data and functions between components using props.
* Handle user input with controlled components.
* Render dynamic lists using `map()`.
* Filter data in real time using `filter()`.
* Implement event handling for form submission and deletion.
* Use conditional rendering to improve the user experience.

