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
    <form onSubmit={onSubmit} className="bg-gray-800 m-4 py-3 px-6 md:py-6 md:px-12 rounded-2xl mx-auto flex flex-row gap-3  sm:gap-5 md:gap-12 max-w-fit xs:max-w-md sm:max-w-xl md:max-w-4xl shadow-md -mt-12 mb-0 z-10 relative  justify-evenly">
      <div className="flex flex-col sm:flex-row sm:justify-evenly items-stretch flex-1 gap-3 sm:gap-5 md:gap-14 self-stretch">
        <Input type="text" refs={taskNameRef} required placeholder="What is on your mind?"/>
        <Input type="date" refs={dateRef} required date/>
      </div>
    <div className="flex my-2"><Button primary type="submit">Add task</Button></div>
  </form>
  )
}

export default NewTaskForm