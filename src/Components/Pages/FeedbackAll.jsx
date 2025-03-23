import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";

const StarRating = ({ rating, onChange }) => {
  return (
    <div className="rating-container">
      {[1, 2, 3, 4, 5].map((star) => (
        <i
          key={star}
          className="fa-solid fa-star"
          style={{
            fontSize: "1.5rem",
            cursor: onChange ? "pointer" : "default",
            color: star <= rating ? "#FFD700" : "#ccc",
            marginRight: "5px",
            transition: "color 0.3s ease-in-out",
          }}
          onClick={onChange ? () => onChange(star) : undefined}
        ></i>
      ))}
    </div>
  );
};

export default function FeedbackAll() {
  const [value, setValue] = useState(5);
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    setFeedbackData(JSON.parse(localStorage.getItem("feedbacks")) || []);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      id: Date.now(),
      name: e.target.name.value,
      comment: e.target.comment.value,
      image: e.target.image.value || "https://img.freepik.com/premium-vector/user-icons-includes-user-icons-people-icons-symbols-premiumquality-graphic-design-elements_981536-526.jpg",
      rating: value,
      date: new Date().toISOString(),
    };

    const updatedFeedbacks = [...feedbackData, newFeedback];
    localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbacks));
    setFeedbackData(updatedFeedbacks);
    e.target.reset();
    setValue(5);
  };

  const handleDelete = (id) => {
    const updatedFeedbacks = feedbackData.filter((fb) => fb.id !== id);
    localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbacks));
    setFeedbackData(updatedFeedbacks);
  };

  return (
    <>
      <Navbar />
      <Header name="Feedbacks" />

      <div className="container mt-4">
        <div className="row mt-4">
          <h1 className="text-center">Give your Feedback</h1>
          <form onSubmit={handleSubmit} className="col-md-6 offset-md-3 mb-4">
            <input name="name" placeholder="Name" required className="form-control mb-3" />
            <input name="comment" placeholder="Enter Your Feedback" required className="form-control mb-3" />
            <input name="image" placeholder="Enter Your Image URL" className="form-control mb-3" />

            <label style={{ fontWeight: "bold" }}>Rating</label>
            <StarRating rating={value} onChange={setValue} />

            <button className="btn btn-primary mt-3">Submit</button>
          </form>
        </div>

        <div className="text-center">
          <h6 className="section-title bg-white text-primary px-3">All Feedbacks of Users</h6>
          <h1 className="mb-5">All Feedbacks</h1>
        </div>

        <div className="row offset-md-2">
          {feedbackData.map((feedback) => (
            <div key={feedback.id} className="col-md-5 ms-2 mt-3 card mb-3 position-relative" style={{ maxWidth: "540px" }}>
              <i
                className="fa-solid fa-times position-absolute text-danger"
                style={{ right: "15px", top: "15px", cursor: "pointer", fontSize: "1.2rem" }}
                onClick={() => handleDelete(feedback.id)}
              ></i>

              <div className="row g-0">
                <div className="col-md-3 mt-3 text-center">
                  <img src={feedback.image} className="border rounded-circle p-2 mx-auto mb-3" style={{ width: "6rem", height: "6rem" }} />
                </div>
                <div className="col-md-8">
                  <p className="card-text mb-0 ps-3">
                    <small className="text-body-secondary">
                      {new Date(feedback.date).toLocaleDateString("vi-VN")}
                    </small>
                  </p>
                  <div className="card-body pt-0 mt-0">
                    <p className="card-text p-0 fw-bold">{feedback.name}</p>
                    <p className="card-text">{feedback.comment}</p>
                    <StarRating rating={feedback.rating} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
