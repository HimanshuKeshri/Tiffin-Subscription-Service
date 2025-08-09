
import { useEffect, useState } from "react";
import api from "../api";

export default function Subscription() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    api.get("/plans").then(res => setPlans(res.data));
  }, []);

  const handleSubscribe = async (planId) => {
    await api.post("/subscription/subscribe", { planId });
    alert("Subscribed successfully");
  };

  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold mb-4">Choose Your Subscription</h2>
      <div className="grid gap-4 md:grid-cols-3">
      {plans && plans.length > 0 ? ( 
        plans.map(plan => (
          <div key={plan.id} className="border p-4 rounded">
            <h3 className="font-bold">{plan.name}</h3>
            <p>₹{plan.price}</p>
            <button onClick={() => handleSubscribe(plan.id)} className="bg-blue-500 text-white px-3 py-1 mt-2 rounded">Subscribe</button>
          </div>
        )) ) : (
          <p>No plans available</p>
        )}
      </div>
    </div>
  );
}
