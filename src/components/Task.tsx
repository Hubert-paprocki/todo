import { useState } from "react";
import { VscClose } from "react-icons/vsc";
import { TbCheck } from "react-icons/tb";
import {  RxReload } from "react-icons/rx";
import Button from "./Button";
import Input from "./Input";

interface TaskProps {
  id: string;
  taskName: string;
  taskDeadline: Date;
  handleDelete: (id: string) => Promise<void>;
  handleUpdate: (id: string) => Promise<void>;
  newDateRef: React.RefObject<HTMLInputElement>;
}

function isTaskOverdue(taskDeadline: Date): boolean {
  const targetDate = new Date(taskDeadline);
  const currentDate = new Date();
  targetDate.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);
  return targetDate < currentDate;
}

function getTimeLeft(taskDeadline: Date): string | null {
  const targetDate = new Date(taskDeadline);
  const currentDate = new Date();
  const clientOffset = currentDate.getTimezoneOffset() * 60 * 1000;
  const timeDiff = targetDate.getTime() - currentDate.getTime() + clientOffset;

  if (targetDate.toDateString() === currentDate.toDateString()) {
    return "Due today";
  }

  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  const deadlineString = targetDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  if (daysLeft < 0) {
    return `(${deadlineString})`;
  } else if (daysLeft === 0) {
    return "Due today";
  } else {
    return `${daysLeft} days left (${deadlineString})`;
  }
}


function Task({ id, taskDeadline, taskName, handleDelete,handleUpdate,newDateRef }: TaskProps) {
  const [isDone, setIsDone] = useState<string>("");
  const [isUpdating, setIsUpdating] = useState(false)

  const handleTaskDelete = async () => {
    setIsDone("no");
    console.log(isDone);
    await handleDelete(id);
  };

  const handleTaskDone = async () => {
    setIsDone("yes");
    console.log(isDone);
    await handleDelete(id);
  };
  const handleTaskUpdate = async () => {
    setIsUpdating(false)
    await handleUpdate(id);

  };

  let classes =
  "bg-gray-200 dark:bg-gray-800 m-4 px-2 py-1 md:px-5 md:py-4 rounded-2xl container mx-auto grid grid-cols-[min-content,1fr,min-content] md:grid-cols-[min-content,1fr,1fr,min-content] md:gap-2  hover:scale-[102.5%] duration-700 md:max-w-5xl shadow-lg shadow-gray-300 dark:shadow-slate-900 font-roboto hover:shadow-gray-300/90 dark:hover:shadow-gray-800/70 hover:shadow-md border-2 border-gray-200 dark:border-gray-800 z-10 relative text-center ";

if (isDone === "no") {
  classes += " translate-x-[100vw] bg-red-500 dark:bg-red-700 border-red-500 dark:border-red-700";
}
if (isDone === "yes") {
  classes += " -translate-x-[100vw] bg-green-500/80 border-green-500 dark:border-green-700 dark:bg-green-700";
}

if (isTaskOverdue(taskDeadline)) {
  classes += "border-rose-600/70 dark:border-rose-800/80 border-2";
} else if (new Date(taskDeadline).toDateString() === new Date().toDateString()) {
  classes += "border-yellow-500/80  dark:border-yellow-400/40 border-2";
}


return (
  <li className={classes}>
    {isUpdating ? (
      <>
          <div className="col-start-1 row-span-3 md:row-start-1 self-center">
            <Button
              done
              type="button"
              onClick={() =>handleTaskUpdate()}
            >
              <TbCheck />
            </Button>
          </div>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 dark:from-violet-400 to-rose-700 dark:to-cyan-400 uppercase tracking-wide text-lg sm:text-xl px-3 col-start-2 justify-self-center md:col-span-1 md:row-span-3 flex items-center">{taskName}</p>
        <div className="flex-1 text-gray-400 col-start-2 row-start-2 md:row-start-1  md:col-start-3 md:row-span-3 flex items-center justify-evenly ">
          <p className="text-stone-500 dark:text-gray-400">
            Set new date:
          </p>
          <Input type="date" required date refs={newDateRef}/>
        </div>

      </>
    ) : (
      <>
        {isTaskOverdue(taskDeadline) ? (
          <div className="col-start-1 row-span-3 md:row-start-1 self-center">
            <Button
              reload
              type="button"
              onClick={() => setIsUpdating(true)}
            >
              <RxReload />
            </Button>
          </div>
        ) : (
          <div className="col-start-1 row-span-3 md:row-start-1 self-center">
            <Button
              done
              type="button"
              onClick={() => handleTaskDone()}
            >
              <TbCheck />
            </Button>
          </div>
        )}
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 dark:from-violet-400 to-rose-600 dark:to-cyan-400 uppercase tracking-wide text-lg sm:text-xl px-3 col-start-2 justify-self-center md:col-span-1 md:row-span-3 flex items-center font-semibold">{taskName}</p>
          <p className="flex-1 text-stone-500 dark:text-gray-400 col-start-2 row-start-2 md:row-start-1 justify-self-center md:col-start-3 md:row-span-3 flex items-center px-2">
            {!isTaskOverdue(taskDeadline)
              ? getTimeLeft(taskDeadline)
              : `You missed this task. ${getTimeLeft(taskDeadline)}`}
          </p>
        <div className="col-start-3  md:col-start-4 row-span-3 self-center">
          <Button
            deletes
            type="button"
            onClick={() => handleTaskDelete()}
          >
            <VscClose />
          </Button>
        </div>
      </>
    )}
  </li>
);

}

export default Task;
