import { sendEmail } from '../../utils/sendEmail';

export default async (req, res) => {
    if(req.method === 'POST') {
      // const { name, email, subject, value(bill, payment success, greeting), from_name}
      const { name, email } = req.body;
      await sendEmail({ name, email });
      return res.status(200).end();
    }
    return res.status(404).json({
        error: {
            code: 'not_found',
            messgae: "The requested endpoint was not found or doesn't support this method."
        }
    });
}