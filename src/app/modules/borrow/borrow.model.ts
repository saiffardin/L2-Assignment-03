import { model, models, Schema } from "mongoose";
import { IBorrow } from "./borrow.interface";

const borrowSchema = new Schema<IBorrow>(
  {
    book: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    quantity: {
      type: Number,
      min: 0,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Borrow = models.Borrow || model<IBorrow>("Borrow", borrowSchema);

export default Borrow;
