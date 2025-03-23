import React, { useState } from 'react';
import '../component.css/StudentPage.css'
function StudentPage() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");
    const [batch, setBatch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data:", { name, age, course, batch });
       
    };

    return (
        <>
         
            <form onSubmit={handleSubmit}>
                <h1>Student Form :-</h1>
                <div className='page-container'>
                    <div className="box1">
                <div className='name'>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className='course'>
                    <label htmlFor="course">Course:</label>
                    <input
                        type="text"
                        id="course"
                        placeholder="Enter your Course"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    />
                </div>
                </div>
        <div className="box2">
                <div className='age'>
                    <label htmlFor="age">Age:</label>
                    <input
                        type="text"
                        id="age"
                        placeholder="Enter your age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>

                <div className='batch'>
                    <label htmlFor="batch">Batch:</label>
                    <input
                        type="text"
                        id="batch"
                        placeholder="Enter your Batch"
                        value={batch}
                        onChange={(e) => setBatch(e.target.value)}
                    />
                </div>
                </div>

                <button type="submit">Submit</button>
            </div>

            </form>
        </>
    );
}

export default StudentPage;
