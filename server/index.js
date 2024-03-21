const express = require("express");
const app = express();
const http = require("http");
const {Server} = require("socket.io")
const cors = require("cors")
const PORT = 3001

app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
});

io.on("connection", (socket)=>{
    console.log(`User connected: ${socket.id}`)

    socket.on("send_data", (data)=>{
        console.log(data)
        socket.broadcast.emit("receive_message", data);
    })
})


server.listen(PORT, ()=>{
    console.log("Server is running at port",PORT);
})