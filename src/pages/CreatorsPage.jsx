import {
  CreatorCardEight,
  CreatorCardEightImg,
  CreatorCardFive,
  CreatorCardFiveImg,
  CreatorCardFour,
  CreatorCardOne,
  CreatorCardOneImg,
  CreatorCardSaven,
  CreatorCardSavenImg,
  CreatorCardSex,
  CreatorCardSexImg,
  CreatorCardThree,
  CreatorCardThreeImg,
  CreatorCardTwo,
  CreatorCardTwoImg,
} from "../assets/images";
import { PageContainer, CreatorsCard, TitlePages } from "../components/index";
const CreatorsPage = (props) => {
  return (
    <PageContainer>
      <div className="section mb-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <TitlePages
              title="Populer Creator"
              titlePage="Creator Of The Week"
              loremPage="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged It was popularised in the with the release..."
            />
          </div>
        </div>
        <div className="row mt-3">
          <CreatorsCard imgBg={CreatorCardOne} imgTitle={CreatorCardOneImg} />
          <CreatorsCard imgBg={CreatorCardTwo} imgTitle={CreatorCardTwoImg} />
          <CreatorsCard
            imgBg={CreatorCardThree}
            imgTitle={CreatorCardThreeImg}
          />
          <CreatorsCard
            imgBg={CreatorCardFour}
            imgTitle={CreatorCardEightImg}
          />
        </div>
        <div className="row mt-3">
          <CreatorsCard imgBg={CreatorCardFive} imgTitle={CreatorCardFiveImg} />
          <CreatorsCard imgBg={CreatorCardSex} imgTitle={CreatorCardSexImg} />
          <CreatorsCard
            imgBg={CreatorCardSaven}
            imgTitle={CreatorCardSavenImg}
          />
          <CreatorsCard
            imgBg={CreatorCardEight}
            imgTitle={CreatorCardEightImg}
          />
        </div>
      </div>
    </PageContainer>
  );
};
export default CreatorsPage;
