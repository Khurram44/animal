import { Magic } from "magic-sdk";
const magic = new Magic("pk_live_3E12D72DB0B2B644");
export const checkUser = async (cb) => {
  const isLoggedIn = await magic.user.isLoggedIn();
  if (isLoggedIn) {
    const user = await magic.user.getMetadata();
    return cb({ isLoggedIn: true, email: user.email });
  }
  return cb({ isLoggedIn: false });
};

export const loginUser = async (email) => {
  try {
    await magic.auth.loginWithMagicLink({ email });
  } catch (err) {
    throw new Error("Email login failed");
  }
};

export const logoutUser = async () => {
  await magic.user.logout();
};
