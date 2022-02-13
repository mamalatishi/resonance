const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js')

//Register 

router.post('/register' , async(req,res) => {
    const newUser = new User({
        username:req.body.username, 
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC.toString())
    }) 

    try {
        const savedUser = await newUser.save();
        console.log(savedUser);
        res.status(201).json(savedUser);

    } catch(err) {
        res.status(500).json(err); 
    }
})

router.post('/login' , async(req,res) => {
    try{
        const user = await User.findOne({username:req.body.username})
        !user && res.status(401).json("your Credentials are incorrect")

        const hashedpassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );
        const originalPassword = hashedpassword.toString(CryptoJS.enc.Utf8);
        !originalPassword && res.status(401).json("your Credentials are incorrect")


        const {password,...others} = user._doc; 
        res.status(200).json(others);
    } catch(err) {
        res.status(500).json(err)
    }

})

module.exports = router;