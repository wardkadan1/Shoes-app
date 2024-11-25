/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { emailApass } from "./fetch";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    emailApass(setUsers, setError);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = users.find((u) => u.email === email && u.pass === password);
    if (user) {
      setUser(user);
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="loginpage">
      <form className="container" onSubmit={handleLogin}>
        <section className="box">
          <label className="email" htmlFor="Email">
            Email
          </label>
          <input
            type="email"
            name="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            name="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn" type="submit">
            Login
          </button>
          <p className="error">sad</p>
        </section>
      </form>
      <p className="error">{error}</p>
    </div>
  );
}
