import React, { useState } from "react";
import { registerUser } from "../api/mockApi";

function RegistrationForm() {
  // State management
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Improved validation
    if (!username.trim()) {
      setError("Username is required!");
      return;
    }
    if (!email.trim()) {
      setError("Email is required!");
      return;
    }
    if (!password.trim()) {
      setError("Password is required!");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email!");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const result = await registerUser({ username, email, password });
      console.log("Registration successful:", result);
      alert(`User ${username} registered successfully!`);
      // Reset form
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Registration Form (Controlled)</h2>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
