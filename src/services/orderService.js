const Order = require('../models/orderModel');

//מנהל
const getOrders = async () => {
    const orders = await Order.find();
    return orders;
};

const getOrdersByServiceType = async (serviceType) => {
    try {
        const orders = await Order.find({ serviceType: serviceType });
        return orders;
    } catch (error) {
        throw new Error('Failed to fetch orders');
    }
};


const addOrder = async (orderData) => {
    const newOrder = new Order(orderData);
    await newOrder.save();
    return newOrder;
};

const deleteOrder = async (phone) => {
    const deletedOrder = await Order.findOneAndDelete({ phone });
    return deletedOrder;
};

const updateOrder = async (phone, data) => {
    const updatedOrder = await Order.findOneAndUpdate(
        { phone },
        data,
        { new: true }
    );
    return updatedOrder;
};





module.exports = {
    getOrders,
    getOrdersByServiceType,
    addOrder,
    deleteOrder,
    updateOrder
    
};
