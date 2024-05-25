import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate(); // Corrected typo here

  async function handleRegister(event) {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }    
    setEmailError("");
    const authDetail = {
      name,
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(authDetail),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      console.log(data);

      if (data.accessToken) {
        alert("Registration successful");
        navigate("/products");
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  
        
      } else {
        throw new Error("Failed to retrieve access token");
      }
    } catch (error) {
      console.error("Registration error:", error.message);
      alert("Registration failed");
    }
  }

  return (
    <div className="min-h-screen">
      <main>
        <section className="mx-auto">
          <p className="text-3xl text-center dark:text-slate-300 font-semi-bold my-10">
            Register
          </p>
        </section>
        <form
          onSubmit={handleRegister}
          className="mx-auto w-[75%] h-54 p-2 rounded-lg"
        >
          <div className="mb-6 p-2">
            <label
              htmlFor="name"
              className="block text-xl mb-2 p-2 dark:text-slate-100"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="dark:bg-gray-600 dark:text-white w-full h-12 p-2 rounded-lg"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-6 p-2">
            <label
              htmlFor="email"
              className="block text-xl mb-2 p-2 dark:text-slate-100"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="dark:bg-gray-600 dark:text-white w-full h-12 p-2 rounded-lg"
              placeholder="Enter your email"
            />
            {emailError && <p className="dark:text-red-500">{emailError}</p>}
          </div>
          <div className="mb-6 p-2">
            <label
              htmlFor="password"
              className="block text-xl mb-2 p-2 dark:text-slate-100"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="dark:bg-gray-600 dark:text-white w-full h-12 p-2 rounded-lg"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white text-lg w-full h-12 p-2 rounded-lg"
          >
            Register
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;
