import React from "react";

const CourseCard = ({ title, description, duration, level, price }) => {
  return (
    <div className="dark:bg-gray-600 text-stone-800 dark:text-stone-100 shadow-lg rounded-lg p-6">
      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-50">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-100 mt-2">{description}</p>
      <p className="text-gray-500 dark:text-gray-200 mt-1">
        Duration: {duration}
      </p>
      <p className="text-gray-500 dark:text-gray-200 mt-1">Level: {level}</p>
      <p className="text-slate-800 dark:text-gray-50 font-bold mt-2">{price}</p>
    </div>
  );
};

export default CourseCard;
