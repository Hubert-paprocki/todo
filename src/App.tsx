import { useRef, FormEvent, useEffect, useState } from "react";
import { collection, addDoc, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { firestore } from "./firebase";
import NewTaskForm from "./components/NewTaskForm";
import Task from "./components/Task";
import BackgroundImage from "./images/bgimg.jpg"
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Tip from "./components/Tip";


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
      setTimeout(async () => {
        await deleteDoc(doc(firestore, "Tasks", id));
      }, 600); 
    } catch (e) {
      console.log(e);
    }
  };
  

const renderedTaskList = data
  .slice() // make a copy of the data array before sorting
  .sort((b, a) => new Date(b.taskDeadline).getTime() - new Date(a.taskDeadline).getTime()) // sort tasks based on deadline
  .map((item) => (
    <Task
      key={item.id}
      id={item.id}
      taskName={item.taskName}
      taskDeadline={item.taskDeadline}
      handleDelete={handleDelete}
    />
  ));

  
  return (
    <>
      <div className="bg-gray-900 bg-gradient-to-br from-pink-900/30 via-gray-900 to-indigo-900/10 h-screen overflow-hidden text-slate-200 p-3">
        <div className="h-2/5 w-full object-cover relative rounded-t-2xl  "><img src={BackgroundImage} alt="background" className="h-full w-full object-cover relative rounded-t-2xl opacity-50 drop-shadow-2xl"/> <Welcome/> </div>
        <NewTaskForm onSubmit={handleSubmit} taskNameRef={taskNameRef} dateRef={dateRef} />
          <ul className="overflow-y-scroll overflow-x-visible max-h-[55%] max-w-7xl mx-auto scrollbar-hide">
            {renderedTaskList}
        </ul>
        <Tip/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
