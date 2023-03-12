import { FormEvent, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import Button from "./Button";
import Input from "./Input";
import ThemeSwitch from "./ThemeSwitch";
interface NewTaskFormProps {
	taskNameRef: React.RefObject<HTMLInputElement>;
	dateRef: React.RefObject<HTMLInputElement>;
	userName: string | undefined;
}

function NewTaskForm({ taskNameRef, dateRef, userName }: NewTaskFormProps) {
	const [isInputValid, setInputValid] = useState(true);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (taskNameRef.current?.value.length === 0) {
			setInputValid(false);
		} else {
			const data = {
				taskName: taskNameRef.current?.value,
				taskDeadline: dateRef.current?.value,
				userName,
			};
			await addDoc(collection(firestore, "Tasks"), data);
			if (taskNameRef.current) {
				taskNameRef.current.value = "";
			}
			if (dateRef.current) {
				dateRef.current.value = new Date().toISOString().substring(0, 10);
			}
		}
	};

	return (
		<div className="bg-gray-200 dark:bg-gray-800  py-2 px-4 xs:px-6 md:py-4 md:px-12 rounded-2xl z-10  shadow-md flex gap-1.5 sm:gap-5 md:gap-10 max-w-xl md:max-w-4xl  duration-150">
			<form
				onSubmit={handleSubmit}
				className="grid grid-cols-[1fr,min-content] xs:flex xs:flex-row gap-1.5 sm:gap-5 md:gap-10  justify-evenly items-center"
			>
				<Input
					type="text"
					refs={taskNameRef}
					required={true}
					placeholder="What is on your mind?"
					invalid={!isInputValid}
					errorMessage={"Please enter task name"}
				/>
				<div className="col-start-1">
					<Input type="date" refs={dateRef} required date />
				</div>
				<div className="row-span-2 row-start-1 col-start-2">
					<Button primary type={"submit"}>
						Add task
					</Button>
				</div>
			</form>
			<div className="self-center hidden xs:block">
				<ThemeSwitch />
			</div>
		</div>
	);
}

export default NewTaskForm;
