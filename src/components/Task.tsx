import { useState } from "react";
import { VscClose } from "react-icons/vsc";
import { TbCheck } from "react-icons/tb";
import {  RxReload } from "react-icons/rx";
import Button from "./Button";

interface TaskProps {
  id: string;
  taskName: string;
  taskDeadline: Date;
  handleDelete: (id: string) => Promise<void>;
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


function Task({ id, taskDeadline, taskName, handleDelete }: TaskProps) {
  const [isDone, setIsDone] = useState<string>("");
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

  let classes =
  "bg-gray-800 m-4 px-5 py-4 rounded-2xl container mx-auto flex gap-2 items-center hover:scale-[102.5%] duration-700 max-w-5xl shadow-xl font-roboto hover:shadow-gray-800/70 hover:shadow-md border-2 border-gray-800 z-10 relative";

if (isDone === "no") {
  classes += " translate-x-[100vw] bg-red-700";
}
if (isDone === "yes") {
  classes += " -translate-x-[100vw] bg-green-700";
}

if (isTaskOverdue(taskDeadline)) {
  classes += " border-rose-800/80 border-2";
} else if (new Date(taskDeadline).toDateString() === new Date().toDateString()) {
  classes += " border-yellow-600/80 border-2";
}


  return (
    <li className={classes}>
{ isTaskOverdue(taskDeadline) ? <Button reload type="button" onClick={() => handleTaskDone()}>
        <RxReload />
      </Button>   : <Button done type="button" onClick={() => handleTaskDone()}>
        <TbCheck />
      </Button>}
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500 uppercase tracking-wide text-xl px-3">{taskName}</div>
      <div className="flex-1 text-gray-400">
        {!isTaskOverdue(taskDeadline)
          ? getTimeLeft(taskDeadline)
          : `You seem to have overlooked completing this task. ${getTimeLeft(taskDeadline)}`}
      </div>
      <Button deletes type="button" onClick={() => handleTaskDelete()}>
        <VscClose />
      </Button>
    </li>
  );
}

export default Task;
