import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { v4 as uuidv4 } from "uuid";
export default function configureSocketIO(io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>)
{
    io.on("connection", (socket) =>
    {

        socket.on("join-room", (roomId) =>
        {
            socket.join(roomId);
            socket.to(roomId).emit("room-joined", roomId);
        });

        socket.on("update-room", (roomId) =>
        {

        });

        socket.on("create-room", () =>
        {
            const roomId = uuidv4();
            console.log("create-room", roomId);
            socket.join(roomId);
            socket.emit("room-created", roomId);
        });

        socket.on("disconnect", async () =>
        {

        });
    });
}