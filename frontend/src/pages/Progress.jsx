import React from "react";
import Cards from "../components/Cards";
import AchievementsSection from "../components/AchievementsSection";

const Progress = () => {
  const data = [
    { icon: "🏆", title: "Current streak", value: 7 },
    { icon: "📈", title: "Total Points", value: 2448 },
    { icon: "🎯", title: "Lessons Completed", value: 5 },
    { icon: "🕒", title: "Current Level", value: "B1" },
  ];
  console.log(data);

  return (
    <div className="w-full flex gap-2 flex-col justify-center items-center pb-4">
      <h1 className="text-3xl font-bold">Your Progress</h1>
      <p className="mt-4 text-md">
        Track your learning journey and achievements here.
      </p>
      <div className="flex gap-4 mt-6 w-4xl flex-wrap justify-between">
        {data.map((item, index) => (
          <Cards
            key={index}
            icon={item.icon}
            title={item.title}
            value={item.value}
          />
        ))}

        <div className="flex flex-col gap-2 w-4xl border border-base-300 p-4 rounded-lg mt-4 ">
          <h1 className="text-lg">Level Progress</h1>
          <p className="text-sm">450 XP to level B2</p>
          <progress
            className="progress progress-info "
            value="70"
            max="100"
          ></progress>
          <div className="flex justify-between">
            <span>2450XP</span>
            <span>2900XP</span>
          </div>
        </div>
      </div>
      {/* Achievements Section */}
      <AchievementsSection />
    </div>
  );
};

export default Progress;
