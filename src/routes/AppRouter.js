import { Route, Routes } from "react-router-dom";
import {
  AuctionPage,
  AuthorsPage,
  BlogsPage,
  CollectionsPage,
  CreatorsPage,
  HomePage,
  TeamPage,
} from "../pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Home" element={<HomePage />} />
      <Route path="/Auction" element={<AuctionPage />} />
      <Route path="/Authors" element={<AuthorsPage />} />
      <Route path="/Collections" element={<CollectionsPage />} />
      <Route path="/Creator" element={<CreatorsPage />} />
      <Route path="/Team" element={<TeamPage />} />
      <Route path="Blogs" element={<BlogsPage />} />
    </Routes>
  );
};
export default AppRouter;
