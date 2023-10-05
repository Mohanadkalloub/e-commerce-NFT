import "./HomeCard.css";

const HomeCard = (props) => {
  return (
    <div className="col-lg-3 col-md-3 col-sm-12 mt-5 mb-3">
      <div className="home-card text-center">
        <img src={props.img} alt="" />
        <div className="home-card-title">
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  );
};
export default HomeCard;
