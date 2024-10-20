import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import { useGetProjectsQuery } from "@/state/api";
import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Cloud,
  Cpu,
  Home,
  Layers3,
  LockIcon,
  LucideIcon,
  Search,
  Settings,
  ShieldAlert,
  User,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [showPriority, setShowPriority] = useState(false);

  const { data: projects } = useGetProjectsQuery();

  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 overflow-y-auto overflow-x-hidden w-64 bg-white dark:bg-dark-bg z-40 ${isSidebarCollapsed ? "w-0 hidden" : "w-64"}`;

  // Define an array of icons for random selection
  const projectIcons = [
    Briefcase,
    Cpu,
    Cloud,
    AlertCircle,
    AlertOctagon,
    ShieldAlert,
    AlertTriangle
  ];

  return (
    <div className={sidebarClassNames}>
      <div className="flex h-full w-full flex-col justify-start">
        {/* TOP LOGO */}
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 py-2 dark:bg-dark-bg">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            HN<span className="mx-1 rounded bg-red-400 p-1">LIST</span>
          </div>
          <button
            onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
            className="cursor-pointer"
          >
            <X className="h-8 w-8 text-gray-800 dark:text-gray-100" />
          </button>
        </div>

        {/* TEAM */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-4 py-5 dark:bg-dark-secondary dark:text-gray-200">
          <Image src={"/logo.png"} width={40} height={40} alt="logo" />
          <div>
            <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
              EURO TEAM
            </h3>
            <div className="flex flex-1 items-start gap-2">
              <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-200" />
              <p className="text-xs text-gray-500">Private</p>
            </div>
          </div>
        </div>

        {/* NAV LINKS */}
        <nav className="z-10 w-full">
          <SidebarLink icon={Home} label="Home" href="/" />
          <SidebarLink icon={Briefcase} label="Timeline" href="/timeline" />
          <SidebarLink icon={Search} label="Search" href="/search" />
          <SidebarLink icon={Settings} label="Settings" href="/settings" />
          <SidebarLink icon={User} label="Users" href="/users" />
          <SidebarLink icon={Users} label="Teams" href="/teams" />
        </nav>

        {/* SHOW PROJECTS */}
        <button
          onClick={() => setShowProjects(!showProjects)}
          className="flex w-full cursor-pointer items-center justify-between px-8 py-4 text-lg font-medium"
        >
          <span>Projects</span>
          {showProjects ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>

        {showProjects && (
          <>
            {projects?.map((project) => {
              // Select a random icon from the projectIcons array
              const RandomIcon = projectIcons[Math.floor(Math.random() * projectIcons.length)];
              return (
                <SidebarLink
                  key={project.id}
                  icon={RandomIcon} // Pass the random icon
                  label={project.name}
                  href={`/projects/${project.id}`}
                />
              );
            })}
          </>
        )}

        {/* SHOW PRIORITY */}
        <button
          onClick={() => setShowPriority(!showPriority)}
          className="flex w-full cursor-pointer items-center justify-between px-8 py-4 text-lg font-medium"
        >
          <span>Priority</span>
          {showPriority ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
        {showPriority && (
          <>
            <SidebarLink icon={AlertCircle} label="Urgent" href="/priority/urgent" />
            <SidebarLink icon={ShieldAlert} label="High" href="/priority/high" />
            <SidebarLink icon={AlertTriangle} label="Medium" href="/priority/medium" />
            <SidebarLink icon={AlertOctagon} label="Low" href="/priority/low" />
            <SidebarLink icon={Layers3} label="Backlog" href="/priority/backlog" />
          </>
        )}
      </div>
    </div>
  );
};

// SIDEBAR NAV LINKS COMPONENT
interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SidebarLink = ({ href, icon: Icon, label }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href} className="w-full">
      <div
        className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700 ${
          isActive ? "bg-gray-200 text-white dark:bg-gray-600" : ""
        } justify-start px-8 py-3`}
      >
        {isActive && (
          <div className="absolute left-0 top-0 h-[100%] w-[5px] bg-blue-200" />
        )}

        <Icon className="h-6 w-6 text-gray-800 dark:text-gray-100" />
        <span
          className={`text-lg font-medium text-gray-800 dark:text-gray-100`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

export default Sidebar;
