import React from "react";

export const Error = ({ title, error, message }) => (
  <section className="ftco-section">
    <div className="container mt-5">
      <div className="row justify-content-center mb-5 pb-5">
        <div className="col-md-7 text-center heading-section ftco-animate">
          <span>{title}</span>
          <h2>{error}</h2>
          <h3>{message}</h3>

          <br />

          <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => {
              window.history.back();
            }}
          >
            <span>
              <i className="icon-arrow-left"></i> Go Back
            </span>
          </button>
        </div>
      </div>

      <div className="row"></div>
    </div>
  </section>
);
