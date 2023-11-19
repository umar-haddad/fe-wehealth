import React, { useState } from "react";
import log from "../../assets/image/login.png";
import goggleImg from "../../assets/image/google.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(email) && validatePassword(password)) {
      sendDataToServer(email, password, firstName, lastName);
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      alert("Email tidak valid.");
    }
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      alert("Password minimal 12 karakter.");
    }
    return password.length >= 12;
  };

  const sendDataToServer = (email, password, firstName, lastName) => {
    const serverURL =
      "https://652fea546c756603295ded28.mockapi.io/dataStrotage"; // Ganti dengan URL API yang sesuai

    fetch(serverURL, {
      method: "POST",
      body: JSON.stringify({ email, password, firstName, lastName }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        saveRegistrationStatus(email);
        console.log(data);
        alert("Registrasi berhasil.");
        window.location.href = "login.html";
      })
      .catch((error) => {
        console.error(error);
        alert("Terjadi kesalahan saat mengirim data.");
      });
  };

  const saveRegistrationStatus = (email) => {
    const registrationStatus = {
      email,
      registered: true,
    };

    localStorage.setItem(
      "registrationStatus",
      JSON.stringify(registrationStatus)
    );
  };

  return (
    <section id="hero">
      <section className="container-fluid min-vh-100">
        <div className="row">
          <div
            className="col-md-6 col-3 d-none d-md-block vh-100 bg-image"
            style={{ backgroundImage: `url(${log})` }}
          ></div>
          <div className="col-md-6 px-4 d-grid">
            <h2 className="login d-flex align-items-end py-2">Sign Up</h2>
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label htmlFor="firstname" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  placeholder="firstname"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastname" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  placeholder="lastname"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="masukkan email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="masukkan password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                    required
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    I agree with <a href="">Terms & Conditions</a>
                  </label>
                </div>
              </div>
              <div className="button container-fluid">
                <div className="row">
                  <button type="submit" className="btn btn-primary col-lg-12">
                    Register
                  </button>
                </div>
                <span className="d-flex justify-content-center py-2">or</span>
                <div className="row">
                  <button
                    type="submit"
                    className="btn btn-close-white border-primary border-2 col-lg-12"
                  >
                    <img src={goggleImg} alt="" /> Log in with Google
                  </button>
                </div>
                <div className="line_border_bottom"></div>
                <div className="signup row">
                  <span className=" col-lg-12 px-lg-2 ">
                    <Link to="/login">Already have an account?</Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Register;
