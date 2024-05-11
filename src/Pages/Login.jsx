import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen">
      <main>
        <section className="mx-auto">
          <p className="text-3xl text-center dark:text-slate-300 font-semi-bold my-10">
            Login
          </p>
        </section>
        <form className="mx-auto w-[75%] h-54 p-2 rounded-lg">
          <div className="mb-6 p-2"> 
            <label
              htmlFor=""
              className="block text-xl mb-2 p-2 dark:text-slate-100"
            >
              Email
            </label>
            <input type="text" className="dark:bg-gray-600 border-2  bg-white w-full h-12 p-2 rounded-lg" placeholder="enter your email" />
          </div>
          <div className="mb-6">
            <label htmlFor="" className="block text-xl mb-2 p-2 dark:text-slate-100">
              Password
            </label>
            <input
              type="text"
              className="dark:bg-gray-600 w-full h-12 p-2 rounded-lg"
              placeholder="enter your password"
            />
          </div>
          <button className="bg-blue-600 text-white text-lg w-full h-12 p-2 rounded-lg">Login</button>
        </form>
      </main>
    </div>
  );
};

export default Login;
