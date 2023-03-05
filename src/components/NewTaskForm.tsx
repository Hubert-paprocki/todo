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
    <form onSubmit={onSubmit} className="bg-gray-800 m-4 py-6 px-12 rounded-2xl mx-auto flex gap-12 max-w-4xl shadow-md -mt-12 z-10 relative items-center justify-evenly">
      <div className="flex flex-1 gap-14">
        <Input type="text" refs={taskNameRef} required placeholder="What is on your mind?"/>
        <Input type="date" refs={dateRef} required date/>
      </div>
    <Button primary type="submit">Add task</Button>
  </form>
  )
}

export default NewTaskForm