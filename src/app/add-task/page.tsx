export default function Page() {
  return (
    <form className="flex flex-col items-center  p-6 max-w-md border border-black rounded-md">
      <h2 className="text-2xl font-bold ">Add Task</h2>

      <label htmlFor="full-name" className="w-full text-center mt-3">
        Task
      </label>
      <input
        id="full-name"
        type="text"
        placeholder="Enter full name"
        className="w-full p-2 mb-4 rounded-md border"
      />
      <button type="submit" className=" border  rounded-md p-1">
        Add Task
      </button>
    </form>
  );
}
