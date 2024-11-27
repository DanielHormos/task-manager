import { postTaskAction } from "./action";

export function TaskForm() {
  return (
    <form
      action={postTaskAction}
      className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Add Task</h2>
      <label htmlFor="task" className="block text-lg font-medium text-gray-900">
        Task
      </label>
      <input
        required
        maxLength={20}
        id="task"
        type="text"
        name="task"
        placeholder="Enter task"
        className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label
        htmlFor="frequency"
        className="block text-lg font-medium text-gray-900"
      >
        Frequency
      </label>
      <select
        name="frequency"
        id="frequency"
        className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>

      <button
        type="submit"
        className="w-full  mt-4 bg-gray-200 focus:outline-none focus:ring-2 border rounded-md p-2"
      >
        Add
      </button>
    </form>
  );
}
