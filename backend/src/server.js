const app = require('./app');
const dotenv  = require('dotenv').config();

app.listen(process.env.PORT, () => {
    require('child_process').exec(`start http://localhost:${process.env.PORT}`);
});