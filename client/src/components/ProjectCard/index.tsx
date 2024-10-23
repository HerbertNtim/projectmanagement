import { Project } from "@/state/api";
import React from "react";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="rounded border p-4 shadow flex flex-col dark:text-neutral-200">
      <h3 className="text-2xl font-medium mb-3">{project.name}</h3>
      <p className="text-lg my-1">{project.description}</p>
      <p className="text-lg my-1">Start Date: {project.startDate}</p>
      <p className="text-lg my-1">End Date: {project.endDate}</p>
    </div>
  );
};

export default ProjectCard;
