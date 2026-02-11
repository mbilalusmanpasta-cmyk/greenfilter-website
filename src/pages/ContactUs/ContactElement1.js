import { Grid } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import gradient from "../../assets/green-gradient-blue.png";
import { getForm2 } from "../../data/store";
import Button1 from "../../components/Button1";
import axios from "axios";

const ContactElement1 = () => {
  const formFields = getForm2();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = (data) => {
    const newErrors = {};

    if (!data.first_name || data.first_name.trim().length < 2) {
      newErrors.first_name = "First name must be at least 2 characters";
    } else if (data.first_name.length > 50) {
      newErrors.first_name = "First name must be less than 50 characters";
    }

    if (!data.last_name || data.last_name.trim().length < 2) {
      newErrors.last_name = "Last name must be at least 2 characters";
    } else if (data.last_name.length > 50) {
      newErrors.last_name = "Last name must be less than 50 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!data.message || data.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (data.message.length > 2000) {
      newErrors.message = "Message must be less than 2000 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    setSubmitStatus(null);

    try {
      await axios.post('https://greenfilter-api.codingtier.com/contact', formData);
      setSubmitStatus('success');
      setFormData({ first_name: "", last_name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus('error');
      setErrors({ submit: error.response?.data?.message || 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ContactElement1Wrapper gradient={gradient}>
        <div className="titles-div">
          <h1 className="main-header">Contact Us</h1>
          <p className="large-paragraph gray reviews">
            Need help with your green filter? Need a specific one for your make
            and model? We're here to help.
          </p>
        </div>

        {submitStatus === 'success' && (
          <div className="success-message">
            Thank you for contacting us! We'll get back to you soon.
          </div>
        )}

        {errors.submit && (
          <div className="error-message">
            {errors.submit}
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          <Grid container spacing={2}>
            {formFields.map((field) => (
              <Grid item xs={12} key={field.id}>
                <div className="form-field">
                  <label className="label">{field.label}</label>
                  {field.type === 'textarea' ? (
                    <textarea
                      className="w-input"
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      rows={5}
                    />
                  ) : (
                    <input
                      type={field.type}
                      className="w-input"
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                    />
                  )}
                  {errors[field.name] && (
                    <div className="field-error">{errors[field.name]}</div>
                  )}
                </div>
              </Grid>
            ))}
            <Grid item xs={12}>
              <div className="submit-button-wrapper">
                <Button1
                  text={isSubmitting ? "Sending..." : "Send Message"}
                  disabled={isSubmitting}
                />
              </div>
            </Grid>
          </Grid>
        </form>
      </ContactElement1Wrapper>
    </>
  );
};

export default ContactElement1;

const ContactElement1Wrapper = styled.div`
  position: relative;
  margin-top: 0%;
  padding: 5% 5% 20%;
  background-color: #fff;
  background-image: url(${(props) => props.gradient});
  background-position: 50% 100%;
  background-size: contain;
  background-repeat: no-repeat;
  text-align: center;

  .contact-form {
    max-width: 700px;
    margin: 0 auto;
  }

  .form-field {
    margin-bottom: 8px;
  }

  .success-message {
    background-color: #4caf50;
    color: white;
    padding: 12px 20px;
    margin: 15px auto 20px;
    border-radius: 4px;
    max-width: 700px;
    text-align: center;
    font-size: 15px;
  }

  .error-message {
    background-color: #f44336;
    color: white;
    padding: 12px 20px;
    margin: 15px auto 20px;
    border-radius: 4px;
    max-width: 700px;
    text-align: center;
    font-size: 15px;
  }

  .field-error {
    color: #f44336;
    font-size: 13px;
    margin-top: 4px;
    text-align: left;
  }

  .label {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: #333;
    margin-bottom: 6px;
    display: block;
    text-align: left;
  }

  .w-input {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #d0d0d0;
    border-radius: 3px;
    font-size: 15px;
    font-family: 'Lato', sans-serif;
    color: #333;
    transition: border-color 0.2s;
    background-color: #fafafa;
  }

  .w-input:focus {
    outline: none;
    border-color: #4caf50;
    background-color: #fff;
  }

  textarea.w-input {
    resize: vertical;
    min-height: 100px;
  }

  .submit-button-wrapper {
    text-align: center;
    margin-top: 15px;
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 767px) {
    .contact-form {
      max-width: 100%;
    }
  }
`;
