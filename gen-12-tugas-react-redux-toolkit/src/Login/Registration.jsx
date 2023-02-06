import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../ThemeProvider";
import { LogIn } from "../userSlice";

const defaultInput = {
  data: {
    id: 0,
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    image: "",
    token: "",
  },
};

export default function Registration() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({ ...defaultInput });
  const { color } = useContext(ThemeContext);

  const handleFormInput = (type, value) => setFormInput({ ...formInput, [type]: value });

  const userLogin = async () => {
    const user = await axios.post("https://dummyjson.com/auth/login", formInput);
    dispatch(LogIn(user.data));
    setFormInput({ ...defaultInput });
    localStorage.setItem("user", JSON.stringify(user.data));
    navigate("/home");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    userLogin();
  };

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom mt-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3 mb-4">Login</p>
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input type="email" className="form-control form-control-lg" placeholder="Enter a valid username" value={formInput.username} onChange={(evt) => handleFormInput("username", evt.target.value)} />
                  <label className="form-label">Username</label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                  <input type="password" value={formInput.password} className="form-control form-control-lg" placeholder="Enter password" onChange={(evt) => handleFormInput("password", evt.target.value)} required />
                  <label className="form-label">Password</label>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" defaultValue />
                    <label className="form-check-label">Remember me</label>
                  </div>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  {color ? (
                    <button type="button" className="btn btn-primary btn-lg" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} onClick={userLogin}>
                      Login
                    </button>
                  ) : (
                    <button type="button" className="btn btn-dark btn-lg" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} onClick={userLogin}>
                      Login
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
