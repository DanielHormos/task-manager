"use client";

import { completeTaskAction, deleteTaskAction } from "./action";
import { Task } from "./types";
import { FaCheck } from "react-icons/fa";

export function TaskCard({ tasks }) {
  const handleDelete = (id: number) => {
    deleteTaskAction(id);
  };

  const handleComplete = async (event, id: number) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await completeTaskAction(formData, id);
  };

  return (
    <div className="p-6 max-w-md mx-auto rounded-xl shadow-md space-y-4">
      {tasks.map((todo: Task) => (
        <div
          key={todo.id}
          className="card w-full sm:w-auto bg-base-100 shadow-md overflow-hidden"
        >
          <div className="collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title">
              <div className="flex items-center">
                {todo.completed === "true" && (
                  <FaCheck size={22} color="green" className="mr-4" />
                )}
                <div>
                  <h2 className="text-xl font-medium break-words whitespace-normal">
                    {todo.task}
                  </h2>
                  {todo.completed === "true" && (
                    <p className="text-sm text-gray-500">
                      By: {todo.completer}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="collapse-content  ">
              <form
                className="w-full"
                onSubmit={(e) => handleComplete(e, todo.id)}
              >
                <label
                  htmlFor="completer"
                  className="block text-lg font-medium text-gray-900"
                >
                  Task completer
                </label>
                <input
                  required
                  maxLength={15}
                  id="completer"
                  type="text"
                  name="completer"
                  placeholder="Name"
                  className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 border rounded-md p-2"
                >
                  Save
                </button>
              </form>
              <button
                onClick={() => handleDelete(todo.id)}
                className="w-full bg-red-500 text-white mt-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-gray-500 border rounded-md p-2"
              >
                Remove Task
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
