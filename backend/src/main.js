const app = require("./app");

// Start server with browser
app.listen(9000, () => {
    require("child_process").exec(`start http://localhost:9000`);
});