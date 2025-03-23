import { createSlice, nanoid } from "@reduxjs/toolkit";


const Studentslice = createSlice({
    name: "student",
    initialState: [{}],
    reducers: {
        // addStudent: (state, action) => {
        //     const { name, age, course, batch } = action.payload;
        //     const newStudent = { id: nanoid(), name, age, course, batch };
        //     state.students.push(newStudent);
        // },
        // updateStudent: (state, action) => {
        //     const { id, key, value } = action.payload;
        //     const student = state.students.find((s) => s.id === id);
        //     if (student) {
        //         student[key] = value;
        //     }
        // },
        // deleteStudent: (state, action) => {
        //     state.students = state.students.filter(student => student.id !== action.payload);
        // }
    },
});
export const { addStudent ,updateStudent, deleteStudent } = Studentslice.actions;
export default Studentslice.reducer;