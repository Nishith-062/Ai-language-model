import React from "react";
import { FaBolt } from "react-icons/fa";

const Quests = () => {
  const quests = [
    { id: 1, title: "Earn 20 XP", progress: 20 },
    { id: 2, title: "Earn 50 XP", progress: 40 },
    { id: 3, title: "Earn 100 XP", progress: 60 },
    { id: 4, title: "Earn 500 XP", progress: 80 },
    { id: 5, title: "Earn 1000 XP", progress: 100 },
  ];

  return (
    <div className="p-6 bg-base-100 rounded-xl shadow-md border border-base-300 w-xs">
      {/* Header */}
      <div className="flex items-center justify-between ">
        <h2 className="text-sm font-semibold">Quests</h2>
        <button className="text-primary font-medium hover:underline">
          VIEW ALL
        </button>
      </div>

      <div className="divider my-0"></div>

      {/* Quests list */}
      <div className="p-0">
        {quests.map((quest) => (
          <div key={quest.id}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-md bg-gradient-to-tr from-orange-500 to-yellow-400 text-white">
                <FaBolt className="text-sm" />
              </div>
              <span className="font-medium text-sm text-base-content">{quest.title}</span>
            </div>

            {/* Progress bar */}
            <progress
              className="progress progress-primary"
              value={quest.progress}
              max="100"
            ></progress>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quests;
