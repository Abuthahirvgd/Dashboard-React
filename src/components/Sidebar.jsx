import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const linkClasses =
    "block py-2 px-4 rounded hover:bg-blue-100 transition duration-200";

  return (
    <div>
      <button
        id="sidebar-toggle-btn"
        onClick={toggleSidebar}
        className="fixed top-20 left-4 z-50 p-2 w-10 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 lg:hidden"
        title={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      >
        {isSidebarOpen ? "←" : "→"} 
      </button>

      <div
        className={`bg-gray-100 w-64 pt-16 h-[calc(100vh-64px)] p-4 shadow-lg fixed top-[64px] left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:relative lg:transform-none lg:top-0 lg:h-screen`}
      >
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/visualization"
              className={({ isActive }) =>
                isActive
                  ? `${linkClasses} bg-blue-200 font-bold`
                  : linkClasses
              }
            >
              Visualization
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user-management"
              className={({ isActive }) =>
                isActive
                  ? `${linkClasses} bg-blue-200 font-bold`
                  : linkClasses
              }
            >
              User Management
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/task-management"
              className={({ isActive }) =>
                isActive
                  ? `${linkClasses} bg-blue-200 font-bold`
                  : linkClasses
              }
            >
              Task Management
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
