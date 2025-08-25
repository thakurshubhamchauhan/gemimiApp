const express = require('express')
const appp = express();
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const cors = require('cors')

appp.use(bodyParser.json());
appp.use(cors());

appp.post('/getResponse',async (req, res) => {
    try{
    console.log(req.body.question);
    
    const genAI = new GoogleGenerativeAI('AIzaSyBVFvBY-9F3HY0MNFSTMhVMwmUKm3z4i7Q');
         
    // const genAI = new GoogleGenerativeAI('AIzaSyBVFvBY-9F3HY0MNFSTMhVMwmUKm3z4i7Q');

    let model =  genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    // model.generateContent(req.body.question).then(result=>{
      let result = await model.generateContent(req.body.question);  
      let responseText =await result.response.text();
      res.status(200).json({
        response:responseText
      });
    }catch(err) {
        console.log(err);
        res.status(500).json({
            error:err
        });
    }
});

// appp.use("*",()=>{
//     res.status(404).json({
//       msg:'bad bhai-kara kya hai'
//     })






module.exports = appp;