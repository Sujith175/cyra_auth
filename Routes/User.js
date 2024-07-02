const express = require("express");

const {
  getAllData,
  getSingleData,
  createPost,
  deleteData,
  updateTask,
} = require("../Controllers/User");
const router = express.Router();

router.route("/").get(getAllData).post(createPost);
router.route("/:id").get(getSingleData).delete(deleteData).patch(updateTask);

module.exports = router;
