import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TeamCard.css";
import {
  faBehance,
  faFacebookF,
  faLinkedinIn,
  faPinterestP,
  faVimeoV,
  faWikipediaW,
} from "@fortawesome/free-brands-svg-icons";
const TeamCard = (props) => {
  return (
    <div className="col-lg-3 col-md-3 col-sm-12">
      <div className="team-card">
        <div className="img position-relative">
          <img
            src={props.img}
            alt=""
            className="img-fluid mx-5 img-team-card position-absolute"
          />
        </div>
        <div className="team-card-body z-3">
          <div className="icons-social mx-5 position-relative">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faBehance} />
            <FontAwesomeIcon icon={faVimeoV} />
            <FontAwesomeIcon icon={faPinterestP} />
            <FontAwesomeIcon icon={faWikipediaW} />
            <div className="mx-5 text-center">
              <p>
                {props.name}
                <p>{props.job}</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
