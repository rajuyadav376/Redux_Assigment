import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../Features/Studentslice";

const store = configureStore({
  reducer: {
    student: studentReducer,
  },
});

export default store;
