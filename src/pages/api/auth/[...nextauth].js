import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      credentials: {
        firstName: { label: "First Name", type: "text" },
        lastName: { label: "Last Name", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        gender: { label: "Gender", type: "text" },
      },
      authorize: async (credentials) => {
        const { email, password, firstName, lastName, gender } = credentials;

        await dbConnect();

        if (!email || !password) {
          throw new Error("All fields must be provided");
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
          // Check if the password is correct
          const isPasswordValid = await bcrypt.compareSync(
            password,
            existingUser?.password
          );

          if (!isPasswordValid) {
            throw new Error("Incorrect password");
          }

          return {
            id: existingUser._id,
            email: existingUser.email,
            lastName: existingUser.lastName,
            firstName: existingUser.firstName,
            gender: existingUser.gender,
          };
        }

        if (!email || !password || !firstName || !lastName || !gender) {
          throw new Error("All fields must be provided");
        } else {
          const saltRounds = 10;
          const hashedPassword = await bcrypt.hash(password, saltRounds);

          const newUser = new User({
            email,
            lastName,
            firstName,
            gender,
            password: hashedPassword,
          });
          await newUser.save();

          return {
            id: newUser._id.toString(),
            email: newUser.email,
            lastName: newUser.lastName,
            firstName: newUser.firstName,
            gender: newUser.gender,
          };
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
      async profile(profile) {
        await dbConnect();

        const userProfile = {
          firstName: profile.given_name ?? "",
          lastName: profile.family_name ?? "",
          email: profile.email,
          password: "",
          role: "customer",
        };

        const oldUser = await User.findOne({ email: profile.email });

        if (!oldUser) {
          const newUser = new User({
            ...userProfile,
            provider: "google",
          });
          await newUser.save();

          return {
            id: newUser._id,
            email: newUser.email,
            lastName: newUser.lastName,
            firstName: newUser.firstName,
            gender: newUser?.gender || "",
          };
        }

        return {
          id: oldUser._id,
          email: oldUser.email,
          lastName: oldUser.lastName,
          firstName: oldUser.firstName,
          gender: oldUser?.gender || "",
        };
      },
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
};

export default NextAuth(authOptions);
