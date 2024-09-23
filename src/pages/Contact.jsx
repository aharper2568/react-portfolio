import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("All fields are required");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage("Invalid email address");
    } else {
      setErrorMessage("");
      console.log("Form submitted:", formData);
    }
  };
  return (
    <section className="form-group" id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control m-1"
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleInputChange}
          value={formData.name}
        />
        <input
          // type="email"
          className="form-control m-1"
          name="email"
          placeholder="Your Email"
          onChange={handleInputChange}
          value={formData.email}
        />
        <textarea
          className="form-control m-1"
          name="message"
          placeholder="Your Message"
          onChange={handleInputChange}
          value={formData.message}
        />
        <button className="btn btn-success" type="submit">
          Send
        </button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </section>
  );
}
