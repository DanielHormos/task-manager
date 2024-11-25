export function TaskForm() {
  return (
    <form className="flex flex-col items-center  p-6 max-w-md border border-black rounded-md">
      <h2 className="text-2xl font-bold ">Add Task</h2>

      <label
        htmlFor="task"
        className="block text-center mt-3 text-lg font-medium"
      >
        Task
      </label>
      <input
        id="task"
        type="text"
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
      <button
        type="submit"
        className="w-full bg-blue-500 text-white mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 border  rounded-md p-2"
      >
        Add
      </button>
    </form>
  );
}
