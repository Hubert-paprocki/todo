import React from "react";
interface WelcomeProps {
	username?: string;
}

const Welcome: React.FC<WelcomeProps> = ({ username }) => {
	return (
		<h1 className="text-center p-2 font-work text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-2xl dark:text-white uppercase tracking-wide z-10 leading-tight xs:leading-snug md:leading-normal">
			Welcome
			<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-600 dark:from-violet-400 dark:to-cyan-400">
				{" "}
				{username}{" "}
			</span>
			what have you planed for today?
		</h1>
	);
};

export default Welcome;
