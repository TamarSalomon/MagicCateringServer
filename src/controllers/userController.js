
const userService = require('../services/userService');

const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get users', error });
    }
};

const signUp = async (req, res) => {
    try {
        const user = req.body;
        const newUser= await userService.signUp(user);
        res.status(201).send(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
};

const updateUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const updatedUser = await userService.updateUser(userId, req.body);
        if (updatedUser) {
            res.status(200).json({ message: 'User updated', updatedUser });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to update user', error });
    }
};

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const deletedUser = await userService.deleteUser(userId);
        if (deletedUser) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete user', error });
    }
};

module.exports = {
    getUsers,
    signUp,
    updateUser,
    deleteUser
};
