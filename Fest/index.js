const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`up and running at port ${PORT} of localhost`);
});