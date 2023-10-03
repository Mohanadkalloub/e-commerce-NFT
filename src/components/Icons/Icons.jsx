import {
  faBookmark,
  faMessage,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icons = () => {
  return (
    <div className="div d-flex align-items-center justify-content-between">
      <FontAwesomeIcon
        icon={faMessage}
        className=" btn rounded-5 border border-white bg-white mx-1"
      />
      <FontAwesomeIcon
        icon={faShareNodes}
        className=" btn rounded-5 border border-white bg-white mx-1"
      />
      <FontAwesomeIcon
        icon={faBookmark}
        className=" btn rounded-5 border border-white bg-white mx-1"
      />
    </div>
  );
};
export default Icons;
