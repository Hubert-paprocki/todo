import { RiFacebookFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import SocialMediaItem from "./SocialMediaItem";
import { ReactNode } from "react";
import React from "react";
interface ListedSocialMedia {
	id: number;
	name: string;
	icon: ReactNode;
	link: string;
}

const ListedSocialMedias: ListedSocialMedia[] = [
	{
		id: 1,
		name: `Facebook`,
		icon: <RiFacebookFill />,
		link: `https://www.facebook.com/hbrt.pa/`,
	},
	{
		id: 2,
		name: `Github`,
		icon: <RiGithubFill />,
		link: `https://github.com/X-Tripen`,
	},
	{
		id: 3,
		name: `LinkedIn`,
		icon: <RiLinkedinFill />,
		link: `https://www.linkedin.com/in/hubert-paprocki-25b618236/`,
	},
];

const SocialMediaList = () => {
	const renderedSocialMediaList = ListedSocialMedias.map((socialMedia) => {
		return (
			<SocialMediaItem
				key={socialMedia.id}
				img={socialMedia.icon}
				link={socialMedia.link}
			></SocialMediaItem>
		);
	});
	return (
		<div className="flex flex-wrap justify-center items-center max-w-6xl  mx-auto  my-12 flex-row gap-x-5">
			{renderedSocialMediaList}
		</div>
	);
};

export default SocialMediaList;
