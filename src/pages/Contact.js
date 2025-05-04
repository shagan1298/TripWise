import React, { useState } from "react";
import "../styles/Contact.css";

const ContactInputBox = ({ type, name, placeholder }) => {
  return (
    <div className="contact-input-box">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="contact-input"
        required
      />
    </div>
  );
};

const ContactTextArea = ({ row, name, placeholder }) => {
  return (
    <div className="contact-input-box">
      <textarea
        rows={row}
        placeholder={placeholder}
        name={name}
        className="contact-textarea"
        required
      ></textarea>
    </div>
  );
};

const Contact = () => {
  const [messageVisible, setMessageVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show thank you message
    setMessageVisible(true);

    // Optional: Clear the form manually
    e.target.reset();

    // Hide after 5 seconds
    setTimeout(() => {
      setMessageVisible(false);
    }, 5000);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <span className="contact-info-title">Contact Us</span>
            <h2 className="contact-info-heading">GET IN TOUCH WITH US</h2>
            <p className="contact-info-text">
              Have questions about managing your travel budget? Need assistance with
              our planning tool or want to share feedback? Reach out to us! We're
              here to help you make the most of your travel expenses.
            </p>

            <div className="contact-info-item">
              <div className="contact-info-icon-container">
                <span className="contact-info-icon">&#128205;</span>
              </div>
              <div className="contact-info-details">
                <h4>Our Location</h4>
                <p>We operate online to assist you with your travel budget planning.</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon-container">
                <span className="contact-info-icon">&#9742;</span>
              </div>
              <div className="contact-info-details">
                <h4>Phone Number</h4>
                <p>
                  While we primarily offer support online, you can reach us via
                  email for any urgent inquiries.
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon-container">
                <span className="contact-info-icon">&#9993;</span>
              </div>
              <div className="contact-info-details">
                <h4>Email Address</h4>
                <p>tripwise.support@gmail.com</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <ContactInputBox type="text" name="name" placeholder="Your Name" />
            <ContactInputBox type="email" name="email" placeholder="Your Email" />
            <ContactInputBox type="text" name="subject" placeholder="Subject" />
            <ContactTextArea row="5" name="message" placeholder="Your Message" />
            <button type="submit" className="contact-button">
              Send Message
            </button>
            {messageVisible && (
              <p className="form-message">
                Thank you! We'll get back to you shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
