import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formUrl = 'https://api.web3forms.com/submit';

    const formPayload = new FormData();
    formPayload.append('access_key', '0fa1421c-51b5-4028-a695-aebc84d71828'); // Your Web3Forms access key
    formPayload.append('name', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('message', formData.message);

    try {
      const response = await fetch(formUrl, {
        method: 'POST',
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        setStatus('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Oops! Something went wrong. Please try again.');
    }
  };

  return (
    <div className="py-6 px-20 text-center">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p className="mt-4 text-gray-600">Feel free to reach out to me via email or social media.</p>

      {/* Display form submission status */}
      {status && <p className="mt-4 text-lg text-green-500">{status}</p>}

      {/* Contact Form */}
      <form
        className="mt-6 space-y-4 max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-2 border rounded-md"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full h-[100px] p-2 border rounded-md"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
