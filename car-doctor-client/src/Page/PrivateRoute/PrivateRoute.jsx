import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (loading && progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [loading, progress]);

  if (loading && !user) {
    return (
      <div className="w-full h-5 bg-gray-200 rounded-full bg-gradient-to-r from-green-300 via-green-400 to-green-500 relative">
        <div
          className="h-full bg-green-600 rounded-full"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute z-30 text-xl top-0 left-24 h-full flex items-center px-2 text-gray-500">
            {progress}%
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return children;
  }

  // If the user is not logged in, redirect to the login page
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
