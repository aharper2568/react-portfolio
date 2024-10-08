import { useState } from "react";
// import "bootswatch/dist/cosmo/bootstrap.min.css";
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
      return document.getElementById("success").innerHTML = `Message Sent!`
      
    }
  };
  return (
    <section className="form-group" id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control m-2"
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleInputChange}
          value={formData.name}
        />
        <input
          // type="email"
          className="form-control m-2"
          name="email"
          placeholder="Your Email"
          onChange={handleInputChange}
          value={formData.email}
        />
        <textarea
          className="form-control m-2"
          name="message"
          placeholder="Your Message"
          onChange={handleInputChange}
          value={formData.message}
        />
        <button className="btn btn-primary m-1" type="submit">
          Send
        </button>
      </form>
      <p className={errorMessage ? "" : "bg-success w-25"} id="success"></p>
      {errorMessage && <p className="bg-warning w-25">{errorMessage}</p>}
    </section>
  );
}
