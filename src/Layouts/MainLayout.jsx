import MainFooter from "../Components/MainFooter/MainFooter";
import MainHeader from "../Components/MainHeader/MainHeader";

const MainLayout = ({ children }) => {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
};

export default MainLayout;
