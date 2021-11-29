import { useEffect } from "react";
import NotFound from "../Components/NotFound/NotFound";
import MainLayout from "../Layouts/MainLayout";

const NotFoundPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.title = "404!";
  }, []);
  return (
    <MainLayout>
      <main className={`min-h-screen`}>
        <NotFound />
      </main>
    </MainLayout>
  );
};

export default NotFoundPage;
