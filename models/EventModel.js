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

    // Owner: {
    //     type: String,
    //     required: [true],
    // },
    user: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
},
{
    timestamps: true,
}
);
module.exports = mongoose.model("Event", eventSchema);