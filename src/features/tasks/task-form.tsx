import { postTaskAction } from "./action";

export function TaskForm() {
  return (
    <form
      action={postTaskAction}
      className="flex flex-col items-center p-6 max-w-md border border-black rounded-md"
    >
      <h2 className="text-2xl font-bold">Add Task</h2>

      <label
        htmlFor="task"
        className="block text-center mt-3 text-lg font-medium"
      >
        Task
      </label>
      <input
        id="task"
        type="text"
        name={"task"}
        placeholder="Enter task"
        className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label htmlFor="frequency" className="block mt-2 text-lg font-medium">
        Frequency
      </label>
      <select
        name="frequency"
        id="frequency"
        className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      <label htmlFor="start-day" className="block mt-2 text-lg font-medium">
        Start day
      </label>
      <select
        name="start-day"
        id="start-day"
        className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 border rounded-md p-2"
      >
        Add
      </button>
    </form>
  );
}
