const { mock } = require("mockjs");

module.exports = {
  "GET /user": (req, res) => {
    res.send(
      mock({
        message: "success",
        total: 25,
        "data|10": [
          {
            "id|+1": 1,
            name: "@name",
            gender: "@string",
            email: "@email",
          },
        ],
      })
    );
  },
};
