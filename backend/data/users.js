import bcrypt from "bcryptjs";

const users = [
  {
    name: "Vishnu dutt",
    email: "vishnu22dutt@email.com",
    password: bcrypt.hashSync("Vishnu@01", 10),
    isAdmin: true,
  },
];

export default users;
