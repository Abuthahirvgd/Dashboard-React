import React, { useState } from "react";

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editedTask, setEditedTask] = useState("");
  const [showEditPopup, setShowEditPopup] = useState(false);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), name: newTask }]);
      setNewTask("");
    }
  };

  const editTask = (task) => {
    setEditingTask(task);
    setEditedTask(task.name);
    setShowEditPopup(true);
  };

  const updateTask = () => {
    setTasks(
      tasks.map((task) =>
        task.id === editingTask.id ? { ...task, name: editedTask } : task
      )
    );
    setEditingTask(null);
    setEditedTask("");
    setShowEditPopup(false);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md sm:p-4 mt-12">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Task Manager</h1>

      <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
          className="w-full sm:w-2/3 border border-gray-300 rounded px-4 py-2 mb-4 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          Add Task
        </button>
      </div>

      <div>
        {tasks.length > 0 ? (
          <table className="min-w-full bg-white border-collapse shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-6 py-3 text-left text-sm font-semibold text-gray-700">ID</th>
                <th className="border px-6 py-3 text-left text-sm font-semibold text-gray-700">Task Name</th>
                <th className="border px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id} className="border-b hover:bg-gray-50">
                  <td className="border px-6 py-3 text-sm text-gray-700">{task.id}</td>
                  <td className="border px-6 py-3 text-sm text-gray-700">
                    {task.name}
                  </td>
                  <td className="border px-6 py-3 text-sm text-gray-700">
                    <button
                      onClick={() => editTask(task)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded mr-2 hover:bg-yellow-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500">No tasks available. Add a new task!</p>
        )}
      </div>

      {showEditPopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Edit Task</h2>
            <input
              type="text"
              value={editedTask}
              onChange={(e) => setEditedTask(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={updateTask}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                Save
              </button>
              <button
                onClick={() => setShowEditPopup(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskManagement;
