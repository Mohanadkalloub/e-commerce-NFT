import {
  auth1,
  auth2,
  auth3,
  auth4,
  auth5,
  auth6,
  auth7,
  auth8,
} from "../assets/images";
import { PageContainer } from "../components";
import Authors from "../components/Authors/Authors";
import TitlePages from "../components/TitlePages/TitlePages";

const AuthorsPage = () => {
  return (
    <PageContainer>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <TitlePages
            title="Creative Artist"
            titlePage="Top Authors"
            loremPage="It has survived not only five centuries, but also the leap into electronic typesetting, remaining"
          />
        </div>
      </div>
      <div className="row mb-4 mt-5">
        <Authors img={auth1} authName="Tiffany S Cummings" />
        <Authors img={auth2} authName="Peggy Taber" />
        <Authors img={auth3} authName="Brien Downie" />
        <Authors img={auth4} authName="Rodney Gatson" />
      </div>
      <div className="row">
        <Authors img={auth5} authName="Tony Johnson" />
        <Authors img={auth6} authName="Belinda S Penny" />
        <Authors img={auth7} authName="Daniel Whiddon" />
        <Authors img={auth8} authName="Tracy Craig" />
      </div>
    </PageContainer>
  );
};
export default AuthorsPage;
