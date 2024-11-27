"use client";

import { deleteTaskAction } from "./action";
import { completeTaskAction } from "./action";
import { Task } from "./types";

export function TaskCard({ tasks }) {
  const handleDelete = (id: number) => {
    deleteTaskAction(id);
    window.location.reload();
  };

  const handleComplete = async (event, id: number) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await completeTaskAction(formData, id);
    window.location.reload();
  };
  return (
    <div className="p-6 max-w-md mx-auto rounded-xl shadow-md space-y-4">
      {tasks.map((todo: Task) => (
        <div
          key={todo.id}
          className="card w-full sm:w-auto bg-base-100 shadow-md overflow-hidden"
        >
          <div className="card-body collapse collapse-arrow bg-base-100">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              <h2 className="break-words whitespace-normal">{todo.task}</h2>
            </div>
            <div className="collapse-content">
              <div className="card-actions space-y-4">
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
                    id="Name"
                    type="text"
                    name="completer"
                    placeholder="Name"
                    className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="w-full  mt-4 bg-gray-200 focus:outline-none focus:ring-2 border rounded-md p-2"
                  >
                    Save
                  </button>
                </form>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="w-full bg-red-500 text-white mt-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 border rounded-md p-2"
                >
                  Remove Task
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
