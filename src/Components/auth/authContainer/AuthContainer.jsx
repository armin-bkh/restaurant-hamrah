import { useState } from 'react';
import LogInForm from '../LogInForm/LogInForm';
import SignUpForm from "../SignUpForm/SignUpForm";

const AuthContainer = () => {
    const [ existing, setExisting ] = useState(true);
  return (
    <main>
      <section className={`min-h-screen flex justify-center items-center p-5`}>
            {existing ?
              <LogInForm  setExisting={setExisting} /> :
              <SignUpForm setExisting={setExisting} />}
      </section>
    </main>
  );
};

export default AuthContainer;
