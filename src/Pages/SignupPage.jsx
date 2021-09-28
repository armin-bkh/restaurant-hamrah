import { useEffect } from "react";
import SignUpForm from "../Components/auth/SignUpForm/SignUpForm";
import MainLayout from "../Layouts/MainLayout";

const SignupPage = ({ history }) => {

  useEffect(() => {
    document.title = "ثبت نام";
  }, []);

  return (
    <MainLayout>
      <main>
        <section
          className={`min-h-screen flex justify-center items-center p-5`}
        >
          <SignUpForm />
        </section>
      </main>
    </MainLayout>
  );
};

export default SignupPage;