import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [state, setState] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
  const [submit, setSubmit] = useState(false);

  //   const checkValidation = () => {
  //     return (
  //       email &&
  //       username.length > 3 &&
  //       first_name &&
  //       last_name &&
  //       password.length > 5 &&
  //       confirmPassword
  //     );
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const data = await dispatch(
        signUp({
          first_name,
          last_name,
          username,
          state,
          phone_number,
          email,
          password,
          confirmPassword,
        })
      );
      if (data) {
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
    } else {
      setErrors({
        confirmPassword:
          "Confirm Password field must be the same as the Password field",
      });
    }
    setSubmit(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <h1 id="login-h1">Sign Up</h1>
        {/* <div className="modal-errors">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </div> */}

        <div className="form-content">
          <div className="form-chunk">
            <div className="err">
              <label>First Name</label>
              {submit && errors.first_name && (
                <p className="error-message">{errors.first_name}</p>
              )}
            </div>
            <input
              type="text"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-chunk">
            <div className="err">
              <label>Last Name</label>
              {errors.last_name && (
                <p className="error-message">{errors.last_name}</p>
              )}
            </div>
            <input
              type="text"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-chunk">
            <div className="err">
              <label>Username</label>
              {errors.username && (
                <p className="error-message">{errors.username}</p>
              )}
            </div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-chunk">
            <div className="err">
              <label>State</label>
              {errors.state && <p className="error-message">{errors.state}</p>}
            </div>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="form-chunk">
            <div className="err">
              <label>Phone Number</label>
              {errors.phone_number && (
                <p className="error-message">{errors.phone_number}</p>
              )}
            </div>
            <input
              type="text"
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-chunk">
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

          <div className="form-chunk">
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
          </div>
          <div className="form-chunk">
            <div className="err">
              <label>Confirm Password</label>
              {errors.confirmPassword && (
                <p className="error-message">{errors.confirmPassword}</p>
              )}
            </div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="sign-up">
            <button
              className="sign-up-button"
              type="submit"
              //   disabled={checkValidation()}
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignupFormModal;
