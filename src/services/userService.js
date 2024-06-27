const bcrypt = require('bcrypt');
const User = require("../models/userModel");

const getUsers = async () => {
    const users = await User.find();
    return users;
};


const signUp = async (user) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    const newUser = new User({ 
        userId: user.userId, 
        name: user.name, 
        password: hashedPassword, 
        type: user.type 
    });
    await newUser.save();
    return newUser;
};

const updateUser = async (userId, data) => {
    const updatedUser = await User.findOneAndUpdate(
        { userId },
        data,
        { new: true }
    );
    return updatedUser;
};

const deleteUser = async (userId) => {
    const deletedUser = await User.findOneAndDelete({ userId });
    return deletedUser;
};

module.exports = {
    getUsers,
    signUp,
    updateUser,
    deleteUser
};
