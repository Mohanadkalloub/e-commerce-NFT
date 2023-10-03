import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faCartShopping,
  faChevronDown,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { Logo } from "../../assets/images/index";
import { NavLink } from "react-router-dom";
const Header = () => {
  const navLinks = [
    {
      path: "/Home",
      display: "Home",
    },
    {
      path: "/Auction",
      display: "Auction",
    },
    {
      path: "/Authors",
      display: "Authors",
    },
    {
      path: "/Collections",
      display: "Collections",
    },
    {
      path: "/Creator",
      display: "Creator",
    },
    {
      path: "/Team",
      display: "Team",
    },
    {
      path: "/Blogs",
      display: "Blogs",
    },
  ];
  return (
    <div className="container">
      <div className="header d-flex aling-items-center justify-content-between">
        <div className="div">
          <div className="icons-header">
            <FontAwesomeIcon icon={faFacebookF} className="mx-2" />
            <FontAwesomeIcon icon={faLinkedinIn} className="mx-2" />
            <FontAwesomeIcon icon={faInstagram} className="mx-2" />
          </div>
        </div>
        <div className="div">
          <button className="btn">
            <span>EN</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>
      <div className="line d-flex align-items-between justify-content-between"></div>
      <nav className="navbar navbar-expand-lg">
        <div className="navbar-brand">
          <img src={Logo} alt="" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#id"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id="id">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {navLinks.map((item) => (
                <NavLink
                  to={item.path}
                  className={(props) =>
                    props.isActive ? "active" : "in-acitve"
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </li>
          </ul>
          <div className="icons-navbar">
            <button className="mx-2 btn rounded-5 border border-dark">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <button className="mx-2 btn rounded-5 border border-dark">
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
            <button className="mx-3 btn rounded-5 border border-dark">
              <FontAwesomeIcon icon={faUser} />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
