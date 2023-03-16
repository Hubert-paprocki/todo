import React from "react";

const Tip: React.FC = () => {
	return (
		<p className="text-center font-roboto text-[#c5c5ca] dark:text-slate-800 text-md sm:text-lg absolute bottom-0 inset-x-0 bg-gradient-to-b from-transparent via-gray-200/[.95]  to-gray-200 dark:via-zinc-900/[.95] dark:to-zinc-900 pt-4 z-10">
			You can scroll thru tasks with mouse wheel
		</p>
	);
};

export default Tip;
