const userSchema = require('../models/userModel')
const path = require('path');

module.exports = {
    addUser: async (req, res) => {
        try {
            const userData = new userSchema(req.body)
            await userData.save();
            res.sendFile(path.join(__dirname, '..', '..', 'client', 'html', 'thanksPage.html'));
        } catch (error) {
            res.status(500).send({
                success: false,
                message: "Error!",
                error: error.message,
            })
        }
    }
}
