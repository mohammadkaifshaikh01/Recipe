import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { AppContext } from "../context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const { setUser } = useContext(AppContext);
const API_URL = import.meta.env.VITE_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { username: name, email, password };

    if (!name || !password || !email) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(
        `${API_URL}/register`,
        userData
      );
      console.log(response.data);
      localStorage.setItem("username", name);
      // setUser(name);

      toast.success("Register Successfull !");
      setTimeout(() => navigate("/login"), 4000);
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Signup failed! Please try again."
      );
    }
  };

  return (
    <>
      {/* <nav className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-lg"> */}
      {/* <h1 onClick={()=>navigate("/")} className="text-2xl font-bold tracking-wide cursor-pointer">MyApp</h1> */}
    
    {/* </nav> */}
      <div className="flex justify-center items-center h-[60vh] mt-20 ">
        <div className="w-[550px] bg-white shadow-lg rounded-xl overflow-hidden">
          {/* Header */}
          <div className="text-center py-6 bg-gradient-to-tr from-cyan-600 to-cyan-300 text-white shadow-md">
            <h3 className="text-2xl font-semibold">Create Your Account</h3>
          </div>

          {/* Form Fields */}
          <form  onSubmit={handleSubmit}>
            <div className="p-6 flex flex-col gap-6">
              <div>
                <label className="text-gray-500 text-sm">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="peer w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 outline-none"
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              <div>
                <label className="text-gray-500 text-sm">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="peer w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 outline-none"
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              <div>
                <label className="text-gray-500 text-sm">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="peer w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 outline-none"
                  placeholder="Enter Your Password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-60 cursor-pointer bg-gradient-to-tr from-cyan-600 to-cyan-400 text-white py-3 rounded-md font-bold text-sm shadow-md hover:shadow-lg transition"
              >
                Register
              </button>
            </div>
          </form>

          {/* Button & Link */}
          <div className="px-6 pb-6">
            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?
              <button
                onClick={() => navigate("/login")}
                className="ml-1 font-bold text-cyan-500 cursor-pointer hover:underline"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        
      />
    </>
  );
};

export default Signup;
