'use client'

import { useState } from "react";
import ProjectHeader from "../ProjectHeader";
import BoardView from "@/app/projects/BoardView";
import ListView from "../ListView";
import TimelineView from "../TimeLineView";
import TableView from "../TableView";

type Props = {
  params: { id: number };
};

const Project = ({params}: Props) => {
  const { id } = params;
  const [activeTab, setActiveTab] = useState("Board")
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false)
  return (
    <div>
      {/* MODAL VIEW TASKS */}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <BoardView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "List" && (
        <ListView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "Timeline" && (
        <TimelineView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "Table" && (
        <TableView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
    </div>
  );
};

export default Project;
