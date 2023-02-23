export default {
  jwt: {
    secret: (process.env.JWT_SECRET as string) || "abcdef",
    expiresIn: "1d",
  },
};
