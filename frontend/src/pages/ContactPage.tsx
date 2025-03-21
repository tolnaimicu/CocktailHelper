import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../style/ContactPageStyle.css'; // Import the CSS file for ContactPage styles

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' }); // Clear errors as the user types
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    const errors: any = {};
    if (!formData.name) errors.name = 'Name is required.';
    if (!formData.email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address.';
    }
    if (!formData.message) errors.message = 'Message is required.';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! This is just a demo form.');
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className="contact-page-container">
      <NavBar />
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>If you have any questions, feedback, or just want to say hello, feel free to reach out using the form below!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
            />
            {formErrors.name && <p className="error-message">{formErrors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
            {formErrors.email && <p className="error-message">{formErrors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter your message"
              rows={5}
            />
            {formErrors.message && <p className="error-message">{formErrors.message}</p>}
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;