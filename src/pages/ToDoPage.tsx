import { useRef, FormEvent, useEffect, useState } from "react";
import { collection, addDoc, onSnapshot, doc, deleteDoc,query,where } from "firebase/firestore";
import { firestore } from "../firebase";
import NewTaskForm from "../components/NewTaskForm";
import Task from "../components/Task";
import BackgroundImage from "../images/bgimg.jpg"
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import Tip from "../components/Tip";
import { useLocation } from "react-router-dom";


function App(): JSX.Element {
  const [data, setData] = useState<any[]>([]);
  const location = useLocation();
  const userName = new URLSearchParams(location.search).get("user")?.toString();
  

  useEffect(() => {
    const q = query(collection(firestore, "Tasks"), where("userName", "==", userName));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(newData);
    });
  
    return () => unsubscribe();
  }, [userName]);

  
  
  
  

  const taskNameRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      taskName: taskNameRef.current?.value,
      taskDeadline: dateRef.current?.value,
      userName: userName,

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
  .slice()
  .sort((b, a) => new Date(b.taskDeadline).getTime() - new Date(a.taskDeadline).getTime())
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
      <div className="bg-gray-900 bg-gradient-to-br from-pink-900/30 via-gray-900 to-indigo-900/10 h-screen overflow-hidden text-slate-200 xs:p-3 flex flex-col">
        <div className="h-max sm:h-2/5 w-full relative xs:rounded-2xl flex items-center"><img src={BackgroundImage} alt="background" className="h-full w-full object-cover absolute xs:rounded-2xl opacity-50 drop-shadow-2xl brightness-75"/> <Welcome username={userName}/> </div>
        <NewTaskForm onSubmit={handleSubmit} taskNameRef={taskNameRef} dateRef={dateRef} />
          <ul className="overflow-y-scroll overflow-visible mx-auto w-full scrollbar-hide p-2">
            {renderedTaskList}
        </ul>
        <Tip/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
