import React from "react";

export default function Footer() {
  return (
    <>
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Quick Link</h4>
              <a className="btn btn-link">
                About Us
              </a>
              <a className="btn btn-link" >
                Contact Us
              </a>
              <a className="btn btn-link" >
                Privacy Policy
              </a>
              <a className="btn btn-link" >
                Terms &amp; Condition
              </a>
              <a className="btn btn-link" >
                FAQs &amp; Help
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Contact</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                Ho Chi Minh City, Vietnam.
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                Tel: <a href="tel:+12325005678988">+ (123) 2500-567-8988</a>
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                Mail: <a href="mailto:supportlms@gmail.com">supportlms@gmail.com</a>
              </p>

              <div className="d-flex pt-2">
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.youtube.com/@mindxtechnologyschool9210"
                  target="_blank"
                >
                  <i className="fab fa-youtube" />
                </a>
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.facebook.com/mindxschool"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://github.com/khoatranpc/mindx-community-be"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </a>
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.linkedin.com/jobs/search/?currentJobId=4185453478&geoId=104195383&keywords=mindx&origin=JOB_SEARCH_PAGE_SEARCH_BUTTON&refresh=true"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Gallery</h4>
              <div className="row g-2 pt-2">
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="/img/course-1.jpg"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="/img/course-2.jpg"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="/img/course-3.jpg"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="/img/course-2.jpg"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="/img/course-3.jpg"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="/img/course-1.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Newsletter</h4>
              <p>
                This website is a Final Year project of IT Department DSCET,
                VietNam.
              </p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
                <p>Copyright © 2024 LearnPress LMS | Powered by ThimPress</p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a >Home</a>
                  <a >Cookies</a>
                  <a >Help</a>
                  <a >FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
