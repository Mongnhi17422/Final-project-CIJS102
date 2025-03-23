import React from 'react';
import Navbar from '../Pages/Navbar';
import Footer from '../Pages/Footer';
import Coursecart from './Coursecart';

const courses = [
    { link: "http://localhost:8080/App%20Developer/Day%20-%2014%20(09_07_23)%20js/19.%20JavaScript%20(Part%20-%201)/01.%20Introduction.mp4", title: "01. Introduction", desc: "Introduction of JavaScript" },
    { link: "http://localhost:8080/App%20Developer/Day%20-%2014%20(09_07_23)%20js/19.%20JavaScript%20(Part%20-%201)/03.%20What%20is%20a%20Variable_.mp4", title: "02. Variable", desc: "Learn what is variable." },
    { link: "http://localhost:8080/App%20Developer/Day%20-%2014%20(09_07_23)%20js/19.%20JavaScript%20(Part%20-%201)/04.%20Data%20Types%20in%20JS.mp4", title: "03. Data types", desc: "Data Types in JS" },
    { link: "http://localhost:8080/App%20Developer/Day%20-%2014%20(09_07_23)%20js/19.%20JavaScript%20(Part%20-%201)/05.%20Numbers%20in%20JS.mp4", title: "04. Numbers", desc: "Numbers in JS" },
    { link: "http://localhost:8080/App%20Developer/Day%20-%2014%20(09_07_23)%20js/19.%20JavaScript%20(Part%20-%201)/06.%20Operations%20in%20JS.mp4", title: "05. Operations", desc: "Operations in JS" },
    { link: "http://localhost:8080/App%20Developer/Day%20-%2014%20(09_07_23)%20js/19.%20JavaScript%20(Part%20-%201)/08.%20Operator%20Precedence.mp4", title: "06. Operator Precedence", desc: "Operator Precedence in JavaScript" },
    { link: "http://localhost:8080/App%20Developer/Day%20-%2014%20(09_07_23)%20js/19.%20JavaScript%20(Part%20-%201)/15.%20What%20is%20TypeScript_.mp4", title: "07. What is TypeScript_", desc: "Introduction of TypeScript" },
    { link: "http://localhost:8080/App%20Developer/Day%20-%2015%20(11_07_23)/20.%20JavaScript%20(Part%202)/03.%20Template%20Literals.mp4", title: "08. Template Literals", desc: "Introduction of Template Literals" },
    { link: "http://localhost:8080/App%20Developer/Day%20-%2015%20(11_07_23)/20.%20JavaScript%20(Part%202)/02.%20Linking%20JS%20File.mp4", title: "09. Linking JS File", desc: "Introduction of Linking JS File" },
    { link: "http://localhost:8080/App%20Developer/Day%20-%2015%20(11_07_23)/20.%20JavaScript%20(Part%202)/04.%20Operators%20in%20JS.mp4", title: "10. Operators", desc: "Introduction of Operators in JS" },
    { link: "http://localhost:8080/App%20Developer/Day%20-%2015%20(11_07_23)/20.%20JavaScript%20(Part%202)/13.%20Nested%20if-else.mp4", title: "11. Nested if-else", desc: "If else and Nested if-else in JS" },
    { link: "http://localhost:8080/App%20Developer/Day%20-%2015%20(11_07_23)/20.%20JavaScript%20(Part%202)/17.%20Switch%20Statement.mp4", title: "12. Switch Statement", desc: "Introduction of Switch Statement" },
    { link: "http://localhost:8080/App%20Developer/Day%20-%2015%20(11_07_23)/20.%20JavaScript%20(Part%202)/19.%20Alerts%20&%20Prompts.mp4", title: "13. Alerts & Prompts", desc: "Learn about Alerts & Prompts in JS" },
    { link: "http://localhost:8080/App%20Developer/Day%20-%2015%20(11_07_23)/20.%20JavaScript%20(Part%202)/01.%20console.log( ).mp4", title: "14. console.log()", desc: "Introduction of console.log()" },
    { link: "http://localhost:8080/App%20Developer/Day%20-%2016%20(13_07_23)/21.%20JavaScript%20(Part%203)/01.%20String%20Methods.mp4", title: "15. String methods", desc: "String and their methods in JS" },
];

export default function Javascript() {
    return (
        <>
            <Navbar />

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center">
                        <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                        <h1 className="mb-5">Javascript Full Course Tutorial</h1>
                    </div>
                    <div className="row g-2 justify-content-center">
                        {courses.map((course, index) => (
                            <Coursecart key={index} {...course} />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
