import { sendEmail } from '../../services/sendEmail';

export default async (req, res) => {
    if(req.method === 'POST') {
      const { from_name, name, email, subject, value } = req.body;
      await sendEmail(from_name, name, email, subject, value);
      return res.status(200).end();
    }
    return res.status(404).json({
        error: {
            code: 'not_found',
            messgae: "The requested endpoint was not found or doesn't support this method."
        }
    });
}