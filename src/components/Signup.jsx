import React, { useState } from "react";
import axios from "axios";

const Signup = ({ onSignupSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupError, setSignupError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState("");

  const handleSignupSubmit = async (ev) => {
    ev.preventDefault();
    setSignupError("");
    setSignupSuccess("");

    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        email,
        password,
      });

      if (response.data.success) {
        setSignupSuccess("Account created successfully. Please log in.");
        onSignupSuccess(); // could redirect or switch back to login
      } else {
        setSignupError(response.data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setSignupError("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Create a New Account
        </h2>

        {signupError && (
          <div className="mb-4 border-2 border-red-400 bg-red-200 text-stone-900 rounded-lg py-2 px-2">
            {signupError}
          </div>
        )}
        {signupSuccess && (
          <div className="mb-4 border-2 border-green-400 bg-green-200 text-stone-900 rounded-lg py-2 px-2">
            {signupSuccess}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSignupSubmit}>
          <div>
            <label
              htmlFor="signup-email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="signup-email"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="signup-password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="signup-password"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <a
            href="#"
            onClick={onSignupSuccess}
            className="text-indigo-600 hover:underline dark:text-indigo-400"
          >
            Log in
          </a>
        </p>
      </div>
    </section>
  );
};

export default Signup;
