import { FormEvent } from "react";
import Button from "./Button";
import Input from "./Input";

interface LoginFormProps {
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  userNameRef: React.RefObject<HTMLInputElement>;
}

function LoginForm({ onSubmit, userNameRef }: LoginFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-gray-800 m-4 py-6 px-12 rounded-2xl flex flex-col gap-12 max-w-3xl shadow-xl  z-10 relative text-center items-center"
    >
        <p className="font-bold capitalize text-2xl text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500 tracking-wider">
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
  );
}

export default LoginForm;
