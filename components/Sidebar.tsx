"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import {
  MdHelpCenter,
  MdNewspaper,
  MdInfo,
  MdEmail,
  MdOutlineChatBubble,
} from "react-icons/md";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname === "/home",
        href: "/",
      },
      {
        icon: MdHelpCenter,
        label: "Resources",
        active: pathname === "/resources",
        href: "/resources",
      },
      {
        icon: MdNewspaper,
        label: "In The News",
        active: pathname === "/news",
        href: "/news",
      },
      {
        icon: MdOutlineChatBubble,
        label: "Blog",
        active: pathname === "/blog",
        href: "/blog",
      },
      {
        icon: MdInfo,
        label: "About",
        active: pathname === "/about",
        href: "/about",
      },
      {
        icon: MdEmail,
        label: "Contact",
        active: pathname === "/contact",
        href: "/contact",
      },
    ],
    [pathname]
  );

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-0 bg-stone-950 h-full w-25%] p-2">
        <Box className="rounded-t-md">
          <div className="flex flex-col gap-y-4 px-5 py-4 border-b-4 border-stone-950">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item}></SidebarItem>
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library></Library>
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2 bg-stone-950">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
