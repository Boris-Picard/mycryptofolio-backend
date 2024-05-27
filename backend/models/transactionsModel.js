import mongoose from "mongoose";

const Schema = mongoose.Schema;

const transactionsSchema = new Schema({
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  spent: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  coin: [
    {
      type: Schema.Types.ObjectId,
      ref: "Coin",
    },
  ],
});

const transactions = mongoose.model("transactions", transactionsSchema);

export default transactions;
