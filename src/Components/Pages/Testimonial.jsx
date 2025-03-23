import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Selena",
    role: "Student",
    image: "/img/testimonial-1.jpg",
    text: "The video lectures are clear and concise, and the quizzes are helpful for reviewing material."
  },
  {
    id: 2,
    name: "Cris Levon",
    role: "Student",
    image: "/img/testimonial-2.jpg",
    text: "The e-learning site has a user-friendly interface and a diverse range of courses to choose from."
  },
  {
    id: 3,
    name: "Magnus Carlson",
    role: "Student",
    image: "/img/testimonial-3.jpg",
    text: "The video content is engaging and easy to follow, and the quizzes are beneficial for self-assessment."
  },
  {
    id: 4,
    name: "Nyra Carl",
    role: "Student",
    image: "/img/testimonial-4.jpg",
    text: "It would be helpful to have more interactive elements, such as live Q&A sessions with instructors."
  }
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Testimonial
          </h6>
          <h1 className="mb-5">Our Students Say!</h1>
        </div>

        <div className="testimonial-item text-center">
          <img
            className="border rounded-circle p-2 mx-auto mb-3"
            src={testimonials[currentIndex].image}
            style={{ width: "80px", minHeight: "80px" }}
          />
          <h5 className="mb-0">{testimonials[currentIndex].name}</h5>
          <p>{testimonials[currentIndex].role}</p>
          <div className="testimonial-text bg-light text-center p-4">
            <p className="mb-0">{testimonials[currentIndex].text}</p>
          </div>
        </div>

        <div className="text-center mt-4">
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`mx-1 d-inline-block rounded-circle`}
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: index === currentIndex ? "#FF782D" : "#ccc",
                cursor: "pointer",
                transition: "background-color 0.3s ease"
              }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
