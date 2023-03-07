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
    <form onSubmit={onSubmit} className="bg-gray-800 m-4 py-3 px-6 md:py-6 md:px-12 xs:rounded-2xl mx-auto flex flex-row gap-3  sm:gap-5 md:gap-12 xs:max-w-md sm:max-w-xl md:max-w-4xl shadow-md -mt-12 mb-0 z-10 relative  justify-evenly items-center">

        <Input type="text" refs={taskNameRef} required placeholder="What is on your mind?"/>
        <Input type="date" refs={dateRef} required date/>

    <div><Button primary type="submit">Add task</Button></div>
  </form>
  )
}

export default NewTaskForm