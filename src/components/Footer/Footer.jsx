import "./Footer.css";
import { Logo } from "../../assets/images/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faPinterestP,
  faVimeoV,
  faWikipediaW,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const listFooter = [
    {
      path: "/",
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
    { path: "/Collections", display: "Collections" },
    { path: "/Creator", display: "Creator" },
    { path: "/Team", display: "Team" },
    { path: "/Blogs", display: "Blogs" },
  ];
  const MarkPlace = [
    { display: "Live Auction" },
    { display: "NFT Product" },
    { display: "Virtual World" },
    { display: "Popular Art" },
  ];
  const NeedHelp = [
    { display: "Privacy Policy" },
    { display: "Sign up" },
    { display: "Sign in" },
    { display: "Pre-sale Questions" },
    { display: "Terms & Conditions" },
  ];
  return (
    <div className="row mt-5">
      <div className="col-lg-3 col-md-3 col-sm-12">
        <div className="navbar-brand">
          <img src={Logo} alt="" />
        </div>
        <p>
          Various versions have evolved over the years sometimes by acciden
          sometimes on purpose injec
        </p>
        <button className="parent-btn d-flex align-items-center justify-content-between mb-3">
          Enter your mail
          <button className="mx-3 btn sub-btn">SUBSCRIBE</button>
        </button>
        <div className="icons">
          <FontAwesomeIcon icon={faBehance} className="mx-3" />
          <FontAwesomeIcon icon={faVimeoV} className="mx-3" />
          <FontAwesomeIcon icon={faWikipediaW} className="mx-3" />
          <FontAwesomeIcon icon={faPinterestP} className="mx-3" />
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12">
        <h5>Company</h5>
        {listFooter.map((item) => (
          <li className="nav-item list-group">
            <NavLink
              to={item.path}
              className={(props) => (props.isActive ? "active" : "in-active")}
            >
              {item.display}
            </NavLink>
          </li>
        ))}
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12">
        <h5>Marketplace</h5>
        {MarkPlace.map((item) => (
          <li className="list-group">{item.display}</li>
        ))}
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12">
        <h5>Need Help ?</h5>
        {NeedHelp.map((item) => (
          <li className="list-group">{item.display}</li>
        ))}
      </div>
      <div className="d-flex align-items-center justify-content-between line"></div>
      <div className="text-center mt-3 fs-5">
        All right reserved by Mohanad Kalloub
      </div>
    </div>
  );
};
export default Footer;
