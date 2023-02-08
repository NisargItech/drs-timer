import React, { useState } from "react";
import "./TabSection.css";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("task-list");

  return (
    <div className="rectangular-component">
      <div className="tabs">
        <div
          className={`tab ${activeTab === "task-list" ? "active" : ""}`}
          onClick={() => setActiveTab("task-list")}
        >
          Task List
        </div>
        <div
          className={`tab ${activeTab === "completed" ? "active" : ""}`}
          onClick={() => setActiveTab("completed")}
        >
          Completed
        </div>
      </div>
    </div>
  );
};

export default TabSection;
