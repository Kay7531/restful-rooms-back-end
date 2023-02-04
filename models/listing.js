import mongoose from "mongoose";

const Schema = mongoose.Schema

const reviewSchema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      enum: [ 1, 2, 3, 4, 5 ],
      required: true,
    },
    author: { type: Schema.Types.ObjectId, ref: "Profile" } 
  },
  { timestamps: true }
)

const reservationSchema = new Schema(
  {
    dates: {
      type: Date,
      type: Date,
      required: true
    },
    guests: {
      type: Number,
      guests: [ 1, 2, 3, 4, 5, 6 ],
      required: true,
    },
    author: { type: Schema.Types.ObjectId, ref: "Profile" } 
  },
  { timestamps: true }
)

const activitySchema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    author: { type: Schema.Types.ObjectId, ref: "Profile" } 
  },
  { timestamps: true }
)

const listingSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    bedrooms: {
      type: Number,
      enum: [ 1, 2, 3, 4, 5, 6, 7, 8],
      required: true,
    },
    beds: {
      type: Number,
      enum: [ 1, 2, 3, 4, 5, 6, 7, 8],
      required: true,
    },
    baths: {
      type: Number,
      enum: [ 1, 2, 3, 4, 5, 6, 7, 8],
      required: true,
    },
    guests: {
      type: Number,
      enum: [ 1, 2, 3, 4, 5, 6, 7, 8],
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
    reviews: [reviewSchema],
    reservation: [reservationSchema],
    activities: [activitySchema],
  },
  { timestamps: true }
)

const Listing = mongoose.model("Listing", listingSchema)

export { Listing }