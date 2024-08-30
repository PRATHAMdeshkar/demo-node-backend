const asyncHandler = require ("express-async-handler");
const User = require("../models/UserModel");

//@route GET /api/users
const getUsers = asyncHandler(async(req,res) =>{
    const user = await User.find();
    res.status(200).json(user);
});



//@route POST /api/users
const createUser = asyncHandler(async(req,res) =>{
    console.log("The request body is :", req.body);
    const {UserName,ContactNo,companyName} = req.body;

    const user = await User.create({
        UserName,
        ContactNo,
        companyName,
    });

    res.status(200).json(user);
});


//@route Delete /api/users/:id
const deleteUser = asyncHandler(async(req,res) =>{
    const deleteUser = await User.findByIdAndDelete(req.params.id)

    res.status(200).json(deleteUser);
});

module.exports= {getUsers,createUser,deleteUser};