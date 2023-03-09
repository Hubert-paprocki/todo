import { FormEvent } from "react";
import Button from "./Button";
import Input from "./Input";
import ThemeSwitch from "../components/ThemeSwitch"

interface LoginFormProps {
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  userNameRef: React.RefObject<HTMLInputElement>;
}

function LoginForm({ onSubmit, userNameRef }: LoginFormProps) {
  return (
    <div
      className="bg-gray-200 dark:bg-gray-800  sm:m-4 py-3 px-6 md:py-6 md:px-12 rounded-2xl max-w-3xl shadow-xl relative"
    >
      <div className="absolute top-2 right-2 sm:top-5 sm:right-5">
        <ThemeSwitch/>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-5 sm:gap-8 md:gap-10  z-10 relative text-center items-center">
        <p className="font-bold capitalize text-2xl text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-700 dark:from-violet-500 dark:to-cyan-500 tracking-wider">
          Hi there!
        </p>
        <p className="border-b-2 pb-4 border-slate-600">
        To get started, we&apos;d like to create a user account for you so that
        we can remember your tasks across sessions. Please provide us with your
        name or nickname in the reply to this message. Once we have this
        information, we can create your user account in our database. Thank you!
      </p>
      <Input placeholder={"Type your username"} refs={userNameRef} />
      <Button type={"submit"} primary>
        LogIn
      </Button>
      </form>
     </div>
  );
}

export default LoginForm;
