const URL = require("../models/url")
 const handleHomePage = async (req,res) =>{
   const allUrls = await URL.find({})

    res.render("home", {
      "allUrls": allUrls
    })

 }

 const handleRedirectURL = async (req,res) =>{
   const shortId = req.params.id
   console.log(shortId)
   const entry = await URL.findOneAndUpdate(
       { 
           shortId,
       },
       {
           $push: {
               visitHistory : {
                   timestamp: Date.now()
               }
           }
       }
   );
   console.log(entry.redirectURL)
   return res.status(300).redirect(entry.redirectURL)
}
 module.exports = {
   handleRedirectURL,
    handleHomePage
 }