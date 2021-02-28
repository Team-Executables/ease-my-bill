import axios from 'axios'

const Button = ({ amount, uid, email }) => {

        function loadScript(src) {
            return new Promise((resolve) => {
                const script = document.createElement("script");
                script.src = src;
                script.onload = () => {
                    resolve(true);
                };
                script.onerror = () => {
                    resolve(false);
                };
                document.body.appendChild(script);
            });
        }

    const displayRazorpay = async () => {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
        
        // const result = await fetch('/api/payment', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({amount: amount})
        // });
        const result = await axios.post('/api/payment', {amount: amount});

        if (!result) {
            alert("Razorpay not working");
            return;
        }

        const { amt, id: order_id, currency } = result.data;

        const options = {
            key: process.env.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
            amount: amt.toString(),
            currency: currency,
            name: "Ease my bill",
            description: "Transaction",
            //image: { logo },
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                    uid: uid,
                    email: email,
                    amt: amt
                };

                const result = await axios.post("/api/success", data);

                alert(result.data.msg);
            },
            prefill: {
                name: "Ease my bill",
                email: "easemybill@gmail.com",
                contact: "9999999999",
            },
            notes: {
                address: "Executables",
            },
            theme: {
                color: "#284B63",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();



        //console.log(result.data, 'in button')
    }

    return (
        <button onClick={displayRazorpay}>
            Pay ₹{amount}
        </button>
    );
}
 
export default Button;