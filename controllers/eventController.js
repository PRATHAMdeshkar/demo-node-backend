const asyncHandler = require("express-async-handler");
const Event = require("../models/EventModel");
const user = require("../models/UserModel");


//@route GET /api/events
const getEvents = asyncHandler(async (req, res) => {
    const events = await Event.find().populate('user', 'UserName companyName');
    res.status(200).json(events);
});



//@route GET /api/events/:id
const getEvent = asyncHandler(async(req, res) => {
    const event= await Event.findById(req.params.id).populate('user', 'UserName companyName');
    res.status(200).json(event);
});


//@route POST /api/events
const createEvent =asyncHandler (async(req, res) => {
    console.log("The request body is: ", req.body);
    const { EventName,Description, userId} =req.body;

    const foundUser = await user.findById(userId);

    if (!foundUser) {
        return res.status(404).json({ message: "User not found" });
    }  

    const event = await Event.create({
        EventName,
        Description,
        user : userId,
    });

    res.status(201).json(event);
});


//@route PUT /api/events/:id
const updateEvent = asyncHandler(async(req, res) => {

    const { id } = req.params;

    const updateEvent = await Event.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updateEvent);
});


//@route DELETE /api/events/:id
const deleteEvent = asyncHandler(async(req, res) => {
    const { id } = req.params;

    const deleteEvent = await Event.findByIdAndDelete(id);
    // await Event.remove();
    
    res.status(200).json(deleteEvent);
});

module.exports = { getEvent, createEvent, getEvents, deleteEvent, updateEvent };
