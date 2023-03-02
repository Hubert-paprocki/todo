import { useRef, FormEvent, useEffect, useState } from "react";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { firestore } from "./firebase";
import NewTaskForm from "./components/NewTaskForm";

function App(): JSX.Element {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestore, "Tasks"), (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => doc.data());
      setData(newData);
    });

    return () => unsubscribe();
  }, []);

  const taskNameRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      id: Math.floor(Date.now() / 10000),
      taskName: taskNameRef.current?.value,
      taskDeadline: dateRef.current?.value,
    };

    try {
      await addDoc(collection(firestore, "Tasks"), data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="bg-slate-200 min-h-screen">
      <NewTaskForm onSubmit={handleSubmit} taskNameRef={taskNameRef} dateRef={dateRef} />
      <div>
        <h1>Tasks:</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <div>Task Name: {item.taskName}</div>
              <div>Task Deadline: {item.taskDeadline}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
