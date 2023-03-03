import { useRef, FormEvent, useEffect, useState } from "react";
import { collection, addDoc, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { firestore } from "./firebase";
import NewTaskForm from "./components/NewTaskForm";

function App(): JSX.Element {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestore, "Tasks"), (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(newData);
    });

    return () => unsubscribe();
  }, []);

  const taskNameRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      taskName: taskNameRef.current?.value,
      taskDeadline: dateRef.current?.value,
    };

    try {
      await addDoc(collection(firestore, "Tasks"), data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(firestore, "Tasks", id));
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
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
