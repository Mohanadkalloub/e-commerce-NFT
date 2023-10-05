import {
  Banar,
  BoxOneHome,
  BoxTwoHome,
  BoxThreeHome,
  BoxFourHome,
} from "../../assets/images/index";
import "../Home/Home.css";
import { PageContainer, HomeCard } from "../../components/index";
const HomePage = () => {
  return (
    <PageContainer>
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
      <div className="row mt-3">
        <HomeCard img={BoxOneHome} title="OpenSea" />
        <HomeCard img={BoxTwoHome} title="VeeFriends" />
        <HomeCard img={BoxThreeHome} title="Decentraland" />
        <HomeCard img={BoxFourHome} title="Polygon" />
      </div>
    </PageContainer>
  );
};
export default HomePage;
