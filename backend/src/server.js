const app = require('./app');
const dotenv  = require('dotenv').config();

// Avvio Server con apertura browser
app.listen(process.env.PORT, () => {
    require('child_process').exec(`start http://localhost:${process.env.PORT}`);
});