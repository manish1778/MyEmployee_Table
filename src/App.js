import React, { useState } from "react";
import EmployeeTable from "./components/EmployeeTable";
import "./App.css";

function App() {
  const employees = [
    {
      id: 1,
      name: "Alice Johnson",
      department: "Tech",
      position: "Software Engineer",
    },
    { id: 2, name: "Bob Smith", department: "HR", position: "HR Manager" },
    {
      id: 3,
      name: "Charlie Brown",
      department: "Tech",
      position: "DevOps Engineer",
    },
    {
      id: 4,
      name: "Diana Prince",
      department: "Finance",
      position: "Accountant",
    },
    {
      id: 5,
      name: "Ethan Hunt",
      department: "Tech",
      position: "Frontend Developer",
    },
  ];

  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const filteredEmployees =
    selectedDepartment === "All"
      ? employees
      : employees.filter((emp) => emp.department === selectedDepartment);

  return (
    <div className="App">
      <div className="header">
        <h1>Welcome Employee Data</h1>
        <div className="dropdown">
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Tech">Tech</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
          </select>
        </div>
      </div>
      <EmployeeTable employees={filteredEmployees} />
    </div>
  );
}

export default App;
