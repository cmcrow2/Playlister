"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();

  const onClick = () => {
    // add auth before push
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-stone-100/10 hover:bg-stone-100/20 transition pr-4"
    >
      <div className="relative left-2 min-h-[48px] min-w-[48px]">
        <Image className="object-cover" fill src={image} alt="Image" />
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div className="absolute transition opacity-0 rounded-full flex items-center justify-center border-2 border-rose-300 p-4 drop-shadow-md right-5 scale-90 group-hover:opacity-100 hover:scale-95">
        <FaPlay className="text-rose-300" size={15} />
      </div>
    </button>
  );
};

export default ListItem;
