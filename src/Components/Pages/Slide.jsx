import React from "react";
import { Link } from "react-router-dom";

export default function Slide() {
  return (
    <>
      <div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className=" position-relative">
              <img  src="/img/banner.png" />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "rgba(24, 29, 56, .3)" }}
              >
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-sm-8 col-lg-6">
                      <h6 className="text-white text-uppercase mb-2 ">
                        Best Online Courses
                      </h6>
                      <h1 className="display-4 text-white ">
                        The Best Online Learning Platform
                      </h1>
                      <p className="fs-5 text-white mb-4 pb-2">
                        Welcome to EduPress, your gateway to limitless learning!
                        Discover a world of knowledge with our wide range of
                        courses designed to empower and inspire. Start your
                        learning journey today and unlock your full potential!{" "}
                      </p>
                      <Link
                        to=""
                        className="btn btn-primary py-md-3 px-md-3 me-4 "
                      >
                        Read More
                      </Link>
                      <Link
                        to="/courses"
                        className="btn btn-primary py-md-3 px-md-4"
                      >
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

       
        </div>

        
      </div>
    </>
  );
}
