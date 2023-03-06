import { useRef, FormEvent, useState,useEffect  } from "react";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";


function LoginPage() {
  const [username, setUsername] = useState<any>("");
  const userNameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUsername(userNameRef.current?.value);
    console.log(userNameRef.current?.value)
  };


  return (
    <>
      <div className="bg-gray-900 bg-gradient-to-br from-pink-900/30 via-gray-900 to-indigo-900/10 h-screen overflow-hidden text-slate-300 p-3 font-roboto text-xl flex justify-center items-center">
        <LoginForm onSubmit={handleSubmit} userNameRef={userNameRef} />
      </div>
      <Footer />
    </>
  );
}

export default LoginPage;
