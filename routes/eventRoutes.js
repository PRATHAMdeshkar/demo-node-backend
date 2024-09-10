const express = require("express");
const router =express.Router();
const { getEvent, createEvent, getEvents, deleteEvent, updateEvent} = require("../controllers/eventController");


router.get("/",getEvents);

router.get("/:id",getEvent);

router.post("/",createEvent);

router.put("/:id",updateEvent);

router.delete("/:id",deleteEvent);

module.exports= router;