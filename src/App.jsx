import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Visualization from "./pages/Visualization";
import UserManagement from "./pages/UserManagement";
import TaskManagement from "./pages/TaskManagement";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 p-4 overflow-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/visualization" />} />
              <Route path="/visualization" element={<Visualization />} />
              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/task-management" element={<TaskManagement />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
