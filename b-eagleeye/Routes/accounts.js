const express = require('express');
const account = require('../Models/Account_model');
const router = express.Router()

router.get('/get_account', async (req, res) => {
    // get all parking details
    const details = await account.find()
    try {
        // if details are found then send response 
        console.log(details);
        res.json({
            success: true,
            details: details
        })
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: "No details found"
        })
    }
})
// router.post('/get_account', async (req, res) => {
//     // get all parking details
//     const details = req.body

//     try {
//         // if details are found then send response 
//         account.insertMany(details)
//         console.log(details);
//         res.json({
//             success: true,
//             details: details
//         })
//     } catch (err) {
//         console.log(err);
//         res.json({
//             success: false,
//             message: "No details found"
//         })
//     }
// })



module.exports = router;