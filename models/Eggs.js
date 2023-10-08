const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EggsSchema = Schema(
  {
    flock_name: {
      type: String,
      required: true,
    },

    date_picked: {
      type: String,
      required: true,
    },

    good_eggs: {
      type: Number,
      required: true,
    },

    bad_eggs: {
      type: Number,
      required: true,
    },

    additional_notes: {
      type: String,
      required: false,
    },
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

module.exports = mongoose.model("Eggs", EggsSchema);
