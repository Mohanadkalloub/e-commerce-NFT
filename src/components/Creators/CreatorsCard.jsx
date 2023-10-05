import "./Creators.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import {
  faBehance,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
const CreatorsCard = (props) => {
  return (
    <div className="col-lg-3 col-md-3 col-sm-12">
      <div className="creator-card">
        <img src={props.imgBg} alt="" className="img-fluid w-100" />
        <div className="box-body text-center ">
          <div className="position-relative">
            <img
              src={props.imgTitle}
              alt=""
              className="position-absolute img-card "
            />
          </div>
          <p className="mt-5 text-dark fs-5">Kathleen M Gregory</p>
          <p className="text-dark">
            215fjds5djdl.....dsfe
            <span>
              {" "}
              <FontAwesomeIcon icon={faCopy} className="text-info" />
            </span>
          </p>
          <div className="social mb-3">
            <button className="mx-1 bg-white border border-light text-secondary rounded-circle py-1">
              <FontAwesomeIcon icon={faFacebookF} />
            </button>
            <button className="mx-1 bg-white border border-light text-secondary rounded-circle py-1">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </button>
            <button className="mx-1 bg-white border border-light text-secondary rounded-circle py-1">
              <FontAwesomeIcon icon={faBehance} />
            </button>
          </div>
          <button className="btn btn-primary px-5 rounded-5 btn-outline-light mb-4">
            + FOLLOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatorsCard;
