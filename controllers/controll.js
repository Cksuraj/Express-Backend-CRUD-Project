const User = require("../models/usermodel.js"); // It need User Schmea to create the routes using data

exports.home = (req, res) => {
  // simple route getting resopnse as Hello World
  res.send("Hello world");
};

// let's Understand the CURD Functionality

// 1st Creating user
exports.createUser = async (req, res) => {
  // Extract Info of Creating user
  try {
    // here we are desturcching
    const { name, email } = req.body;

    if (!name || !email) {
      throw new Error("Email and User are required");
    }

    // Details Recieved
    const user = await User.create({
      name,
      email,
    });

    // User Created
    return res.status(200).json({
      sucess: true,
      data: user,
      message: "User creaed Successfully"
    });

    const userExits = User.findOne({ email });

    if (userExits) {
      throw new Error("User alredy exists");
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      sucess: false,
      message: error.message,
    });
  }
};

// 2st GetUser information -Route
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      succes: true,
      users,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// 3rd Delete user from DB -Route
exports.deleteUser = async (req, res) => {
  try {
    // params.ID is Unquie Id Genrated when the user is Created

    const userID = req.params.Id;
    const user = await User.findByIdAndDelete(userID);
    res.status(200).json({
      succes: true,
      // data: user,
      message: "User deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: "false",
      message: error.message,
    });
  }
};

// 4th Edit-Modify User - Route
exports.editUser = async (req, res) => {
  try {
    const user = await User.findByAndUpdate(req.parmas.Id, req.body);
    res.status(200).json({
      success: true,
      data: user,
      message: "User Edited successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
