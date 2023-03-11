import { ReactNode } from "react";
interface SocialMediaItemProps {
	img: ReactNode;
	link: string;
}

function SocialMediaItem({ img, link }: SocialMediaItemProps) {
	return (
		<a
			className="hover:scale-125 transition duration-300 cursor-pointert text-4xl hover:text-purple-500 hover:dark:text-violet-500"
			href={link}
		>
			{img}
		</a>
	);
}

export default SocialMediaItem;
