"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const authModal = useAuthModal();

  const handleLogout = () => {
    // handle logout later
  };

  return (
    <div className={twMerge("h-fit bg-stone-700 p-6", className)}>
      <div className="w-full md-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-stone-900 flex items-center justify-center hover:bg-opacity-75 transition"
          >
            <RxCaretLeft className="text-white hover:text-red-500" size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-stone-900 flex items-center justify-center hover:bg-opacity-75 transition"
          >
            <RxCaretRight className="text-white hover:text-red-500" size={35} />
          </button>
          <h1 className="text-stone-200 text-3xl font-semibold pl-2">
            ANIMAL HELP NOW
          </h1>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <HiHome className="text-stone-950" size={20} />
          </button>
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <BiSearch className="text-stone-950" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button
                onClick={authModal.onOpen}
                className="bg-transparent text-stone-300 font-medium"
              >
                Get Listed!
              </Button>
            </div>
            <div>
              <Button
                onClick={authModal.onOpen}
                className="bg-transparent text-stone-300 font-medium"
              >
                Helper Login
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
