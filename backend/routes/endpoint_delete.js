var jwt = require("jsonwebtoken");
module.exports = async (req, res) => {
    const { id } = req.body;
    console.log(id);
    const deleteOption = "DELETE FROM books WHERE id = ?";

    // Delete the user
    connection.query(deleteOption, [id], (optionErr, optionRows) => {
        if (optionErr) {
            res.json({ success: false, message: optionErr.message });
        } else {
            res.json({
                success: true,
                message: "Book has been deleted",
            });
        }
    });
};