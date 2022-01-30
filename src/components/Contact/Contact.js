import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../Navbar/Navbar";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w5tmop8",
        "template_ww2gj0i",
        form.current,
        "user_CDTdXnHSC8gYiokPQzGBY"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Sent!!!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Navbar />

      <div className="container py-4">
        <form
          ref={form}
          id="contactForm"
          onSubmit={sendEmail}
          data-sb-form-api-token="API_TOKEN"
        >
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              className="form-control"
              id="name"
              type="text"
              placeholder="Name"
              data-sb-validations="required"
              name="user_name"
            />
            <div className="invalid-feedback" data-sb-feedback="name:required">
              Name is required.
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="emailAddress">
              Email Address
            </label>
            <input
              className="form-control"
              id="emailAddress"
              type="email"
              placeholder="Email Address"
              data-sb-validations="required, email"
              name="user_email"
            />
            <div
              className="invalid-feedback"
              data-sb-feedback="emailAddress:required"
            >
              Email Address is required.
            </div>
            <div
              className="invalid-feedback"
              data-sb-feedback="emailAddress:email"
            >
              Email Address Email is not valid.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Subject
            </label>
            <input
              className="form-control"
              id="Subject"
              type="text"
              placeholder="Subject"
              data-sb-validations="required"
              name="subject"
            />
            <div className="invalid-feedback" data-sb-feedback="name:required">
              Name is required.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              type="text"
              placeholder="Message"
              style={{ height: "10rem" }}
              data-sb-validations="required"
              name="message"
              defaultValue={""}
            />
            <div
              className="invalid-feedback"
              data-sb-feedback="message:required"
            >
              Message is required.
            </div>
          </div>

          <div className="d-none" id="submitSuccessMessage">
            <div className="text-center mb-3">Form submission successful!</div>
          </div>

          <div className="d-none" id="submitErrorMessage">
            <div className="text-center text-danger mb-3">
              Error sending message!
            </div>
          </div>

          <div className="d-grid">
            <button
              className="btn btn-primary btn-lg"
              id="submitButton"
              type="submit"
              value="Send"
            >
              Send Email
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
