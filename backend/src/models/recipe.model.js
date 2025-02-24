import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  image: { type: String, required: true },
  imageType: { type: String, required: true },
  title: { type: String, required: true },
  readyInMinutes: { type: Number, required: true },
  servings: { type: Number, required: true },
  sourceUrl: { type: String, required: true },
  vegetarian: { type: Boolean, required: true },
  vegan: { type: Boolean, required: true },
  glutenFree: { type: Boolean, required: true },
  dairyFree: { type: Boolean, required: true },
  veryHealthy: { type: Boolean, required: true },
  cheap: { type: Boolean, required: true },
  veryPopular: { type: Boolean, required: true },
  sustainable: { type: Boolean, required: true },
  lowFodmap: { type: Boolean, required: true },
  weightWatcherSmartPoints: { type: Number },
  gaps: { type: String },
  preparationMinutes: { type: Number },
  cookingMinutes: { type: Number },
  aggregateLikes: { type: Number },
  healthScore: { type: Number, required: true },
  creditsText: { type: String },
  license: { type: String },
  sourceName: { type: String },
  pricePerServing: { type: Number, required: true },
  summary: { type: String, required: true },
  cuisines: { type: [String] },
  dishTypes: { type: [String], required: true },
  diets: { type: [String], required: true },
  occasions: { type: [String] },
  spoonacularScore: { type: Number, required: true },
  spoonacularSourceUrl: { type: String, required: true }
});

const recipie = mongoose.model("Recipe", RecipeSchema);
export default recipie;
