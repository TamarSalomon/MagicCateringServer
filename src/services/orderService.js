const Orders = require('../models/Orders');


const getOrders = async () => {
    const orders = await Orders.find();
    return orders;
};


const addOrder = async (orderData) => {
    const newOrder = new Orders(orderData);
    await newOrder.save();
    return newOrder;
};

const deleteOrder = async (phone) => {
    const deletedOrder = await Orders.findOneAndDelete({ phone });
    return deletedOrder;
};

const updateOrder = async (phone, data) => {
    const updatedOrder = await Orders.findOneAndUpdate(
        { phone },
        data,
        { new: true }
    );
    return updatedOrder;
};





module.exports = {
    getOrders,
    addOrder,
    deleteOrder,
    updateOrder
    
};
