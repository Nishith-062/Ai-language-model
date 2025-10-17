import React from 'react';
import { FaAward } from 'react-icons/fa'; // Import the award icon from react-icons

const AchievementCard = ({ title, description, unlocked = false }) => {
    // Conditional classes for unlocked vs. locked states
    const cardClasses = unlocked
        ? 'bg-orange-50 border-orange-200'
        : 'bg-base-200 border-base-300';

    const iconClasses = unlocked ? 'text-orange-400' : 'text-gray-400';
    const titleClasses = unlocked ? 'text-slate-800' : 'text-gray-500';
    const descriptionClasses = unlocked ? 'text-slate-500' : 'text-gray-400';

    return (
        <div className={`card shadow-sm border ${cardClasses} transition-transform hover:scale-105`}>
            <div className="card-body flex-row items-center gap-4 p-5">
                <div className={iconClasses}>
                    <FaAward size={36} /> {/* Use FaAward icon with conditional styling */}
                </div>
                <div>
                    <h3 className={`font-semibold ${titleClasses}`}>{title}</h3>
                    <p className={`text-sm ${descriptionClasses}`}>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default AchievementCard;