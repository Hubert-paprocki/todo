
interface TaskProps {
  id: string;
  taskName: string;
  taskDeadline: Date;
  handleDelete: (id: string) => Promise<void>;
}

function Task({ id,taskDeadline,taskName,handleDelete}: TaskProps) {

  function getTimeLeft(taskDeadline: Date): string {
    // calculate time difference
    const targetDate = new Date(taskDeadline);
    const currentDate = new Date();
    const timeDiff = targetDate.getTime() - currentDate.getTime();
    const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return `${daysLeft} days left`;
  }

  return (
        <li className="bg-red-500 border-b-2 w-1/2 mx-auto">
          <div>{taskName}</div>
          <div>Deadline: {taskDeadline.toString()}</div>
          <div>Time Left: {getTimeLeft(taskDeadline)}</div>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
  )
}

export default Task;
