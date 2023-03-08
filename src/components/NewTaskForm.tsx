import { FormEvent} from "react";
import Button from "./Button"
import Input from "./Input";

interface NewTaskFormProps {
    onSubmit?:(e: FormEvent<HTMLFormElement>) => void;
    taskNameRef: React.RefObject<HTMLInputElement>;
    dateRef: React.RefObject<HTMLInputElement>;
}

function NewTaskForm({onSubmit,taskNameRef,dateRef}:NewTaskFormProps) {
    
  return (
    <form onSubmit={onSubmit} className="bg-gray-200 dark:bg-gray-800 mx-2 py-2 px-2 xs:px-6 md:py-4 md:px-12 rounded-2xl flex flex-row gap-3  sm:gap-5 md:gap-12 xs:max-w-md sm:max-w-xl md:max-w-4xl shadow-md mb-0 z-10 justify-evenly items-center">
        <Input type="text" refs={taskNameRef} required placeholder="What is on your mind?"/>
        <Input type="date" refs={dateRef} required date/>
 <Button primary type="submit">Add task</Button>
  </form>
  )
}

export default NewTaskForm