import mongoose from "mongoose";

const favSchema = mongoose.Schema({
  foodId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
  }
})

const aadModel = mongoose.model("Fav", favSchema);

export default aadModel;

