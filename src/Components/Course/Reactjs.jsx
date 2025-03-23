import React from 'react';
import Navbar from '../Pages/Navbar';
import Footer from '../Pages/Footer';
import Coursecart from './Coursecart';

const courseData = [
    { link: "http://localhost:8080/App Developer/Day - 56 (30_10_23)/62. React (Part 1)/01. What is React_.mp4", title: "01. What is React JS", desc: "Introduction of React js." },
    { link: "http://localhost:8080/App Developer/Day - 56 (30_10_23)/62. React (Part 1)/02. What is JSX_.mp4", title: "02. What is JSX", desc: "Introduction of React js and JSX" },
    { link: "http://localhost:8080/App Developer/Day - 56 (30_10_23)/62. React (Part 1)/03. Set up Local Environment.mp4", title: "03. Set up Local Environment", desc: "Set up Local Environment for React js" },
    { link: "http://localhost:8080/App Developer/Day - 56 (30_10_23)/62. React (Part 1)/04. Understanding our App.mp4", title: "04. Understanding our App", desc: "Understanding our App and their components" },
    { link: "http://localhost:8080/App Developer/Day - 56 (30_10_23)/62. React (Part 1)/06. Our 1st Component.mp4", title: "05. Our 1st Component", desc: "Writing Our 1st Component in Jsx" },
    { link: "http://localhost:8080/App Developer/Day - 57 (01_11_23)/63. React (Part 2)/01. React Props.mp4", title: "11. React Props", desc: "Props in React" },
    { link: "http://localhost:8080/App Developer/Day - 57 (01_11_23)/63. React (Part 2)/02. Passing Arrays to Props.mp4", title: "12. Passing Arrays to Props", desc: "Passing Arrays to Props in react components" },
    { link: "http://localhost:8080/App Developer/Day - 58 (03_11_23)/64. React (Part 3)/04. State in React.mp4", title: "17. State in React", desc: "Learn about State in React and their uses." },
    { link: "http://localhost:8080/App Developer/Day - 58 (03_11_23)/64. React (Part 3)/05. Hooks.mp4", title: "18. Hooks", desc: "Learn About Hooks in react" },
    { link: "http://localhost:8080/App Developer/Day - 58 (03_11_23)/64. React (Part 3)/06. useState( ).mp4", title: "19. useState()", desc: "Learn About useState() and its use" }
];

export default function Reactjs() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="text-center">
                    <h6 className="section-title bg-white text-center text-primary px-3">Course</h6>
                    <h1 className="mb-5">Full React Js Course</h1>
                </div>
                <div className="row g-2 justify-content-center">
                    {courseData.map((course, index) => (
                        <Coursecart key={index} link={course.link} title={course.title} desc={course.desc} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}