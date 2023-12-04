import React, { useContext, useState } from "react";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
const Register = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const inputOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your registration logic here
    try {
      const userCredential = await createUser(
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      console.log("registration successsfull", user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center my-14">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-6">
          <label htmlFor="fullName" className="block text-gray-700 font-medium">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring focus:ring-blue-300"
            onChange={inputOnChange}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring focus:ring-blue-300"
            onChange={inputOnChange}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring focus:ring-blue-300"
            onChange={inputOnChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-6 text-center">
        <p>Or sign up with:</p>
        <div className="flex justify-center mt-3">
          <button
            onClick={handleGoogleSignIn}
            className="mr-2 p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700"
          >
            <FaGoogle />
          </button>
          <button className="mr-2 p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700">
            <FaFacebook />
          </button>
          <button className="mr-2 p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700">
            <FaLinkedin />
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-xl my-6">
          Already Have An Account
          <Link className="underline text-blue-700" to="/login">
            Login
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Register;
