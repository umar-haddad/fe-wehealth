import React, { useState } from "react";

import "../../assets/style/login.css";
import log from "../../assets/image/login.png";
import goggleImg from "../../assets/image/google.png";
import { Link } from "react-router-dom";

const url = "https://652fea546c756603295ded28.mockapi.io/dataStrotage";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getUsers = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const validateUser = async (email, password) => {
    const users = await getUsers();
    return users.filter(
      (user) => user.email === email && user.password === password
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validUser = await validateUser(email, password);
    console.log(validUser);

    if (validUser.length > 0) {
      saveRegistrationStatus(validUser[0]);
    } else {
      alert("Login gagal");
    }
  };

  const saveRegistrationStatus = (user) => {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    alert("login berhasil");
    window.location.href = window.location.href.replace(
      "/page/login.html",
      "/"
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <section id="hero">
        <section className="container-fluid min-vh-100">
          <div className="row">
            <div
              className="image col-md-6 col-sm-3 d-none d-md-block vh-100 bg-image"
              style={{
                backgroundImage: `url(${log})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="col-md-6 px-4 d-grid">
              <h2 className="login d-flex align-items-end py-2">Login</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Masukkan Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Masukkan Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="container" id="email_wrapper">
                  <div className="row">
                    <div className="button_remember col-lg-6 text-start">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                          required
                        />
                        <label className="form-check-label" htmlFor="gridCheck">
                          Check me out
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div
                        className="d-flex justify-content-end"
                        id="forgotPasswordLink"
                      >
                        <a href="">forgot password?</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button container-fluid">
                  <div className="row">
                    <button
                      type="submit"
                      className="btn btn-primary col-lg-12"
                      id="button"
                    >
                      Login
                    </button>
                  </div>
                  <span className="d-flex justify-content-center py-2">or</span>
                  <div className="row">
                    <button
                      type="submit"
                      className="btn btn-close-white border-primary border-2 col-lg-12"
                    >
                      <img src={goggleImg} alt="Google Logo" />
                      Log in with Google
                    </button>
                  </div>
                  <div className="line_border_bottom"></div>
                  <div className="signup row">
                    <span className="col-lg-12 px-lg-2">
                      No account yet?
                      <Link to="/register"> Sign Up</Link>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </section>
    </form>
  );
}

export default Login;
