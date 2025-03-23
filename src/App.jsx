// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Component/Home";
// import Navbar from "./Component/Navbar";
// import Student from "./Component/Student";
// import Contact from "./Component/Contact";

import StudentPage from "./Component/StudentPage";


function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </BrowserRouter> */}
      <StudentPage/>
    </>
  );
}

export default App;