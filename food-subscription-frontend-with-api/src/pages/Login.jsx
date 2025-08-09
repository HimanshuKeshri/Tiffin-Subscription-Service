
import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsAuthenticated, setIsAdmin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", { email, password });
      const token = res.data.token;
      localStorage.setItem("token", token);  // Save token

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`; // Attach for next requests

      setIsAuthenticated(true);
      setIsAdmin(res.data.role === "admin");
      if(res.data.role === "admin"){
        navigate("/admin");
      }else{
        navigate("/subscription");
      }
    } catch (err) {
      console.log(err);
      alert("Login failed");
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input className="border p-2 w-full mb-2" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input className="border p-2 w-full mb-2" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
    </div>
  );
}
