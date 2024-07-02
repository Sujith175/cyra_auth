const User = require("../Models/User");

const getAllData = async (req, res) => {
  try {
    const data = await User.find({});
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createPost = async (req, res) => {
  try {
    const data = await User.create(req.body);
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleData = async (req, res) => {
  try {
    const { id: ID } = req.params;
    const data = User.findById({ _id: ID });

    if (!data) {
      return res.status(400).json({ msg: `No Task with ID ${ID}` });
    }

    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteData = async (req, res) => {
  try {
    const { id: ID } = req.params;
    const data = User.findOneAndDelete({ _id: ID });
    if (!data) {
      return res.status(404).json({ msg: `No Data with ID ${ID}` });
    }
    res.status(200).json({ data: data });
  } catch (error) {}
};

const updateTask = async (req, res) => {
  try {
    const { id: ID } = req.params;

    const data = User.findOneAndUpdate({ _id: ID }, req.body);
    if (!data) {
      return res.status(404).json({ msg: `No Data with ID ${ID}` });
    }
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllData,
  createPost,
  getSingleData,
  deleteData,
  updateTask,
};
