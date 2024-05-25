import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory hook

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useHistory hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authDetail = {
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(authDetail),
      });
      const data = await response.json();

      if (data.accessToken) {
        alert("Login successful");
        navigate("/products");
           sessionStorage.setItem("token", JSON.stringify(data.accessToken));
           sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
     
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen">
      <main>
        <section className="mx-auto">
          <p className="text-3xl text-center dark:text-slate-300 font-semi-bold my-10">
            Login
          </p>
        </section>
        <form
          onSubmit={handleSubmit}
          className="mx-auto w-[75%] h-54 p-2 rounded-lg"
        >
          <div className="mb-6 p-2">
            <label
              htmlFor=""
              className="block text-xl mb-2 p-2 dark:text-slate-100"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="dark:bg-gray-600 border-2  bg-white w-full h-12 p-2 rounded-lg"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor=""
              className="block text-xl mb-2 p-2 dark:text-slate-100"
            >
              Password
            </label>
            <input
              type="password" 
              className="dark:bg-gray-600 w-full h-11 p-2 rounded-lg"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white text-lg w-full h-12 p-2 rounded-lg"
          >
            Login
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
