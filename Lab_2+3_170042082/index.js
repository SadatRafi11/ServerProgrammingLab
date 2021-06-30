require("dotenv").config();
const app = require("./app.js");

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`up and running at port ${PORT}`);
});
