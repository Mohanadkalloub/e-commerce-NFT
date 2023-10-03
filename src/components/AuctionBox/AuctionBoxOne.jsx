import {
  Auction3,
  forParentOne,
  forParentTwo,
  parentOne,
  parentTwo,
} from "../../assets/images";
import Icons from "../Icons/Icons";

const AuctionBoxOne = (props) => {
  return (
    <div className="col-lg-3 col-md-3 col-sm-12 mb-3">
      <div className="card">
        <div className="text-center">
          <img src={props.imgBox} alt="" />
        </div>
        <div class="card-body">
          <h5 class="row">
            <div className="col d-flex align-items-start justify-content-end">
              <img src={parentOne} alt="" />
              <img src={forParentOne} alt="" />
              <p className="parent">
                Holly Eckhardt
                <p className="child">@hollyeckhardt</p>
              </p>
              <div className="col d-flex align-items-start justify-content-end">
                <img src={parentTwo} alt="" />
                <img src={forParentTwo} alt="" />
                <p className="parent">
                  Kelvin Powell <p className="child">@kelvinpowell</p>
                </p>
              </div>
            </div>
          </h5>
          <h5 class="card-title">{props.cardTitle}</h5>
          <div className=" d-flex align-items-center justify-content-between mt-3">
            <Icons />
            <div className="d-flex align-items-center justify-content-between">
              {props.button}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuctionBoxOne;
