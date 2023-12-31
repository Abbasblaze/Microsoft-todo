const db = require("../db");
const Search = require("../models/search.models.js");

exports.search = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "This can't be empty!",
      });
      return;
    }
    const rows = await Search.search(req.body.id);

    res.status(200).json({
      success: true,
      message: "The search result is given below",
      data: [rows],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error occurred while Searching.",
    });
  }
};
