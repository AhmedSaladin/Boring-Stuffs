require("dotenv").config();
const server = require("express")();

const PORT = process.env.PORT;
const HOST = process.env.HOST;
server.listen(PORT, HOST, () => console.log(`Server start at port: ${PORT}`));
