import React from "react";

// {
//   learner: "🎉 I landed a job at Google!",
//   countries: "🌎 From India, now working in California",
//   rate: "📈 The Data Science track was life-changing",
//   courses: "🧠 The instructors were incredibly clear and supportive",
//   rating: "⭐️⭐️⭐️⭐️⭐️ Couldn't have done it without this platform!",
// },

const StoryCard = ({ learner, countries, rate, courses, rating }) => {
  // return <div>{learner + countries + rate + courses + rating}</div>;
  return (
    <div className="flexCenter p-4 rounded-sm shadow-sm/60 h-52 w-1/3 shrink-0 text-slate-600 dark:text-slate-100">
      <ul className="flex-col">
        <li>{learner}</li>
        <li>{countries}</li>
        <li>{rate}</li>
        <li>{courses}</li>
        <li>{rating}</li>
      </ul>
    </div>
  );
};

export default StoryCard;
