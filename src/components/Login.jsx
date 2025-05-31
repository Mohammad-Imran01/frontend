import React, { useState } from "react";

const __userId = "imr@123.com";
const __userPassword = "123@123";

const Login = ({ loginHandler }) => {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSetUserId = (val) => {
    setUserId(val);
  };
  const handleSetUserPassword = (val) => {
    setUserPassword(val);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (__userId === userId && __userPassword === userPassword) {
      console.log("Logging successful");
      loginHandler(true);
    } else {
      console.log("Loggin unsuccessfull");
      loginHandler(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Login to Your Account
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 p-2"
              onBlur={(e) => handleSetUserId(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              required
              placeholder="••••••••"
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 p-2"
              onBlur={(e) => handleSetUserPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a
              href="#"
              className="text-sm text-indigo-600 hover:underline dark:text-indigo-400"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <a
            href="#"
            className="text-indigo-600 hover:underline dark:text-indigo-400"
          >
            Sign up
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;
