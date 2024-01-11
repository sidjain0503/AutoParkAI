const express = require('express');
const router = express.Router()
const Parking_register = require('../Models/Parking_register');
const { findParkedCar } = require('../Controllers/Parking_registerexitController');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

router.post("/model/entry", async (req, res) => {
    // get all parking details
    try {
        const data = req.body.data
        const details = await Parking_register.find()
        let avaiable_spaces = details.filter((park) => park.occupied == "FALSE").map((park) => park.parkingslot_id)
        let mapping = {}
        let ids = 0
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 7; j++) {
                mapping[ids] = [i, j];
                ids++;
            }
        }

        avaiable_spaces.sort(function (a, b) {
            return (
                Math.sqrt((mapping[b][0] - 0) * (mapping[b][0] - 0) + (mapping[b][1] - 3) * (mapping[b][1] - 3))-
                Math.sqrt((mapping[a][0] - 0) * (mapping[a][0] - 0) + (mapping[a][1] - 3) * (mapping[a][1] - 3)) 
                
            );
        });
        console.log(avaiable_spaces);
        let popped = avaiable_spaces.pop()
        let response = await Parking_register.updateMany({ "parkingslot_id": `${popped}` }, { $set: { "occupied": "TRUE", "entry_time": `${Date.now()}`, "car_number": `${data}` } })
        let phonenumber=6264537931
        client.messages
            .create({
                body: `https://codefiesta-two.vercel.app/#/navigate/12`,
                from: '+12058606436',
                to: `+91${phonenumber}`
            }).then(message => console.log(message.sid));
        res.json({
            success: true,
            details: details,
            pop: popped
        })
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: "No details found"
        })
    }

})


router.post("/model/exit", findParkedCar)



module.exports = router;