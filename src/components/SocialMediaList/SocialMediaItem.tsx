import { ReactNode } from "react";
import React from "react";
interface SocialMediaItemProps {
  img: ReactNode;
  link: string;
  name: string;
}

const SocialMediaItem: React.FC<SocialMediaItemProps> = ({
  img,
  link,
  name,
}) => {
  return (
    <li className="hover:scale-125 transition duration-300 cursor-pointert text-4xl hover:text-purple-500 hover:dark:text-violet-500">
      <a href={link} aria-label={name}>
        {img}
      </a>
    </li>
  );
};

export default SocialMediaItem;
