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
    <form onSubmit={onSubmit} className="bg-gray-800 m-4  p-6 rounded-2xl  container mx-auto flex gap-2 items-center max-w-3xl shadow-md  -mt-12 z-10 relative">
    <Input type="text" refs={taskNameRef} required placeholder="What is on your mind?"/>
    <Input type="date" refs={dateRef} required date/>
    <Button primary type="submit">Add task</Button>
  </form>
  )
}

export default NewTaskForm