import { blogOne, blogThree, blogTwo } from "../assets/images/index";
import { TitlePages, BlogsCard, PageContainer } from "../components/index";
const BlogsPage = () => {
  return (
    <PageContainer>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <TitlePages
            title="Latest Blog"
            titlePage="Latest Blog"
            loremPage="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged It was popularised in the with the release"
          />
        </div>
      </div>
      <div className="row">
        <BlogsCard img={blogOne} />
        <BlogsCard img={blogTwo} />
        <BlogsCard img={blogThree} />
      </div>
    </PageContainer>
  );
};
export default BlogsPage;
