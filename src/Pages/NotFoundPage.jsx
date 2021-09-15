import NotFound from "../Components/NotFound/NotFound";
import MainLayout from "../Layouts/MainLayout";

const NotFoundPage = () => {
  return (
    <MainLayout>
      <main className={`min-h-screen`}>
        <NotFound />
      </main>
    </MainLayout>
  );
};

export default NotFoundPage;
