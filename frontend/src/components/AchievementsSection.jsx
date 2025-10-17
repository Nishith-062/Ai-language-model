import React from 'react';
import { FaAward } from 'react-icons/fa'; // Import FaAward for the header
import AchievementCard from './AchievementCard';

// Your achievements data can come from an API or be defined statically
const achievementsData = [
    { id: 1, title: 'First Steps', description: 'Complete 5 lessons', unlocked: true },
    { id: 2, title: 'Week Warrior', description: '7 day streak', unlocked: true },
    { id: 3, title: 'Conversationalist', description: '10 chat sessions', unlocked: true },
    { id: 4, title: 'Grammar Master', description: 'Perfect grammar score', unlocked: false },
    { id: 5, title: 'Native Speaker', description: 'Reach advanced level', unlocked: false },
    { id: 6, title: 'Quick Learner', description: 'Finish a course in 3 days', unlocked: false },
];

const AchievementsSection = () => {
    return (
        <div className="bg-base-100 p-6 sm:p-8 rounded-2xl shadow-lg border border-base-300 w-4xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-6">
                <FaAward className="text-orange-500" size={28} /> {/* Use FaAward for the header */}
                <h2 className="text-2xl font-bold text-gray-800">Achievements</h2>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {achievementsData.map(achievement => (
                    <AchievementCard
                        key={achievement.id}
                        title={achievement.title}
                        description={achievement.description}
                        unlocked={achievement.unlocked}
                    />
                ))}
            </div>
        </div>
    );
};

export default AchievementsSection;