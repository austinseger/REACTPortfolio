import React, { useState } from 'react';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formState.name) newErrors.name = 'Name is required';
    if (!formState.email || !validateEmail(formState.email)) newErrors.email = 'Valid email is required';
    if (!formState.message) newErrors.message = 'Message is required';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted', formState);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          onBlur={() => {
            if (!formState.name) setErrors({ ...errors, name: 'Name is required' });
          }}
        />
        {errors.name && <span>{errors.name}</span>}
        
        <input
          type="email"
          placeholder="Email"
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          onBlur={() => {
            if (!formState.email || !validateEmail(formState.email)) setErrors({ ...errors, email: 'Valid email is required' });
          }}
        />
        {errors.email && <span>{errors.email}</span>}

        <textarea
          placeholder="Message"
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          onBlur={() => {
            if (!formState.message) setErrors({ ...errors, message: 'Message is required' });
          }}
        />
        {errors.message && <span>{errors.message}</span>}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
