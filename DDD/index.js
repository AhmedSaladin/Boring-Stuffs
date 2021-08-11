require("dotenv").config();
const server = require("express")();
require("./app/app")(server);

const PORT = process.env.PORT;
const HOST = process.env.HOST;
server.listen(PORT, HOST, () => console.log(`Server start at port: ${PORT}`));
