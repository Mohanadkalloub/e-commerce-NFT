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
        <div className="navbar-brand mb-3">
          <img src={Logo} alt="" />
        </div>
        <p className="logo-desc">
          Various versions have evolved over the years sometimes by acciden
          sometimes on purpose injec
        </p>
        <button className="btn btn-white btn-outline-dark mx-1">
          enter your mail
        </button>
        <button className="btn btn-white btn-outline-dark mx-1">
          SUBSCRIBE
        </button>
        <div className="icons mt-3">
          <FontAwesomeIcon icon={faBehance} className="mx-3" />
          <FontAwesomeIcon icon={faVimeoV} className="mx-3" />
          <FontAwesomeIcon icon={faWikipediaW} className="mx-3" />
          <FontAwesomeIcon icon={faPinterestP} className="mx-3" />
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12 company">
        <h5 className="company-title">Company</h5>
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
      <div className="col-lg-3 col-md-3 col-sm-12 mark-place">
        <h5 className="mark-place-title">Marketplace</h5>
        {MarkPlace.map((item) => (
          <li className="list-group">{item.display}</li>
        ))}
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12 need-help">
        <h5 className="need-help-title">Need Help ?</h5>
        {NeedHelp.map((item) => (
          <li className="list-group">{item.display}</li>
        ))}
      </div>
      <div className="d-flex align-items-center justify-content-between line"></div>
      <div className="text-center mt-3 fs-5 p-4">
        All right reserved by Mohanad Kalloub
      </div>
    </div>
  );
};
export default Footer;
