import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  return (
    <div className="container mt-4">
      <h2>Contact</h2>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })} />

        <input className="form-control mb-2" placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />

        <textarea className="form-control mb-2" placeholder="Message"
          onChange={(e) => setForm({ ...form, message: e.target.value })} />

        <button className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}

export default Contact;