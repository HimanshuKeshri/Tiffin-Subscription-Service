
import { useEffect, useState } from "react";
import api from "../api";

export default function MealCalendar() {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    api.get("/meals/calendar").then(res => setCalendar(res.data));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold mb-4">Your Meal Calendar</h2>
      <ul className="list-disc pl-5">
        {calendar.map(meal => (
          <li key={meal.date}>{meal.date} - {meal.status}</li>
        ))}
      </ul>
    </div>
  );
}
