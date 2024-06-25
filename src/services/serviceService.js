const Service = require('../models/serviceModel');

//מנהל
const getServices = async () => {
    const servicec = await Service.find();
    return servicec;
};

const getServiceByServiceType = async (serviceType) => {
    try {
        const service = await Service.find({ serviceType: serviceType });
        return service;
    } catch (error) {
        throw new Error('Failed to fetch service');
    }
};

const addService = async (serviceData) => {
    const newService = new Service(serviceData);
    await newService.save();
    return newService;
};

const deleteService = async (phone) => {
    const deletedService = await Service.findOneAndDelete({ phone });
    return deletedService;
}

const updateService = async (phone, data) => {
    const updatedService = await Service.findOneAndUpdate(
        { phone },
        data,
        { new: true }
    );
    return updatedService;
};


module.exports = {
    getServices,
    getServiceByServiceType,
    addService,
    deleteService,
    updateService

};

