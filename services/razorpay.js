const Razorpay = require("razorpay");

const loadRazorpay = async ({ amount }) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });

        const options = {
            amount: amount*100, // amount in smallest currency unit
            currency: "INR",
            receipt: "receipt_order_74394",
        };

        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send("Some error occured");

        console.log(order)

        return order;
    } catch (error) {
        res.status(500).send(error);
    }
}

export { loadRazorpay }