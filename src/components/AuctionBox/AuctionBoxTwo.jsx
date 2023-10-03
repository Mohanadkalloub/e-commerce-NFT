import {
  Auction2,
  forParentOne,
  forParentTwo,
  parentOne,
  parentThree,
  parentTwo,
} from "../../assets/images";
import ButtonAuctionBox from "../Buttons/ButtonWhite";
import Icons from "../Icons/Icons";

const AuctionBoxTwo = (props) => {
  return (
    <div className="col-lg-3 col-md-3 col-sm-12 mb-3 ">
      <div className="card">
        <div className="text-center">
          <img src={props.imgBox} alt="" className="img-fluid" />
        </div>
        <div class="card-body">
          <h5 class="row">
            <div className="col d-flex align-items-start justify-content-start">
              <img src={parentThree} alt="" />
              <img src={forParentTwo} alt="" />
              <p className="parent">
                Holly Eckhardt
                <p className="child">@hollyeckhardt</p>
              </p>
            </div>
          </h5>
          <h5 class="card-title">{props.cardTitle}</h5>
          <div className=" d-flex align-items-center justify-content-between mt-3">
            <Icons />
            <div className="d-flex align-items-center justify-content-between">
              <ButtonAuctionBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuctionBoxTwo;
