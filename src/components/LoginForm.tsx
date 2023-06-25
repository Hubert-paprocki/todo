import { useRef, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import React, { useContext } from "react";
import { LanguageContext } from "../App";

const LoginForm: React.FC = () => {
  const context = useContext(LanguageContext);
  const [isInputValid, setInputValid] = useState(true);
  const userNameRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userNameRef.current?.value.match(/^[a-zA-Z]+$/)) {
      if (userNameRef.current) {
        userNameRef.current.value = "";
      }
      setInputValid(false);
    } else {
      navigate(`/todos?user=${userNameRef.current?.value}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 sm:gap-8  text-center items-center"
    >
      <div className="w-64 md:w-72">
        <Input
          placeholder={
            context.selectedLanguage.inputs.username.usernamePlaceholder
          }
          refs={userNameRef}
          invalid={!isInputValid}
          errorMessage={context.selectedLanguage.inputs.username.usernameErr}
        />
      </div>
      <Button type={"submit"} primary>
        {context.selectedLanguage.buttons.login}
      </Button>
    </form>
  );
};

export default LoginForm;
