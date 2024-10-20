'use client'

import { useState } from "react";
import ProjectHeader from "../ProjectHeader";
import BoardView from "@/app/projects/BoardView";

type Props = {
  params: { id: number };
};

const Project = ({params}: Props) => {
  const { id } = params;
  const [activeTab, setActiveTab] = useState("Board")
  const [isModalNewProjectOpen, setIsModalNewProjectOpen] = useState(false)
  return (
    <div>
      {/* MODAL VIEW TASKS */}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <BoardView id={id} setIsModalNewTaskOpen={setIsModalNewProjectOpen} />
      )}
    </div>
  );
};

export default Project;
