const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModels');
const createToken = require('../utils/createToken');


exports.signup = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
    }

    let newUser;

    if (email && password) {
        const hashedPassword = await bcrypt.hash(password, 12);

        newUser = await User.create({
            name,
            email,
            password: hashedPassword,

        });
    }

    const token = createToken(newUser._id);
    res.status(201).json({ data: newUser, token });
});

exports.login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!(email && password)) {
        return res.status(400).send("All input is required");
    }
    if (!user) {
        return res.status(400).send("Invalid email!");
    }

    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
        return res.send("Incorrect email or password").status(401);
    }
    const token = createToken(user._id);

    delete user._doc.password;
    res.status(200).json({ data: user, token });

});
