const Review = require("../Models/Review");

module.exports.review_post = async (req, res) => {
  try {
    let review = new Review(req.body);
    review = await review.save();
    console.log("Saved Review:", review);
    res.status(200).json({ status: "Success", review: review });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports.review_get = async (req, res) => {
    try {
        let reviews = []
        reviews = await Review.find();
        console.log("List of Reviews:", reviews);
        res.status(200).json({ status: "Success", reviews: reviews });
      } catch (err) {
        console.log(err.message);
      }
};

