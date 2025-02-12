const userService= require("../services/userService")

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users.
 *     responses:
 *       200:
 *         description: Successfully retrieved users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The user ID.
 *                   name:
 *                     type: string
 *                     description: The user name.
 *       500:
 *         description: Failed to get users.
 */
const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get users', error });
    }
};

/**
 * @swagger
 * /users/signup:
 *   post:
 *     summary: Sign up a new user
 *     description: Create a new user account.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user name.
 *               password:
 *                 type: string
 *                 description: The user password.
 *     responses:
 *       201:
 *         description: Successfully signed up.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The user ID.
 *                 username:
 *                   type: string
 *                   description: The user name.
 *       500:
 *         description: Failed to sign up.
 */
async function signUp(req, res) {
    try {
        const { userId, name, password, type, email } = req.body;

      
        const userData = {
            userId,
            name,
            password,
            type,
            email
        }; 
        const newUser = await userService.addUser(userData);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

/**
 * @swagger
 * /users/{userId}:
 *   put:
 *     summary: Update a user
 *     description: Update details of an existing user.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user name.
 *               password:
 *                 type: string
 *                 description: The user password.
 *     responses:
 *       200:
 *         description: Successfully updated user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The success message.
 *                 updatedUser:
 *                   type: object
 *                   description: The updated user details.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Failed to update user.
 */
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

/**
 * @swagger
 * /users/{userId}:
 *   delete:
 *     summary: Delete a user
 *     description: Delete an existing user.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID.
 *     responses:
 *       200:
 *         description: Successfully deleted user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The success message.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Failed to delete user.
 */
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const deletedUser = await userService.deletedUser(userId);
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
