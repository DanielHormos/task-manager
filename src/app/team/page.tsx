export default function Page() {
  return (
    <div className="flex items-center  min-h-screen bg-gray-100">
      <form className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Create Team</h2>
        <label
          htmlFor="task"
          className="block text-lg font-medium text-gray-900"
        >
          Team Name
        </label>
        <input
          required
          maxLength={20}
          id="task"
          type="text"
          name="task"
          placeholder="Enter team name"
          className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full  mt-4 bg-gray-200 focus:outline-none focus:ring-2 border rounded-md p-2"
        >
          Create
        </button>
      </form>

      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Teams</h2>
      </div>
    </div>
  );
}
