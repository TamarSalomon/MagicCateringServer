const BusinessDetails = require('../models/BusinessDetails');


const getDetails = async () => {
    const details = await BusinessDetails.find();
    return details;
};

const updateDetails = async (id, update) => {
    const updatedDetails = await BusinessDetails.findByIdAndUpdate(id, update, { new: true, runValidators: true });
    return updatedDetails;
};



module.exports = {
    getDetails,
    updateDetails
    
};


