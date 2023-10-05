import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BlogsCard.css";
import { faCalendarDays, faMessage } from "@fortawesome/free-solid-svg-icons";

const BlogsCard = (props) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
      <div className="blogs-card">
        <img src={props.img} alt="" className="rounded-3 img-fluid w-100" />
        <div className="blog-button mx-3 mt-3">
          <button className="btn btn-white btn-outline-dark">
            <FontAwesomeIcon icon={faCalendarDays} className="mx-1" />
            May 4,2021
          </button>
          <button className="mx-4 btn btn-white btn-outline-dark">
            <FontAwesomeIcon icon={faMessage} /> 12
          </button>
        </div>
        <div className="blog-content">
          <p className="mt-3 text-dark fs-5 mx-3">
            NFT Business Performance graph
          </p>
          <p className="mx-3 text-secondray">
            It was popularised in the 1960s with the release of Letraset
            sheets...
          </p>
          <button className="btn btn-white btn-outline-dark text-dark mx-3 mb-3">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
export default BlogsCard;
