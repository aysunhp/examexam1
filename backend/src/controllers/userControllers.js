const User = require("./../model/userModel");

const getAllData = async (req, res) => {
  const allData = await User.find({});
  res.send(allData);
};

const postData = async (req, res) => {
  const newData = await User(req.body);
  await newData.save();
  res.send(newData);
};

const deleteData = async (req, res) => {
  const deleted = await User.findByIdAndDelete({ _id: req.params.id });
  res.send(deleted);
};

module.exports = { getAllData, postData, deleteData };
