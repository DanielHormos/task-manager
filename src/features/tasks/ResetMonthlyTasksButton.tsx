"use client";

import { resetMonthlyTasksAction } from "@/features/tasks/action";
import { FaSync } from "react-icons/fa";

export default function ResetMonthlyTasksButton() {
  return (
    <button
      onClick={() => {
        resetMonthlyTasksAction();
      }}
      className="flex items-center justify-center p-2 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95"
    >
      <FaSync
        size={16}
        color="gray"
        className="hover:text-black transition-colors duration-300"
      />
    </button>
  );
}
