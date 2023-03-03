
interface TaskData {
  id: number;
  taskName: string;
  taskDeadline: Date;
}

interface TaskProps {
  data: TaskData[];
}

function Task({ data }: TaskProps) {

  function getTimeLeft(deadline: Date): string {
    // calculate time difference
    const targetDate = new Date(deadline);
    const currentDate = new Date();
    const timeDiff = targetDate.getTime() - currentDate.getTime();
    const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return `${daysLeft} days left`;
  }

  return (
    <>
      {data.map((task) => (
        <li key={task.id}>
          <div>Task Name: {task.taskName}</div>
          <div>Task Deadline: {task.taskDeadline.toString()}</div>
          <div>Time Left: {getTimeLeft(task.taskDeadline)}</div>
        </li>
      ))}
    </>
  )
}

export default Task;
