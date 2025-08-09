
import { useState } from "react";
import api from "../api";

export default function CancelMeal() {
  const [date, setDate] = useState("");
  const [mealType, setMealType] = useState("lunch");

  const handleCancel = async () => {
    await api.post("/meals/cancel", { date, type: mealType });
    alert("Meal cancelled");
  };

  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold mb-4">Cancel Meal</h2>
      <input type="date" className="border p-2 mr-2" value={date} onChange={e => setDate(e.target.value)} />
      <select className="border p-2 mr-2" value={mealType} onChange={e => setMealType(e.target.value)}>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>
      <button onClick={handleCancel} className="bg-red-500 text-white px-4 py-2 rounded">Cancel</button>
    </div>
  );
}
