export default function Page() {
  return (
    <div className="flex items-center  min-h-screen bg-gray-100">
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Teams</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold p-2">Team 1</h3>
            <button className="btn">View</button>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold p-2">Team 2</h3>
            <button className="btn">View</button>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold p-2">Team 3</h3>
            <button className="btn">View</button>
          </div>
        </div>
      </div>
    </div>
  );
}
