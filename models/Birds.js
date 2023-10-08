const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BirdsSchema = Schema(
  {
    flock_name: {
      type: String,
      required: true,
    },

    date_acquired: {
      type: String,
      required: true,
    },

    bird_type: {
      type: String,
      required: true,
    },

    breed_type: {
      type: String,
      required: true,
    },

    acquisition_method: {
      type: String,
      required: true,
    },

    flock_size: {
      type: Number,
      required: true,
    },

    flock_source: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: false,
    }
  },
  {
    virtuals: {
      id: {
        get() {
          return this._id;
        },
      },
    },
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model('Birds', BirdsSchema)
