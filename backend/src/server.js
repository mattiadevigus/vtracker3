require("dotenv").config();
const app = require("./app");

// Start server with browser
app.listen(9000, () => {
    if (process.env.STARTMODE === "DIS") require("child_process").exec(`start http://localhost:9000`);
});