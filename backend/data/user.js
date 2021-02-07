import bcrypt from 'bcryptjs';
const users = [
    {
        name: "Admin User",
        email: "admin@email.com",
        password: bcrypt.hashSync('123456',10),
        isAdmin: true,
    },
    {
        name: "Jone Doe",
        email: "jone@email.com",
        password:bcrypt.hashSync('123456',10)
    }
    , {
        name: "Jane Doe",
        email: "jane@email.com",
        password: bcrypt.hashSync('123456',10)
    }
];

export default users;