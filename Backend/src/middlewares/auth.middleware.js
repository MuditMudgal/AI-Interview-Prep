const jwt = require("jsonwebtoken");
const tokenBlacklistModel = require("../models/blacklist.model");

async function authUser(req, res, next) {
    // First try Authorization header
    const authHeader = req.headers.authorization;

    let token = null;

    if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];
    }

    // If Authorization header is not present,
    // fall back to the old cookie method
    if (!token) {
        token = req.cookies.token;
    }

    if (!token) {
        return res.status(401).json({
            message: "Token not provided.",
        });
    }

    const isTokenBlacklisted = await tokenBlacklistModel.findOne({
        token,
    });

    if (isTokenBlacklisted) {
        return res.status(401).json({
            message: "Token is invalid.",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();
    } catch (err) {
        return res.status(401).json({
            message: "Invalid token.",
        });
    }
}

module.exports = {
    authUser,
};
