const asyncHandler = require("express-async-handler");
const Event = require("../models/EventModel");
//@desc get all Events
//@route GET /api/events
//@access public
const getEvents = asyncHandler(async (req, res) => {
    const events = await Event.find();
    res.status(200).json(events);
});


//@desc get Event
//@route GET /api/events/:id
//@access public
const getEvent = asyncHandler(async(req, res) => {
    const event= await Event.findById(req.params.id);
    res.status(200).json(event);
});


//@desc create event
//@route POST /api/events
//@access public
const createEvent =asyncHandler (async(req, res) => {
    console.log("The request body is: ", req.body);
    const { EventName,Description,Owner} =req.body;
    const event = await Event.create({
        EventName,
        Description,
        Owner,
    });

    res.status(201).json({ message: event});
});


//@desc update event
//@route PUT /api/events/:id
//@access public
const updateEvent = asyncHandler(async(req, res) => {
    const event= await Event.findById(req.params.id);

    const updateEvent = await Event.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updateEvent);
});


//@desc DELETE event
//@route DELETE /api/events/:id
//@access public
const deleteEvent = asyncHandler(async(req, res) => {
    const event= await Event.findById(req.params.id);
    const deleteEvent = await Event.findByIdAndDelete(req.params.id)
    // await Event.remove();
    
    res.status(200).json(deleteEvent);
});

module.exports = { getEvent, createEvent, getEvents, deleteEvent, updateEvent };
