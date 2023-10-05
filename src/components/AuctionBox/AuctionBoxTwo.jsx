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
import "../AuctionBox/AuctionCard.css";
const AuctionBoxTwo = (props) => {
  return (
    <div className="col-lg-3 col-md-3 col-sm-12 mb-3 ">
      <div className="card-auction">
        <div className="text-center">
          <img src={props.imgBox} alt="" className="img-fluid mb-3 w-100" />
        </div>
        <div class="card-body">
          <h5 class="row">
            <div className="col d-flex align-items-start justify-content-start mx-2">
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
            <div className="d-flex align-items-center justify-content-between mb-3 mx-2">
              <ButtonAuctionBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuctionBoxTwo;
