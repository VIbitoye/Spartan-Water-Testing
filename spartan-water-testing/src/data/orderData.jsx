// src/data/ordersData.js
import waterKits from './waterKits';

const ordersData = [
    {
        id: 101,
        date: "2023-10-15",
        status: "Delivered",
        total: waterKits[0].price,
        customerName: "John Doe",
        shippingAddress: "123 Main St, Springfield, IL",
        items: [
            { id: waterKits[0].id, name: waterKits[0].name, quantity: 1, price: waterKits[0].price }
        ]
    },
    {
        id: 102,
        date: "2023-10-01",
        status: "Shipped",
        total: waterKits[1].price * 2,
        customerName: "John Doe",
        shippingAddress: "123 Main St, Springfield, IL",
        items: [
            { id: waterKits[1].id, name: waterKits[1].name, quantity: 2, price: waterKits[1].price }
        ]
    },
    {
        id: 103,
        date: "2023-09-22",
        status: "Cancelled",
        total: waterKits[3].price,
        customerName: "John Doe",
        shippingAddress: "123 Main St, Springfield, IL",
        items: [
            { id: waterKits[3].id, name: waterKits[3].name, quantity: 1, price: waterKits[3].price }
        ]
    },
    {
        id: 104,
        date: "2023-08-30",
        status: "Delivered",
        total: waterKits[4].price + waterKits[2].price,
        customerName: "John Doe",
        shippingAddress: "123 Main St, Springfield, IL",
        items: [
            { id: waterKits[4].id, name: waterKits[4].name, quantity: 1, price: waterKits[4].price },
            { id: waterKits[2].id, name: waterKits[2].name, quantity: 1, price: waterKits[2].price }
        ]
    }
];

export default ordersData;
