import { useEffect } from "react";
import LogInForm from "../Components/auth/LogInForm/LogInForm";
import MainLayout from "../Layouts/MainLayout";

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
