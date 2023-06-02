const bcrypt = require("bcrypt");
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashed_password = await bcrypt.hash(password, salt);

    const getQuery = `SELECT * FROM Users WHERE email = "${email}"`;
    const min = 1000;
    const max = 2000;
    const userid = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(getQuery);
    connection.query(getQuery, (err, rows) => {
        if (err) {
            console.log(err);
            res.json({ success: false, message: err.message });
        } else {
            console.log("object");
            if (rows.length === 0) {
                const postQuery = mysql.format(
                    "INSERT INTO Users (email, password, id) VALUES (?, ?, ?)",
                    [email, hashed_password, userid]
                );
                connection.query(postQuery, (err2, result) => {
                    if (err2) {
                        res.json({ success: false, message: err2.message });
                    } else {
                        const getUser = mysql.format(
                            "SELECT * FROM Users WHERE email = ?",
                            [email]
                        );

                        connection.query(
                            getUser,
                            [result.insertId],
                            (err3, result1) => {
                                if (err3) {
                                    res.json({
                                        success: false,
                                        message: err3.message,
                                    });
                                } else {
                                    const token = jwt.sign(
                                        {
                                            userId: result1[0].id,
                                        },
                                        "ZJGX1QL7ri6BGJWj3t",
                                        { expiresIn: "24h" }
                                    );
                                    res.cookie("user", token, {
                                        httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
                                        // Add more options if needed (e.g., secure: true for HTTPS)
                                    });
                                    res.json({
                                        success: true,
                                        message:
                                            "Register credential is correct",
                                    });
                                }
                            }
                        );
                    }
                });
            } else {
                res.json({
                    success: false,
                    message: "Username is already used",
                });
            }
        }
    });
};