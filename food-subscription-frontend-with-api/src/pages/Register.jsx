
import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await api.post("/auth/register", { name, email, password });
      alert("Registration successful");
      navigate("/login");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <input className="border p-2 w-full mb-2" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input className="border p-2 w-full mb-2" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input className="border p-2 w-full mb-2" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleRegister} className="bg-green-500 text-white px-4 py-2 rounded">Register</button>
    </div>
  );
}
