import {
  BoxFiveFour,
  BoxFiveOne,
  BoxFiveThree,
  BoxFiveTwo,
  BoxFourFour,
  BoxFourOne,
  BoxFourThree,
  BoxFourTwo,
  BoxSexFour,
  BoxSexOne,
  BoxSexThree,
  BoxSexTwo,
  BoxThreeFour,
  BoxThreeOne,
  BoxThreeThree,
  BoxThreeTwo,
  BoxTwoFour,
  BoxTwoOne,
  BoxTwoThree,
  BoxTwoTwo,
  CardOne,
  RecFour,
  RecThree,
  RecTwo,
  boxCollectionEndOne,
  boxCollectionEndTwo,
  boxCollectionFour,
  boxCollectionOne,
  boxCollectionThree,
  boxCollectionTwo,
  collection1,
  collection2,
  collection3,
  collection4,
  collection5,
  collection6,
  vector,
} from "../../assets/images";
import "./Collection.css";

import { PageContainer, TitlePages } from "../../components/index";
const CollectionsPage = () => {
  return (
    <PageContainer>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <TitlePages
            title="Populer Itam"
            titlePage="Most populer Collections"
            loremPage="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged It was popularised in the with the release..."
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-lg-4 col-md-4 col-sm-12 section-card mb-3">
          <div className="collection-card">
            <img src={collection1} alt="" className="img-fluid w-100" />
            <div className="collection-img d-flex align-items-center justify-content-between mt-3">
              <img src={boxCollectionOne} alt="" className="rounded-2" />
              <img src={boxCollectionTwo} alt="" className="rounded-2" />
              <img src={boxCollectionThree} alt="" className="rounded-2" />
              <img src={boxCollectionFour} alt="" className="rounded-2" />
            </div>
            <p className="text-dark fs-4 mt-2">Art in human appearance</p>
            <p className="text-dark fs-5">235.12 ETH 21-22</p>

            <div className="collection-context  mt-2 d-flex align-items-center justify-content-between">
              <p className="btn text-primary">Place A Bid Now</p>
              <button className="btn-left">
                <img src={vector} alt="" className="mx-1" />
                325k
              </button>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center justify-content-between">
                <img src={boxCollectionEndOne} alt="" className="img-fluid" />
                <p className="mt-2 mx-1 text-dark fs-5">Steven Laird</p>
              </div>
              <div className="mt-2">
                <img src={boxCollectionEndTwo} alt="" />
                <div>
                  <p className="mx-1">5.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 section-card mb-3">
          <div className="collection-card">
            <img src={collection2} alt="" className="img-fluid w-100" />
            <div className="collection-img d-flex align-items-center justify-content-between mt-3">
              <img src={BoxTwoOne} alt="" className="rounded-2" />
              <img src={BoxTwoTwo} alt="" className="rounded-2" />
              <img src={BoxTwoThree} alt="" className="rounded-2" />
              <img src={BoxTwoFour} alt="" className="rounded-2" />
            </div>
            <p className="text-dark fs-4 mt-2">Art in human appearance</p>
            <p className="text-dark fs-5">235.12 ETH 21-22</p>

            <div className="collection-context  mt-2 d-flex align-items-center justify-content-between">
              <p className="btn text-primary">Place A Bid Now</p>
              <button className="btn-left">
                <img src={vector} alt="" className="mx-1" />
                325k
              </button>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center justify-content-between">
                <img src={boxCollectionEndOne} alt="" className="img-fluid" />
                <p className="mt-2 mx-1 text-dark fs-5">Steven Laird</p>
              </div>
              <div className="mt-2">
                <img src={boxCollectionEndTwo} alt="" />
                <div>
                  <p className="mx-1">5.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 section-card mb-3">
          <div className="collection-card">
            <img src={collection3} alt="" className="img-fluid w-100" />
            <div className="collection-img d-flex align-items-center justify-content-between mt-3">
              <img src={BoxThreeOne} alt="" className="rounded-2" />
              <img src={BoxThreeTwo} alt="" className="rounded-2" />
              <img src={BoxThreeThree} alt="" className="rounded-2" />
              <img src={BoxThreeFour} alt="" className="rounded-2" />
            </div>
            <p className="text-dark fs-4 mt-2">Art in human appearance</p>
            <p className="text-dark fs-5">235.12 ETH 21-22</p>

            <div className="collection-context  mt-2 d-flex align-items-center justify-content-between">
              <p className="btn text-primary">Place A Bid Now</p>
              <button className="btn-left">
                <img src={vector} alt="" className="mx-1" />
                325k
              </button>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center justify-content-between">
                <img src={boxCollectionEndOne} alt="" className="img-fluid" />
                <p className="mt-2 mx-1 text-dark fs-5">Steven Laird</p>
              </div>
              <div className="mt-2">
                <img src={boxCollectionEndTwo} alt="" />
                <div>
                  <p className="mx-1">5.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-4 col-md-4 col-sm-12 section-card mb-3">
          <div className="collection-card">
            <img src={collection4} alt="" className="img-fluid w-100" />
            <div className="collection-img d-flex align-items-center justify-content-between mt-3">
              <img src={BoxFourOne} alt="" className="rounded-2" />
              <img src={BoxFourTwo} alt="" className="rounded-2" />
              <img src={BoxFourThree} alt="" className="rounded-2" />
              <img src={BoxFourFour} alt="" className="rounded-2" />
            </div>
            <p className="text-dark fs-4 mt-2">Art in human appearance</p>
            <p className="text-dark fs-5">235.12 ETH 21-22</p>

            <div className="collection-context  mt-2 d-flex align-items-center justify-content-between">
              <p className="btn text-primary">Place A Bid Now</p>
              <button className="btn-left">
                <img src={vector} alt="" className="mx-1" />
                325k
              </button>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center justify-content-between">
                <img src={boxCollectionEndOne} alt="" className="img-fluid" />
                <p className="mt-2 mx-1 text-dark fs-5">Steven Laird</p>
              </div>
              <div className="mt-2">
                <img src={boxCollectionEndTwo} alt="" />
                <div>
                  <p className="mx-1">5.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 section-card mb-3">
          <div className="collection-card">
            <img src={collection5} alt="" className="img-fluid w-100" />
            <div className="collection-img d-flex align-items-center justify-content-between mt-3">
              <img src={BoxFiveOne} alt="" className="rounded-2" />
              <img src={BoxFiveTwo} alt="" className="rounded-2" />
              <img src={BoxFiveThree} alt="" className="rounded-2" />
              <img src={BoxFiveFour} alt="" className="rounded-2" />
            </div>
            <p className="text-dark fs-4 mt-2">Art in human appearance</p>
            <p className="text-dark fs-5">235.12 ETH 21-22</p>

            <div className="collection-context  mt-2 d-flex align-items-center justify-content-between">
              <p className="btn text-primary">Place A Bid Now</p>
              <button className="btn-left">
                <img src={vector} alt="" className="mx-1" />
                325k
              </button>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center justify-content-between">
                <img src={boxCollectionEndOne} alt="" className="img-fluid" />
                <p className="mt-2 mx-1 text-dark fs-5">Steven Laird</p>
              </div>
              <div className="mt-2">
                <img src={boxCollectionEndTwo} alt="" />
                <div>
                  <p className="mx-1">5.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 section-card mb-3">
          <div className="collection-card">
            <img src={collection6} alt="" className="img-fluid w-100" />
            <div className="collection-img d-flex align-items-center justify-content-between mt-3">
              <img src={BoxSexOne} alt="" className="rounded-2" />
              <img src={BoxSexTwo} alt="" className="rounded-2" />
              <img src={BoxSexThree} alt="" className="rounded-2" />
              <img src={BoxSexFour} alt="" className="rounded-2" />
            </div>
            <p className="text-dark fs-4 mt-2">Art in human appearance</p>
            <p className="text-dark fs-5">235.12 ETH 21-22</p>

            <div className="collection-context  mt-2 d-flex align-items-center justify-content-between">
              <p className="btn text-primary">Place A Bid Now</p>
              <button className="btn-left">
                <img src={vector} alt="" className="mx-1" />
                325k
              </button>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center justify-content-between">
                <img src={boxCollectionEndOne} alt="" className="img-fluid" />
                <p className="mt-2 mx-1 text-dark fs-5">Steven Laird</p>
              </div>
              <div className="mt-2">
                <img src={boxCollectionEndTwo} alt="" />
                <div>
                  <p className="mx-1">5.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="new-section">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="box">
              <img src={CardOne} alt="" className="img-fluid w-50 mx-3 mt-3" />
              <div className="box-body">
                <p className="text-dark fs-4 mx-3 mt-2">Zumo Wallet</p>
                <p className="text-dark mx-3">
                  It has survived not only five centu ries, but also the leap
                  into electronic
                </p>
                <button className="btn btn-primary rounded-5 px-4 mb-3 mx-3">
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="box">
              <img src={RecTwo} alt="" className="img-fluid w-50 mx-3 mt-3" />
              <div className="box-body">
                <p className="text-dark fs-4 mx-3 mt-2">Connect with NFT</p>
                <p className="text-dark mx-3">
                  It has survived not only five centu ries, but also the leap
                  into electronic
                </p>
                <button className="bg-white btn btn-outline-light text-dark rounded-5 px-4 mb-3 mx-3">
                  Connect NFT
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="box">
              <div>
                <img
                  src={RecThree}
                  alt=""
                  className="img-fluid w-50 mx-3 mt-3"
                />
              </div>
              <div className="box-body">
                <p className="text-dark fs-4 mx-3 mt-2">Sale performance</p>
                <p className="text-dark mx-3">
                  It has survived not only five centu ries, but also the leap
                  into electronic
                </p>
                <button className="bg-white btn btn-outline-light text-dark rounded-5 px-4 mb-3 mx-3">
                  View Sale
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="box">
              <div className="">
                <img
                  src={RecFour}
                  alt=""
                  className="img-fluid w-50 mx-3 mt-3"
                />
              </div>
              <div className="box-body">
                <p className="text-dark fs-5 mx-3 mt-2">Business performance</p>
                <p className="text-dark mx-3">
                  It has survived not only five centu ries, but also the leap
                  into electronic
                </p>
                <button className="bg-white btn btn-outline-light text-dark rounded-5 px-4 mb-4 mx-3">
                  View performance
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
export default CollectionsPage;
