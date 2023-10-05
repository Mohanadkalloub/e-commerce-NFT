import {
  teamEight,
  teamFive,
  teamFour,
  teamOne,
  teamSaven,
  teamSex,
  teamThree,
  teamTwo,
} from "../assets/images";
import { TeamCard, TitlePages, PageContainer } from "../components/index";
const TeamPage = () => {
  return (
    <PageContainer>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <TitlePages
            title="Popular Team"
            titlePage="Our Professional and Popular Team"
            loremPage="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged It was popularised in the with the release..."
          />
        </div>
      </div>
      <div className="row">
        <TeamCard img={teamOne} name="Brian Monroe" job="3D artist" />
        <TeamCard img={teamTwo} name="Bruce White" job="3D Shaper" />
        <TeamCard img={teamThree} name="Clint Hogan" job="art" />
        <TeamCard img={teamFour} name="Tracy Craig" job="Domain" />
      </div>
      <div className="row mt-5 mb-5">
        <TeamCard img={teamFive} name="Jim Smith" job="3D artist" />
        <TeamCard img={teamSex} name="Jacob Elder" job="3D Shaper" />
        <TeamCard img={teamSaven} name="Steven Laird" job="art" />
        <TeamCard img={teamEight} name="Brian Isaac" job="Stachu" />
      </div>
    </PageContainer>
  );
};
export default TeamPage;
