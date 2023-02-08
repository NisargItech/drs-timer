import React from "react";
import "./TaskItem.css";
import Scrollbars from "react-custom-scrollbars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const TaskItem = ({ task }) => {
  return (
    <div className="task-item">
      <div className="task-icon">
        <FontAwesomeIcon icon={faFile} />
      </div>
      <div className="task-details">
        <div className="task-title">{task.title}</div>
        <div className="task-sub-details">{task.subDetails}</div>
      </div>
      <div className="task-menu">
        <FontAwesomeIcon icon={faEllipsisV} />
      </div>
    </div>
  );
};

const TaskList = () => {
  const dummyData = [
    {
      id: 1,
      title: "Project Meeting",
      subDetails: "Project A",
    },
    {
      id: 2,
      title: "Team Meeting",
      subDetails: "Marketing Team",
    },
    {
      id: 3,
      title: "Client Call",
      subDetails: "Client X",
    },
    {
      id: 4,
      title: "Code Review",
      subDetails: "Module 1",
    },
    {
      id: 5,
      title: "Brainstorming Session",
      subDetails: "Project B",
    },
    {
      id: 6,
      title: "Product Demo",
      subDetails: "Client Y",
    },
    {
      id: 7,
      title: "Stand-up Meeting",
      subDetails: "Scrum Team",
    },
    {
      id: 8,
      title: "Team Building Activity",
      subDetails: "All Teams",
    },
  ];

  return (
    <Scrollbars style={{ height: "330px" }}>
      {dummyData.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </Scrollbars>
  );
};

export default TaskList;
