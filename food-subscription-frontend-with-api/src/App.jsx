
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Subscription from "./pages/Subscription";
import MealCalendar from "./pages/MealCalendar";
import CancelMeal from "./pages/CancelMeal";
import Profile from "./pages/Profile";
import AdminPanel from "./pages/AdminPanel";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setIsAdmin={setIsAdmin} />} />
        <Route path="/register" element={<Register />} />
        {isAuthenticated && (
          <>
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/calendar" element={<MealCalendar />} />
            <Route path="/cancel-meal" element={<CancelMeal />} />
            <Route path="/profile" element={<Profile />} />
            {isAdmin && <Route path="/admin" element={<AdminPanel />} />}
          </>
        )}
      </Routes>
    </Router>
  );
}
