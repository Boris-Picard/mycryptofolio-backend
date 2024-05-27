import mongoose from "mongoose";

const Schema = mongoose.Schema;

const coinSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  transactions: [
    {
      type: Number,
      ref: "Transaction",
    },
  ],
});

const Coin = mongoose.model("coin", coinSchema);

export default Coin;
