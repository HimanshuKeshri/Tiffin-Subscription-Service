import React, { useState } from "react";
import api from "../api";

const AdminPanel = () => {
  const [planName, setPlanName] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState(""); // days or months
  const [message, setMessage] = useState("");

  const handleCreatePlan = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/plans", {
        name: planName,
        price,
        duration,
      });
      setMessage("Plan created successfully!");
    } catch (err) {
      console.error(err);
      setMessage("Error creating plan.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Create New Plan</h2>
      <form onSubmit={handleCreatePlan}>
        <input
          type="text"
          placeholder="Plan Name"
          className="w-full p-2 border rounded mb-3"
          value={planName}
          onChange={(e) => setPlanName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price (₹)"
          className="w-full p-2 border rounded mb-3"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Duration (days)"
          className="w-full p-2 border rounded mb-3"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Create Plan
        </button>
        {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}
      </form>
    </div>
  );
};

export default AdminPanel;
