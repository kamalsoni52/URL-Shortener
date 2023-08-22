const URL = require("../models/url")
const handleHomePage = async (req, res) => {
  const allUrls = await URL.find({})

  res.render("home", {
    "allUrls": allUrls
  })

}

const handleRedirectURL = async (req, res) => {
  const shortId = req.params.id
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now()
        }
      }
    }
  );
  if(!entry) return res.redirect("/")
  console.log(entry.redirectURL)
  return res.status(300).redirect(entry.redirectURL)
}

module.exports = {
  handleRedirectURL,
  handleHomePage
}