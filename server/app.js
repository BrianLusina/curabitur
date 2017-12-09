const WebSocket = require("ws");

const webSocketServer = WebSocket.Server({port: 8989});

const users = [];

/**
 * Broadcast function to connected clients. This will check if the client is in a ready state
 * and that it is not a web socket and send data to the client on successfull connection
 * @param {Object} data Data to send
 * @param {Object} webSocket Web socket
 */
const broadcast = (data, webSocket) => {
    webSocketServer.forEach(client => {
        if(client.readyState === WebSocket.OPEN && client !== webSocket){
            client.send(JSON.stringify(data))
        }
    });
}

/**
 * Listen for connection events
 */
webSocketServer.on("connection", (webSocket) => {
    let index;
    webSocket.on("message", (message) => {
        const data = JSON.parse(message);
        switch(data.type){
            case "ADD_USER":
                index = users.length;
                users.push({name: data.name, id: index + 1});
                webSocket.send(JSON.stringify({
                    type: "USERS_LIST",
                    users
                }));

                broadcast({
                    type: "USERS_LIST",
                    users
                }, webSocket);
                break;
            
            case "ADD_MESSAGE":
                broadcast({
                    type: "ADD_MESSAGE",
                    message: data.message,
                    author: data.author
                }, webSocket)
                break;
            
            default:
                break
        }
    });

    webSocket.on("close", () => {
        users.splice(index, 1);
        broadcast({
            type: "USERS_LIST",
            users,
        }, webSocket)
    })

});
