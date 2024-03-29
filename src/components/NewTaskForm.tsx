import { FormEvent, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import Button from "./Button";
import Input from "./Input";
import ThemeSwitch from "./ThemeSwitch";
import React, { useContext } from "react";
import { LanguageContext } from "../App";
import LanguageSwitch from "./LanguageSwitch";
interface NewTaskFormProps {
  readonly taskNameRef: React.RefObject<HTMLInputElement>;
  readonly dateRef: React.RefObject<HTMLInputElement>;
  readonly userName: string | undefined;
}

const NewTaskForm: React.FC<NewTaskFormProps> = ({
  taskNameRef,
  dateRef,
  userName,
}) => {
  const context = useContext(LanguageContext);
  const [isInputValid, setInputValid] = useState(true);
  const [isDateValid, setDateValid] = useState(true);

  function isValidDate(dateString: string) {
    const regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regEx)) return false;
    return true;
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setInputValid(true);
    setDateValid(true);
    e.preventDefault();
    if (!taskNameRef.current?.value) {
      setInputValid(false);
    }
    if (!isValidDate(dateRef.current?.value || "")) {
      setDateValid(false);
    }
    if (taskNameRef.current?.value && dateRef.current?.value) {
      const data = {
        taskName: taskNameRef.current?.value,
        taskDeadline: dateRef.current?.value,
        userName,
      };
      await addDoc(collection(firestore, "Tasks"), data);
      if (taskNameRef.current) {
        taskNameRef.current.value = "";
      }
      if (dateRef.current) {
        dateRef.current.value = new Date().toISOString().substring(0, 10);
      }
    }
  };

  return (
    <section className="bg-gray-200 dark:bg-gray-800  py-2 px-4 xs:px-6 md:py-4 md:px-12 rounded-2xl z-10  shadow-md flex gap-1.5 sm:gap-5 md:gap-10 max-w-xl md:max-w-4xl  duration-150">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-[1fr,min-content] xs:flex xs:flex-row gap-1.5 sm:gap-5 md:gap-10  justify-evenly items-center"
      >
        <Input
          type="text"
          refs={taskNameRef}
          required={true}
          placeholder={
            context.selectedLanguage.inputs.taskField.taskFieldPlaceholder
          }
          invalid={!isInputValid}
          errorMessage={context.selectedLanguage.inputs.taskField.taskFieldErr}
        />
        <div className="col-start-1">
          <Input type="date" refs={dateRef} invalid={!isDateValid} date />
        </div>
        <div className="row-span-2 row-start-1 col-start-2 flex min-w-max">
          <Button primary type={"submit"}>
            {context.selectedLanguage.buttons.addTask}
          </Button>
        </div>
      </form>
      <div className="self-center hidden sm:flex gap-5 ">
        <ThemeSwitch />
        <LanguageSwitch />
      </div>
    </section>
  );
};

export default NewTaskForm;
