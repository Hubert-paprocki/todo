import { useRef, useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { firestore } from "../firebase";
import NewTaskForm from "../components/NewTaskForm";
import Task from "../components/Task";
import BackgroundImage from "../images/bgimg1.webp";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import Tip from "../components/Tip";
import { useLocation } from "react-router-dom";

const ToDoPage: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const location = useLocation();
  const userName = new URLSearchParams(location.search).get("user")?.toString();

  useEffect(() => {
    const q = query(
      collection(firestore, "Tasks"),
      where("userName", "==", userName)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(newData);
    });

    return () => unsubscribe();
  }, [userName]);

  const taskNameRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const newDateRef = useRef<HTMLInputElement>(null);

  const renderedTaskList = data
    .slice()
    .sort(
      (b, a) =>
        new Date(b.taskDeadline).getTime() - new Date(a.taskDeadline).getTime()
    )
    .map((item) => (
      <Task
        key={item.id}
        id={item.id}
        taskName={item.taskName}
        taskDeadline={item.taskDeadline}
        newDateRef={newDateRef}
      />
    ));

  return (
    <>
      <div className="bg-gray-300 dark:bg-gray-900 bg-gradient-to-br from-pink-400/50 dark:from-pink-900/30 via-gray-300 dark:via-gray-900 to-indigo-100 dark:to-indigo-900/10  h-[100svh] overflow-hidden text-stone-800 dark:text-slate-200  flex flex-col items-center scroll-smooth">
        <div className="w-full xs:px-3 xs:mt-3">
          <header className="h-max 5 w-full relative xs:rounded-2xl flex flex-col items-center z-40">
            <div className="bg-gray-300 dark:bg-gray-900 bg-gradient-to-br from-pink-400/50 dark:from-pink-900/30 via-gray-300 dark:via-gray-900 to-indigo-100 dark:to-indigo-900/10 h-5/6 w-full object-cover absolute xs:rounded-2xl ">
              <img
                src={BackgroundImage}
                alt="background"
                className="h-full w-full object-cover absolute xs:rounded-2xl opacity-70 dark:opacity-50 drop-shadow-2xl brightness-105 dark:brightness-75"
              />
            </div>
            <Welcome username={userName} />
            <NewTaskForm
              taskNameRef={taskNameRef}
              dateRef={dateRef}
              userName={userName}
            />
          </header>
        </div>
        <ul className="overflow-y-scroll w-full scrollbar-hide px-2 flex flex-col items-center pb-8 pt-12 -mt-10">
          {renderedTaskList}
        </ul>
        <Tip />
      </div>
      <Footer />
    </>
  );
};

export default ToDoPage;
