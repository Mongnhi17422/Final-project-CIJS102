import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Pages/Home";
import About1 from "./Components/Routes/About1";
import Courses1 from "./Components/Routes/Courses1";
import Testimonial1 from "./Components/Routes/Testimonial1";
import Contact1 from "./Components/Routes/Contact1";
import ErrorPage from "./Components/Pages/ErrorPage";
import SignIn from "./Components/Pages/Sign";
import SignUp from "./Components/Pages/Register";
import Fullstack from "./Components/Course/Fullstack";
import Reactjs from "./Components/Course/Reactjs";
import Javascript from "./Components/Course/Javascript";
import Test from "./Components/Pages/Test";
import FullstackQuiz from "./Components/Quiz/FullstackQuiz";
import Profile from "./Components/Pages/Profile";
import FeedbackAll from "./Components/Pages/FeedbackAll";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About1 />} />
          <Route path="/courses" element={<Courses1 />} />
          <Route path="/testimonial" element={<Testimonial1 />} />
          <Route path="/contact" element={<Contact1 />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/signin" element={<SignIn />} />

          <Route path="/register" element={<SignUp />} />
          
          <Route path="/profile" element={<Profile />} />

          <Route path="/test" element={<Test />} />
          <Route path="/test/fullstack" element={<FullstackQuiz />} />


          

          <Route path="/courses/fullstack" element={<Fullstack />} />
          <Route path="/courses/fullstack/react" element={<Reactjs />} />
          <Route
            path="/courses/fullstack/javascript"
            element={<Javascript />}
          />
          

          <Route path="/feedback" element={<FeedbackAll />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
