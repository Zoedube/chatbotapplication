import React from "react";
import { IconMessages, IconUsers, IconFileText, IconNews, IconFile, IconSettings } from '@tabler/icons-react';

const navigationItems = [
  { icon: IconMessages, text: "AI Chat", isActive: true },
  { icon: IconUsers, text: "Members" },
  { icon: IconFileText, text: "Integrations" },
  { icon: IconNews, text: "Better Results" },
  { icon: IconFile, text: "Pricing Plans" },
  { icon: IconSettings, text: "Settings" },
];

const NavItem = ({ icon: Icon, text, isActive = false }) => {
  return (
    <button
      className={`flex gap-3 items-center px-3 py-2 text-gray-500 rounded-md cursor-pointer w-full text-left hover:bg-gray-50 transition-colors ${
        isActive ? "bg-gray-50" : ""
      }`}
    >
      <Icon size={20} />
      <span className="text-sm">{text}</span>
    </button>
  );
};

const Sidebar = () => {
  return (
    <aside className="flex flex-col p-4 w-60 bg-white border-r border-solid max-md:w-[200px] max-sm:hidden">
      <header className="px-0 pt-2 pb-6 text-base font-semibold text-black">
        Superpage
      </header>
      <nav className="flex flex-col gap-2">
        {navigationItems.map((item, index) => (
          <NavItem
            key={index}
            icon={item.icon}
            text={item.text}
            isActive={item.isActive}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
