import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  console.log("🚀 >>>>>>>>>> ~ errors:", errors);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      console.log("🚀 >>>>>>>>>> ~ data:", data);
      const parsedErrors = Object.fromEntries(
        Object.entries(data).map(([key, value]) => {
          const [fieldName, errorMessage] = value.split(" : ");
          return [fieldName.trim(), errorMessage.trim()];
        })
      );
      setErrors(parsedErrors);
    } else {
      closeModal();
    }
  };

  const handleLogInDemo = (e) => {
    e.preventDefault();
    const demoAcc = "demo@aa.io";
    const demoPassword = "password";
    return dispatch(login(demoAcc, demoPassword))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  };

  return (
    <div id="login-form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 id="login-h1-2">Log In</h1>

        <div className="modal-errors">
          {/* {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))} */}
        </div>
        <div className="email-pw">
          <div className="email">
            <div className="err">
              <label>Email</label>
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <div className="err">
              <label>Password</label>
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {password && errors.password && (
              <p className="err-message">{errors.password}</p>
            )}
          </div>
          <div className="login">
            <button type="submit">Log In</button>
          </div>
          <div className="demo-login">
            <button className="demo-button" onClick={handleLogInDemo}>
              Log in as Demo User
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginFormModal;
