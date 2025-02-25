import axios from "axios";
import  { useEffect, useState } from "react";

const AddToCart = () => {
  const [fav, setFav] = useState([]);
  const API_URL = import.meta.env.VITE_BASE_URL;

  // Fetch favorite items from the backend
  useEffect(() => {
    FetchFavorites();
  }, []);

  const FetchFavorites = async () => {
    try {
      const response = await axios.get(`${API_URL}/getfav`);
      console.log(response.data.get);
      setFav(response.data.get);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

 
  const removeFromFavorites = async (id) => {
    try {
      await axios.delete(`${API_URL}/removeFromFav/${id}`);
      setFav(fav.filter((item) => item._id !== id)); 
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Favorite Items</h1>
      {fav.length === 0 ? (
        <p className="text-gray-600">No favorite items in cart.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {fav.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-4">{item.name}</h2>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
              <button
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                onClick={() => removeFromFavorites(item._id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddToCart;
