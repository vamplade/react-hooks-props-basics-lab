import React from "react";
import students from "./data/students";
import Student from "./components/Student";
import "./App.css";

function App() {
    return ( <
        div className = "App" >
        <
        h1 > Student List < /h1> <
        div className = "student-list" > {
            students.map((student, index) => ( <
                Student key = { index }
                student = { student }
                />
            ))
        } <
        /div> <
        /div>
    );
}

export default App;