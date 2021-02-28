const Razorpay = require('razorpay');
const crypto = require('crypto');
import firebase from 'firebase/app';
import initFirebase from '../../services/firebase';
import 'firebase/firestore';

  initFirebase();
  const db = firebase.firestore();

// const PaymentDetailsSchema = mongoose.Schema({
//   razorpayDetails: {
//     orderId: String,
//     paymentId: String,
//     signature: String,
//   },
//   success: Boolean,
// });

//const PaymentDetails = mongoose.model('PatmentDetail', PaymentDetailsSchema);

export default async (req, res) => {
  if(req.method === 'POST') {
    const {
      orderCreationId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
      uid,
      email,
      amt
    } = req.body;

    const shasum = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET);
    shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
    const digest = shasum.digest('hex');

    if (digest !== razorpaySignature)
      return res.status(400).json({ msg: 'Transaction not legit!' });

    // const newPayment = PaymentDetails({
    //   razorpayDetails: {
    //     orderId: razorpayOrderId,
    //     paymentId: razorpayPaymentId,
    //     signature: razorpaySignature,
    //   },
    //   success: true,
    // });

  
    //firebase save

    db.collection('payments').doc(`${uid}`).set({
      email: email,
      orderId: razorpayOrderId,
      paymentId: razorpayPaymentId,
      signature: razorpaySignature,
      amount: amt
    })
    .then(() => {
      console.log("Transaction success");
    })
    // .then(() => {
    //       fetch('/api/send-email', {
    //           method: 'POST',
    //           headers: { 'Content-Type': 'application/json' },
    //           body: JSON.stringify({ from_name: 'Ease My Bill', email: email, template: 'd-0dfe75fa777d4b698973b7bb2ba80b9a' })
    //       });
      
    // })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });


    res.json({
      msg: 'success',
      orderId: razorpayOrderId,
      paymentId: razorpayPaymentId,
    });

    return res.status(200).end();
  }
  // return res.status(404).json({
  //     error: {
  //         code: 'not_found',
  //         messgae: "The requested endpoint was not found or doesn't support this method."
  //     }
  // });
}
