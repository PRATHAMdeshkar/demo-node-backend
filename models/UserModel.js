const mongoose =require("mongoose");

const userSchema = mongoose.Schema({
    UserName: {
        type: String,
        required: [true, "Enter user name"],
    },

    ContactNo: {
        type: String,
        required: [true, "Enter contact number"],
    },

    companyName: {
        type: String,
        required: [true, "Enter Company name"],
    },
},
{
    timestamps: true,
}
);
module.exports = mongoose.model("User", userSchema);