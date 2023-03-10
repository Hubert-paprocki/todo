import { FormEvent } from "react";
import Button from "./Button";
import Input from "./Input";
import ThemeSwitch from "./ThemeSwitch";

interface NewTaskFormProps {
	onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
	taskNameRef: React.RefObject<HTMLInputElement>;
	dateRef: React.RefObject<HTMLInputElement>;
}

function NewTaskForm({ onSubmit, taskNameRef, dateRef }: NewTaskFormProps) {
	return (
		<div className="bg-gray-200 dark:bg-gray-800  py-2 px-4 xs:px-6 md:py-4 md:px-12 rounded-2xl z-10  shadow-md flex gap-1.5 sm:gap-5 md:gap-10 max-w-xl md:max-w-4xl  duration-150">
			<form
				onSubmit={onSubmit}
				className="grid grid-cols-[1fr,min-content] xs:flex xs:flex-row gap-1.5 sm:gap-5 md:gap-10  justify-evenly items-center"
			>
				<Input
					type="text"
					refs={taskNameRef}
					required
					placeholder="What is on your mind?"
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
