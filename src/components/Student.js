import React from "react";
import "./Student.css"; // Styling

function Student({ student }) {
    return ( <
        div className = "student-card" >
        <
        img src = { student.photo }
        alt = { student.name }
        className = "student-photo" /
        >
        <
        h2 className = "student-name" > { student.name } < /h2> <
        p > < strong > Age: < /strong> {student.age}</p >
        <
        p > < strong > Course: < /strong> {student.course}</p >
        <
        /div>
    );
}

export default Student;