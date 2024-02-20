import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const ContactForm = ({ handleSubmit }) => {
  const initialFormData = {
    fullName: "",
    subject: "",
    email: "",
    body: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (formData.fullName.length < 3) {
      newErrors.fullName = "Minimum 3 characters required";
    }
    if (formData.subject.length < 3) {
      newErrors.subject = "Minimum 3 characters required";
    }
    if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      newErrors.email = "Invalid email address";
    }
    if (formData.body.length < 3) {
      newErrors.body = "Minimum 3 characters required";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setTimeout(() => {
        setFormSubmitted(true);
        console.log(formData);
        setFormData(initialFormData);
        setTimeout(() => {
          setFormSubmitted(false);
        }, 3000);
      }, 1000);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmitForm}>
        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            isInvalid={!!errors.fullName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.fullName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            isInvalid={!!errors.subject}
          />
          <Form.Control.Feedback type="invalid">
            {errors.subject}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="body">
          <Form.Label>Your message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="body"
            value={formData.body}
            onChange={handleChange}
            isInvalid={!!errors.body}
          />
          <Form.Control.Feedback type="invalid">
            {errors.body}
          </Form.Control.Feedback>
        </Form.Group>

        <Button className="contact-submit" variant="primary" type="submit">
          Send
        </Button>
      </Form>

      {formSubmitted && (
        <div className="alert alert-success mt-3" role="alert">
          Your message was sent!
        </div>
      )}
    </div>
  );
};

export default ContactForm;
