const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

const verifyJWT = require("../middleware/verifyJWT");

router.get("/", usersController.getUsers);
// router.get("/", verifyJWT, usersController.getUsers);
router.get("/:id", usersController.getUserProfileById);

module.exports = router;
