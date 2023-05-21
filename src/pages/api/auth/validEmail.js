import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export default async function handler(req, res) {
  await dbConnect();
  const { email } = req.body;

  const emailIsValid = await User.findOne({ email: email });

  if (!emailIsValid) {
    res.status(200).json({ valid: "success" });
  } else {
    res.status(200).json({ valid: "error" });
  }
}
