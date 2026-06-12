import { useState } from "react";
import LoginHeader from "./LoginHeader";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@hrms.com" && password === "1234") {
      onLogin(true);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-100 via-sky-200 to-sky-300">

      {/* NAVBAR HEADER */}
      <LoginHeader user={{ role: "Login Portal" }} />

      {/* LOGIN FORM */}
      <div className="flex-1 flex items-center justify-center">

        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-2xl shadow-md w-96"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            HRMS Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg mb-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Login
          </button>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Demo: admin@hrms.com / 1234
          </p>
        </form>

      </div>

    </div>
  );
}
