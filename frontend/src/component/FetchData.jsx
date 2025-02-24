   import React, { useEffect, useState } from 'react';
   import axios from 'axios';
// import { data } from 'react-router-dom';
   // import { FiShoppingCart } from 'react-icons/fi';

   const FetchData = () => {
   const [recipes, setRecipes] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [selected , setSelected] = useState(null)
   const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
   const [search , setSearch] =  useState("")
   const [searchFilter , setSeachFilter] = useState([])

   useEffect(() => {
      fetchRecipe();
   }, []);

   useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
   }, [cart]);

   const fetchRecipe = async () => {
      setLoading(true);
      setError(null);
      try {
         const response = await axios.get('http://localhost:5000/api/recipes');
         console.log(response.data.data);
         const myres = response.data.data;
         setRecipes(myres);
         setSeachFilter(myres)
      } catch (error) {
         console.error(error);
         setError('Failed to load recipes. Please try again later.');
      }
      setLoading(false);
   };

   const addToCart = (recipe) => {
      setCart([...cart, recipe]);
      setSelected(null)
   };

  useEffect(()=>{

   const result = recipes.filter((elem)=>
         elem.name.toLowerCase().includes(search.toLowerCase())
   )
   setSeachFilter(result)
},[search ,recipes])

   return (
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
         <h1 className="text-3xl font-bold text-gray-800 mb-6">Delicious Recipes</h1>
         <input type="search" name="" id=""
        placeholder="Search Your Recipe...." className="w-80 p-2 text-gray-600 border border-gray-300 rounded"
        value={search}
        onChange={(e)=> setSearch(e.target.value)} />
         {loading && <p className="text-lg mt-10 text-blue-600 animate-pulse">Loading recipes...</p>}
         {error && <p className="text-red-500">{error}</p>}
       
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mt-10  max-w-7xl">
        {searchFilter.length > 0 ? (
         searchFilter.map((e, index) => (
            
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 transform transition hover:scale-102 duration-300 relative h-auto">
               <img src={e.image} alt={e.name} className="w-full h-40 object-cover rounded-md" />
               <h2 className="text-xl font-semibold mt-4">{e.name}</h2>
               <p className="text-gray-600 text-sm mt-2">{e.description}</p>
               
            
               <button 
               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
               onClick={() => setSelected(e)}
               >
               View Details
               </button>
         
            </div>
         ))
       
        ):(
         <p>No recipes found</p>
        )}
         </div>
         {selected && (
            <div className="fixed inset-0 flex items-center justify-center  p-4 w-full h-auto">
               <div className="bg-white shadow-lg rounded-lg p-4 w-100">
                  <img src={selected.image} alt={selected.name} className="w-full h-80" />
                  <h2 className="text-2xl font-bold">{selected.name}</h2>
                  <p className="text-gray-600 text-sm mt-2"><span className='font-bold'>Ingredients : </span>{selected.ingredients}</p>
                  <p className="text-gray-600 text-sm mt-2">Ratings : {selected.rating}</p>
                  <p className="text-gray-600 text-sm mt-2">Cuisine : {selected.cuisine}</p>
               <p className="text-gray-600 text-sm mt-2">Tags : {selected.tags[0]}</p>
               
                  <div className='flex gap-15'>
                  <button 
               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
               onClick={() => setSelected(false)}
               >
               Close
               </button>
                  <button 
               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition" onClick={()=>addToCart(selected)}
               >
               Add To Cart
               
               </button>
            
                  </div>

               </div>

            </div>
         )}
      </div>
   );
}

   export default FetchData;
