import  { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContextProvider } from "../context/ContextApi";

const Navbar = () => {
  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {isAuth, setIsAuth} = useContext(ContextProvider)

  useEffect(() => {
    const token = localStorage.getItem("isLoggedIn") === "true";
    setIsAuth(token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Correct key name
    setIsAuth(false);
    navigate("/");
  };

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-lg">
      <h1
        onClick={() => navigate("/")}
        className="text-2xl font-bold tracking-wide cursor-pointer"
      >
        C-K-D
      </h1>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-4">
        {!isAuth ? (
          <>
            <button
              className="bg-white text-blue-600 px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition duration-300"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
            <button
              className="bg-white text-blue-600 px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition duration-300"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </>
        ) : (
          <div className="flex items-center gap-4">
            {/* Show Cart button only when logged in */}
            <button
              className="relative bg-white text-blue-600 p-2 rounded-full hover:bg-gray-200 transition duration-300"
              onClick={() => navigate("/cart")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </button>

            <img
              src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"
              alt="Profile"
              className="w-10 h-10 rounded-full border border-white"
            />

            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition duration-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
