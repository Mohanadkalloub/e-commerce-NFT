import "./TitlePages.css";

const TitlePages = (props) => {
  return (
    <div>
      <p className="title">{props.title}</p>
      <p className="title-page">{props.titlePage}</p>
      <p className="lorem-page">{props.loremPage}</p>
    </div>
  );
};
export default TitlePages;
