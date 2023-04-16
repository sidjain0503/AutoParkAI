const Parking_register = require('../Models/Parking_register');
const account=require('../Models/Account_model')
module.exports.findParkedCar =async (req,res)=>{
    try {
        // if details are found then send response 
        var myquery = { car_number: `${req.body.data}` };
        let fulldata=await Parking_register.find(myquery)
        console.log(fulldata);
        var newvalues = { $set: {occupied: "FALSE","car_number":"NULL","entry_time":"NULL" } };
        let time=fulldata[0].entry_time;
        let totalcost=(Date.now()-time)*0.0002
        console.log(totalcost);        
        const plot = await Parking_register.updateOne(myquery, newvalues);
        console.log(plot); 
        let accountdata=await account.find(myquery)
        console.log(accountdata);
        let newaccountdata=accountdata[0].amount-totalcost
        let newaccountvalues = { $set: {amount: newaccountdata } };
        const updation=await account.updateOne(myquery,newaccountvalues)
        res.json({
            success: true,
            details: plot
        })
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: "No details found"
        })
    }
}
