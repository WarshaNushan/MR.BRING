const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://drive.google.com/file/d/15WhEUcqtz_VWoqTrHMXq9G1_Yx24gIVU/view?usp=drive_link",
ALIVE_MSG: process.env.ALIVE_MSG || "HELLO I AM MR.BRING MD I AM ALIVE. SEND YOUR COMMAND NOW!!",   
};
