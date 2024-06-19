const BusinessDetails = require('../models/BusinessDetails');

// Business Details
const updateDetails = async (req, res) => {
    try {
        const id = req.body.id; // ודא שיש לך מזהה כלשהו לעדכון
        const update = req.body; // הנתונים לעדכון

        // מצא ועדכן את הרשומה
        const updatedDetails = await BusinessDetails.findByIdAndUpdate(id, update, { new: true, runValidators: true });

        if (!updatedDetails) {
            return res.status(404).json({ message: 'Details not found' });
        }

        res.status(200).json({ message: 'The details have been successfully updated', updatedDetails });
    } catch (error) {
        res.status(500).json({ message: 'Error updating details', error });
    }
};



const getDetails = async(req, res) => {
    const details = await BusinessDetails.find();
    res.status(200).json(details);
};


module.exports = {
    updateDetails,
    getDetails
};
