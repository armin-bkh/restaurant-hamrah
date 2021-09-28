import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import LogInForm from "../Components/auth/LogInForm/LogInForm";
import MainLayout from "../Layouts/MainLayout";
import { authRoutes } from "../Routes/Routes";

const LoginPage = () => {

  useEffect(() => {
    document.title = "ورود";
  }, []);

  return (
    <MainLayout>
      <main>
        <section
          className={`min-h-screen flex justify-center items-center p-5`}
        >
          <LogInForm />
        </section>
      </main>
    </MainLayout>
  );
};

export default LoginPage;
