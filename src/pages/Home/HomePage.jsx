import { PageContainer } from "../../components";
import {
  Banar,
  BoxOneHome,
  BoxTwoHome,
  BoxThreeHome,
  BoxFourHome,
} from "../../assets/images/index";
import "../Home/Home.css";
const HomePage = () => {
  return (
    <PageContainer>
      {/* <div className="container"> */}
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
          <p className="discover mt-5">
            Discover Collect And Sell Extraordinary NFT
          </p>
          <p className="lorem">
            It has survived not only five centuries, but also the leap into
            remaining essentially unchanged. It was popularised release of
            Letraset sheets containing Lorem
          </p>
          <div className="mt-5">
            <button className="wallet-one rounded-2 p-2 border border-light text-white">
              Connect Wallet
            </button>
            <button className="wallet-two mx-3 rounded-2 p-2 border bg-transparent">
              Connect Wallet
            </button>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
          <img src={Banar} alt="" className="border rounded-3" />
        </div>
      </div>
      <div className="row mt-5 d-flex align-items-center justify-content-between">
        <div className="col-lg-2 col-md-3 col-sm-12 box mb-4">
          {/* <div className="content-box"> */}
          <img src={BoxOneHome} alt="" className="img-fluid" />
          <p className="text-center">OpenSea</p>
          {/* </div> */}
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12 box mb-4">
          <img src={BoxTwoHome} alt="" className="img-fluid" />
          <p className="text-center">VeeFriends</p>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12 box mb-4">
          <img src={BoxThreeHome} alt="" className="img-fluid" />
          <p className="text-center">Decentraland</p>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12 box mb-4">
          <img src={BoxFourHome} alt="" className="img-fluid" />
          <p className="text-center">Polygon</p>
        </div>
      </div>
      {/* </div> */}
    </PageContainer>
  );
};
export default HomePage;
