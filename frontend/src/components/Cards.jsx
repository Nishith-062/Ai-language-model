import React from "react";

const Cards = ({ icon, title, value }) => {
  return (
    <div className="card w-40 h-40 border border-base-300 shadow-md hover:shadow-xl transition-all flex items-center justify-center">
      <div className="text-center flex flex-col items-center justify-center">
        <div className="text-4xl text-primary mb-2">{icon}</div>
        <h2 className="card-title text-xl">{value}</h2>
        <p className="text-sm text-base-content/70">{title}</p>
      </div>
    </div>
  );
};

export default Cards;
