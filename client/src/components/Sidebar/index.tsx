import { LockIcon } from "lucide-react";
import Image from "next/image";

const Sidebar = () => {
  const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 overflow-y-auto  w-64 bg-white dark:bg-dark-bg z-40`;
  return (
    <div className={sidebarClassNames}>
      <div className="flex h-full w-full flex-col justify-start">
        {/* TOP LOGO */}
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 py-2 dark:bg-dark-bg">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            HN<span className="mx-1 rounded bg-red-400 p-1">LIST</span>
          </div>
        </div>

        {/* TEAM */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-4 py-5 dark:bg-dark-secondary dark:text-gray-200">
          <Image src={"/logo.png"} width={40} height={40} alt="logo" />
          <div>
            <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
              EURO TEAM
            </h3>
            <div className="flex flex-1 items-start gap-2">
              <LockIcon className="w-3 h-3 mt-[0.1rem] text-gray-500 dark:text-gray-200"/>
              <p className="text-xs text-gray-500">Private</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
