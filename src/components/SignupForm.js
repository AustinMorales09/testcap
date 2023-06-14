import React, { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    // Send the user data to the server using an API endpoint
    fetch('http://localhost:5000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('User data saved:', data);
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        console.error('Error saving user data:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
