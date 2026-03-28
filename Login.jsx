// Login.jsx
// This page allows users to log in, register, and change their password.
// Password rules are checked on the front end for this week's assignment.

import { useState } from "react";

// Password complexity rule:
// At least 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character.
const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?]).{8,}$/;

export default function Login() {
  // Controls which form is shown to the user.
  const [mode, setMode] = useState("login");

  // Demo user list for this week's front-end assignment.
  // Later, this can be replaced with Neon database data.
  const [users, setUsers] = useState([
    {
      email: "manager@lumiere.com",
      password: "Admin123!",
    },
  ]);

  // Login form data.
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Registration form data.
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Change-password form data.
  const [changePasswordData, setChangePasswordData] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  // Message area used to give feedback to the user.
  const [message, setMessage] = useState("");

  function handleLoginChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  function handleRegisterChange(e) {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  }

  function handleChangePasswordChange(e) {
    setChangePasswordData({
      ...changePasswordData,
      [e.target.name]: e.target.value,
    });
  }

  function handleLoginSubmit(e) {
    e.preventDefault();

    // Look for a user whose email and password match.
    const matchedUser = users.find(
      (user) =>
        user.email.toLowerCase() === loginData.email.toLowerCase() &&
        user.password === loginData.password
    );

    if (matchedUser) {
      setMessage("Login successful.");
    } else {
      setMessage("Invalid email or password.");
    }
  }

  function handleRegisterSubmit(e) {
    e.preventDefault();

    // Make sure the passwords match.
    if (registerData.password !== registerData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    // Check password complexity.
    if (!passwordPattern.test(registerData.password)) {
      setMessage(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    // Prevent duplicate account creation.
    const existingUser = users.find(
      (user) => user.email.toLowerCase() === registerData.email.toLowerCase()
    );

    if (existingUser) {
      setMessage("An account with this email already exists.");
      return;
    }

    // Add the new user to the demo user list.
    setUsers([
      ...users,
      {
        email: registerData.email,
        password: registerData.password,
      },
    ]);

    setMessage("Registration successful. You can now log in.");

    setRegisterData({
      email: "",
      password: "",
      confirmPassword: "",
    });

    setMode("login");
  }

  function handleChangePasswordSubmit(e) {
    e.preventDefault();

    // Check new password confirmation.
    if (
      changePasswordData.newPassword !== changePasswordData.confirmNewPassword
    ) {
      setMessage("New passwords do not match.");
      return;
    }

    // Check complexity on the new password.
    if (!passwordPattern.test(changePasswordData.newPassword)) {
      setMessage(
        "New password must be at least 8 characters and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    // Check if the user exists and the old password matches.
    const userIndex = users.findIndex(
      (user) =>
        user.email.toLowerCase() === changePasswordData.email.toLowerCase() &&
        user.password === changePasswordData.oldPassword
    );

    if (userIndex === -1) {
      setMessage("Email or current password is incorrect.");
      return;
    }

    // Update the selected user's password.
    const updatedUsers = [...users];
    updatedUsers[userIndex].password = changePasswordData.newPassword;
    setUsers(updatedUsers);

    setMessage("Password updated successfully.");

    setChangePasswordData({
      email: "",
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });

    setMode("login");
  }

  return (
    <section className="page">
      <div className="container auth-wrapper">
        <div className="auth-card">
          <p className="eyebrow">Account Access</p>
          <h1>Login, Register, or Change Password</h1>
          <p>
            Use the tabs below to sign in, create an account, or update your
            password.
          </p>

          <div className="tab-row">
            <button
              type="button"
              className={mode === "login" ? "gold-button" : "outline-button"}
              onClick={() => {
                setMode("login");
                setMessage("");
              }}
            >
              Login
            </button>

            <button
              type="button"
              className={mode === "register" ? "gold-button" : "outline-button"}
              onClick={() => {
                setMode("register");
                setMessage("");
              }}
            >
              Register
            </button>

            <button
              type="button"
              className={
                mode === "changePassword" ? "gold-button" : "outline-button"
              }
              onClick={() => {
                setMode("changePassword");
                setMessage("");
              }}
            >
              Change Password
            </button>
          </div>

          <div className="password-rules">
            <strong>Password Rules:</strong> At least 8 characters, including 1
            uppercase letter, 1 lowercase letter, 1 number, and 1 special
            character.
          </div>

          {message && <p className="status-message">{message}</p>}

          {mode === "login" && (
            <form onSubmit={handleLoginSubmit} className="auth-form">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button type="submit" className="gold-button full-width">
                Sign In
              </button>
            </form>
          )}

          {mode === "register" && (
            <form onSubmit={handleRegisterSubmit} className="auth-form">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  placeholder="Create your email"
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  placeholder="Create your password"
                  required
                />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={registerData.confirmPassword}
                  onChange={handleRegisterChange}
                  placeholder="Re-enter your password"
                  required
                />
              </div>

              <button type="submit" className="gold-button full-width">
                Register
              </button>
            </form>
          )}

          {mode === "changePassword" && (
            <form onSubmit={handleChangePasswordSubmit} className="auth-form">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={changePasswordData.email}
                  onChange={handleChangePasswordChange}
                  placeholder="Enter your account email"
                  required
                />
              </div>

              <div className="form-group">
                <label>Current Password</label>
                <input
                  type="password"
                  name="oldPassword"
                  value={changePasswordData.oldPassword}
                  onChange={handleChangePasswordChange}
                  placeholder="Enter current password"
                  required
                />
              </div>

              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={changePasswordData.newPassword}
                  onChange={handleChangePasswordChange}
                  placeholder="Enter new password"
                  required
                />
              </div>

              <div className="form-group">
                <label>Confirm New Password</label>
                <input
                  type="password"
                  name="confirmNewPassword"
                  value={changePasswordData.confirmNewPassword}
                  onChange={handleChangePasswordChange}
                  placeholder="Re-enter new password"
                  required
                />
              </div>

              <button type="submit" className="gold-button full-width">
                Update Password
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}