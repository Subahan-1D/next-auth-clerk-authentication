import User from "../models/user.model";
import { connect } from "../mongodb/mongoose";

export const createOrUpdateUser = async (
  id,
  fast_name,
  last_name,
  image_url,
  username,
  email_addresses
) => {
  try {
    await connect();
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          fristName: fast_name,
          lastName: last_name,
          avatar: image_url,
          email: email_addresses[0].email,
          userName: username,
        },
      },
      {
        new: true,
        upsert: true,
      }
    );
    return user;
  } catch (error) {
    console.log("Creating updating user", error);
  }
};

export const deleteUser = async (id) => {
  try {
    await connect();
    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    console.log(error);
  }
};
