import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "93845b93bd7e908c718d4f3f10370676e0f15bf7e53293cc176acdd6f8093086a0eca6aaa2bb5676ea7f9f0e279563e5e79caaa01aa783138b30aa4a61912e26";

export const generateToken = (user: { id: number; role: string }) => {
  return jwt.sign(user, JWT_SECRET, { expiresIn: "7d" });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
