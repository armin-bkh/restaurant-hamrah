import { useState } from 'react';
import SignUpForm from "../SignUpForm/SignUpForm";

const AuthContainer = () => {
    const [ existing, setExisting ] = useState(true);
  return (
    <main>
      <section className={`min-h-screen flex justify-center items-center p-5`}>
            <SignUpForm setExisting={setExisting} />
      </section>
    </main>
  );
};

export default AuthContainer;
