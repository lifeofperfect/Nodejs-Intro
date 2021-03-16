const os = require('os')

//info on current user
const user = os.userInfo();
console.log(user);

//returns the system uptime in seconds
console.log(`the system has been up for ${os.uptime()} seconds`);

//info on current operation system
const currentOs={
    name:os.type(),
    release: os.release(),
    totalMem : os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentOs);