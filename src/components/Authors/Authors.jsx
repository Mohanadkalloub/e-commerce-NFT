import "./Authors.css";
const Authors = (props) => {
  return (
    <div className="col-lg-3 col-md-3 col-sm-12 d-flex align-items-center justify-content-between mb-3">
      <div className="auth-box d-flex align-items-center justify-content-between">
        <div className="col mt-3 mb-3">
          <img src={props.img} alt="" />
        </div>
        <div className="col mt-3 mb-3">
          <p className="auth-name">{props.authName}</p>
          <p className="auth-item">Total Item : 521</p>
          <span className="auth-number">ETH . 256.524</span>
        </div>
      </div>
    </div>
  );
};
export default Authors;
