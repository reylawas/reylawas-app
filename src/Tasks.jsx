import React, { useState } from "react";
import Task from "./Task";
import SearchFilter from "./SearchFilter";
import "./styles.css";

const Tasks = () => {
  const initialTasks = [
    {
      description: "Task 1",
      assignee: "Rey",
      deadline: "2025-04-01",
      status: "Pending",
    },
    {
      description: "Task 2",
      assignee: "Jei",
      deadline: "2025-01-01",
      status: "Pending",
    },
    {
      description: "Task 3",
      assignee: "Nicole",
      deadline: "2024-10-01",
      status: "Pending",
    },
    {
      description: "Task 4",
      assignee: "Ardon",
      deadline: "2024-07-01",
      status: "Pending",
    },
    {
      description: "Task 5",
      assignee: "Japhzel",
      deadline: "2024-04-01",
      status: "Pending",
    },
    {
      description: "Task 6",
      assignee: "Irene",
      deadline: "2024-01-01",
      status: "Pending",
    },
    {
      description: "Task 7",
      assignee: "Claire",
      deadline: "2023-10-01",
      status: "Completed",
    },
    {
      description: "Task 8",
      assignee: "Lisa",
      deadline: "2023-07-01",
      status: "Completed",
    },
    {
      description: "Task 9",
      assignee: "John",
      deadline: "2023-04-01",
      status: "Completed",
    },
    {
      description: "Task 10",
      assignee: "Jane",
      deadline: "2023-01-01",
      status: "Completed",
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleStatus = (index) => {
    const newTasks = [...tasks];
    newTasks[index].status =
      newTasks[index].status === "Pending" ? "Completed" : "Pending";
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.assignee.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Task Description</th>
            <th>Assignee</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => (
            <Task
              key={index}
              index={index}
              task={task}
              toggleStatus={toggleStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
