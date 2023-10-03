import { Header, Footer } from "../index";
const PageContainer = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default PageContainer;
