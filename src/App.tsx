import { useRef, FormEvent, useEffect, useState } from "react";
import { collection, addDoc, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { firestore } from "./firebase";
import NewTaskForm from "./components/NewTaskForm";
import Task from "./components/Task";
import BackgroundImage from "./images/bgimg.jpg"

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

const renderedTaskList = data.map((item) => (
  <Task key={item.id} id={item.id} taskName={item.taskName} taskDeadline={item.taskDeadline} handleDelete={handleDelete}/>
))
  
  return (
    <div className="bg-zinc-700 h-screen">
      <img src={BackgroundImage} alt="background" className="h-2/5 w-full object-cover" />
      <NewTaskForm onSubmit={handleSubmit} taskNameRef={taskNameRef} dateRef={dateRef} />
      <div>
        <h1>Tasks:</h1>
        <ul>
          {renderedTaskList}
        </ul>
      </div>
    </div>
  );
}

export default App;
