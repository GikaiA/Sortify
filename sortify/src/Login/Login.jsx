import React, { useState } from "react";
import "./Login.css";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => onLogin(user.user))
      .catch((err) => alert(err.message));
  };

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => onLogin(user.user))
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={login}>Login</button>
      <button onClick={signup}>Sign Up</button>{" "}
    </div>
  );
}

export default Login;
