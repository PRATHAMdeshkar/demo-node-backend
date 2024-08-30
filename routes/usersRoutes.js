const express = require("express");
const router = express.Router();
const {getUsers,createUser,deleteUser} =require("../controllers/usersController");


router.route("/",).get(getUsers);

router.route("/",).post(createUser);

router.route("/:id",).delete(deleteUser);


module.exports = router;