import NotFound from "../Components/NotFound/NotFound";
import MainLayout from "../Layouts/MainLayout";

const NotFoundPage = ({ history }) => {
  return (
    <MainLayout>
      <main className={`min-h-screen`}>
        <NotFound history={history} />
      </main>
    </MainLayout>
  );
};

export default NotFoundPage;
