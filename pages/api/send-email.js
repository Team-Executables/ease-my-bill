import { sendEmail } from '../../services/sendEmail';

export default async (req, res) => {
    if(req.method === 'POST') {
      const { from_name, email, template } = req.body;
      console.log(from_name, email, template, "in api")
      await sendEmail({from_name, email, template});
      return res.status(200).end();
    }
    return res.status(404).json({
        error: {
            code: 'not_found',
            messgae: "The requested endpoint was not found or doesn't support this method."
        }
    });
}