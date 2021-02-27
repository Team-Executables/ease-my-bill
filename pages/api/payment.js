// import { loadRazorpay } from '../../services/razorpay';
const Razorpay = require("razorpay");
import NextCors from 'nextjs-cors';

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

export default async (req, res) => {
    if(req.method === 'POST') {
      const { amount } = req.body;
      console.log(amount, "in api")
      
      const order = await loadRazorpay({amount})
      console.log(order.amount, order.id, order.currency, "in api")
      //const data = JSON.stringify(order)
      //await sendEmail({from_name, email, template});
      return res.status(200).json({id:order.id, amt:order.amount, currency:order.currency});
    }
    return res.status(404).json({
        error: {
            code: 'not_found',
            messgae: "The requested endpoint was not found or doesn't support this method."
        }
    });
}


