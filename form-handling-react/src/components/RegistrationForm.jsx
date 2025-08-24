import { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!form.username) validationErrors.username = "Username required";
    if (!form.email) validationErrors.email = "Email required";
    if (!form.password) validationErrors.password = "Password required";
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", form);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" value={form.username} onChange={handleChange} />
      {errors.username && <span>{errors.username}</span>}
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      {errors.email && <span>{errors.email}</span>}
      <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
      {errors.password && <span>{errors.password}</span>}
      <button type="submit">Register</button>
    </form>
  );
}
