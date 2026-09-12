require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})

process.on("SIGTERM",()=>{
    console.log("SIGTERM received")
    server.close(()=>{
        console.log("HTTP server closed")
        process.exit(0);
    })
})

