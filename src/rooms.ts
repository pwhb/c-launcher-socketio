const rooms = {};

export function getRoom(roomId: string)
{
    return rooms[roomId];
}

export function createRoom(roomId: string, payload: any)
{
    rooms[roomId] = payload;
}

export default rooms;