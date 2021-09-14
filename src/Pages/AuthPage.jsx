import { useEffect } from "react";
import AuthContainer from "../Components/auth/authContainer/AuthContainer";
import MainLayout from "../Layouts/MainLayout";

const AuthPage = () => {

  useEffect(()=>{
    document.title = "ورود/ثبت نام"
  }, [])

  return (
      <MainLayout>
        <AuthContainer />
      </MainLayout>
  )
};

export default AuthPage;
