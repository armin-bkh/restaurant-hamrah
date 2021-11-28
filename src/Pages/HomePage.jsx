import { useEffect } from "react";
import HomeIntroduction from "../Components/Home/HomeIntroduction";
import MainLayout from "../Layouts/MainLayout";

const HomePage = () => {
  useEffect(() => {
    document.title = "خانه";
  }, []);

  return (
    <MainLayout>
      <HomeIntroduction />
    </MainLayout>
  );
};

export default HomePage;
