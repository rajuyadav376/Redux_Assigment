import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../Features/Studentslice";

const Store = configureStore({
  reducer: {
    students: studentReducer,
  },
});

export default Store;