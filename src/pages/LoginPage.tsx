import { useRef, FormEvent} from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";


function LoginPage(): JSX.Element {
  const userNameRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(`/todos?user=${userNameRef.current?.value}`);
  };


  return (
    <>
      <div className="bg-gray-900 bg-gradient-to-br from-pink-900/30 via-gray-900 to-indigo-900/10 h-screen overflow-hidden text-slate-300 p-3 font-roboto text:lg md:text-xl flex justify-center items-center">
        <LoginForm onSubmit={handleSubmit} userNameRef={userNameRef} />
      </div>
      <Footer />
    </>
  );
}

export default LoginPage;
