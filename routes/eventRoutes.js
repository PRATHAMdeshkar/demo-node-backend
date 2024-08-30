const express = require("express");
const router =express.Router();
const { getEvent, createEvent, getEvents, deleteEvent, updateEvent} = require("../controllers/eventController");


router.route("/").get(getEvents);

router.route("/:id").get(getEvent);

router.route("/").post(createEvent);

router.route("/:id").put(updateEvent);

router.route("/:id").delete(deleteEvent);

module.exports= router;