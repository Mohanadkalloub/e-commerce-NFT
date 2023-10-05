import "./Auction.css";
import {
  Auction1,
  Auction2,
  Auction3,
  Auction4,
  Auction5,
  Auction6,
  Auction8,
  Auction7,
} from "../../assets/images/index";
import {
  AuctionBoxOne,
  AuctionBoxTwo,
  ButtonWhite,
  ButtonBlue,
  TitlePages,
  PageContainer,
} from "../../components/index";
const AuctionPage = (props) => {
  return (
    <PageContainer>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <TitlePages title="Live Auction" />
          <TitlePages titlePage="Live Auction" />
          <TitlePages loremPage="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged It was popularised in the with the release" />
        </div>
      </div>
      <div className="row">
        <AuctionBoxOne
          button={<ButtonBlue />}
          cardTitle="Glassian Photography..."
          imgBox={Auction1}
        />
        <AuctionBoxTwo
          imgBox={Auction2}
          cardTitle="Industrial Revolution NFT 3D"
        />
        <AuctionBoxOne
          button={<ButtonWhite />}
          cardTitle="Glassian Photography..."
          imgBox={Auction3}
        />
        <AuctionBoxTwo imgBox={Auction4} cardTitle="Team Atist Of Text" />
      </div>
      <div className="row mb-3">
        <AuctionBoxOne
          button={<ButtonWhite />}
          cardTitle="Robotic Body Art"
          imgBox={Auction5}
        />
        <AuctionBoxTwo
          button={<ButtonWhite />}
          cardTitle="Domail Names"
          imgBox={Auction6}
        />
        <AuctionBoxOne
          button={<ButtonWhite />}
          cardTitle="Glassian Photography..."
          imgBox={Auction7}
        />
        <AuctionBoxOne
          cardTitle="Team Atist Of Text"
          button={<ButtonWhite />}
          imgBox={Auction8}
        />
      </div>
    </PageContainer>
  );
};
export default AuctionPage;
