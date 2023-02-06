import { Link, Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "../userSlice";

export default function Navbar() {
  let navigate = useNavigate();
  const { color, changeTheme } = useContext(ThemeContext);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const userLogout = async () => {
    dispatch(LogOut());
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div>
        <div className={color ? "bg-primary" : "bg-dark"}>
          <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container">
              <a className="navbar-brand">SimpleNote</a>
              <div className="navbar">
                <ul className="navbar-nav d-flex flex-row me-auto mb-2 mb-lg-0">
                  <li className="nav-item mx-2">
                    <Link to="/home" className="nav-link active" aria-current="page">
                      My Notes
                    </Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link to="/about" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item mt-2 mx-2">
                    <a type="button" onClick={changeTheme} className={color ? "text-dark" : "text-white"}>
                      {color ? <i class="bi bi-moon-fill"></i> : <i class="bi bi-brightness-high"></i>}
                    </a>
                  </li>
                </ul>
              </div>
              {user.username == null ? (
                <div className="navbar-nav text-light">
                  <i class="bi bi-person-circle"></i> &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
              ) : (
                <div className="navbar-nav text-light">
                  <img src={user.image} alt="Profile Photo" style={{ maxWidth: "2rem", maxHeight: "2rem" }} className="mt-2" />
                  &nbsp;&nbsp;&nbsp;
                  <p className="mt-3">{user.username}</p>
                  &nbsp;&nbsp;
                  <a type="button" class="pe-auto" className="text-white mt-3" onClick={userLogout}>
                    <i class="bi bi-box-arrow-right"></i>
                  </a>
                </div>
              )}
            </div>
          </nav>
        </div>
        <div className="container pt-3">
          <Outlet />
        </div>
      </div>
    </>
  );
}
