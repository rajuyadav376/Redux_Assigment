import React from 'react'
import '../component.css/Student.css'
import { useState } from 'react';
function Student() {
  const [students, setStudents] = useState([
    { id: 1, name: 'vivek ', age: 18, course: 'MERN', batch: '2024-2025' },
    { id: 2, name: 'Papu', age: 21, course: 'c++', batch: '2022-2023' },
    { id: 2, name: 'Kashish Aunty', age: 21, course: 'Java', batch: '2023-2024' },
  ]);
   
  return (
    <div className='student-container'>
      <div className='btn-container-heading'>
        <h1> Student details 🧑🏼‍🎓 !! </h1>
        <button className='add-btn'>Add new students</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>change</th>
          </tr>
        </thead>
        <tbody>
         
          {students.map(student => (
          <tr  key={student.id}>
          <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.course}</td>
              <td>{student.batch}</td>
            <td><a href="#">Edit</a></td>
          </tr>
             ))}
        </tbody>
      </table>
    </div>
  )
}

export default Student;