const os = require("os");

// Info about current user
const user = os.userInfo();
console.log(user);

// Method that returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds.`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};

console.log(currentOs);
