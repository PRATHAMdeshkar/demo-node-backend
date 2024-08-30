const mongoose= require("mongoose");

const eventSchema = mongoose.Schema({
    EventName: {
        type: String,
        required: [true, "Enter Event name"],
    },

    Description: {
        type: String,
        required: [true, "Enter Event Description"],
    },

    Owner: {
        type: String,
        required: [true, "Enter enter owner name"],
    },
},
{
    timestamps: true,
}
);
module.exports = mongoose.model("Events", eventSchema);