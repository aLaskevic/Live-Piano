const { uuid } = require("uuidv4");
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8083 });

const lobbies = {};
wss.on("connection", (ws) => {
  ws.on("message", (buffer) => {
    const messageString = buffer.toString();
    const data = JSON.parse(messageString);

    if (data.type == "playNote" || data.type == "stopNote") {
      try {
        lobbies[data.lobbyId].forEach((connection) => {
          connection.websocket.send(JSON.stringify(data));
        });
        return;
      } catch (error) {
        console.log(error);
      }
    }

    if (data.type == "createLobby") {
      try {
        const userId = uuid();
        const lobbyId = userId;
        const connection = {
          type: "initLobby",
          lobbyId: lobbyId,
          userId: lobbyId,
          name: data.name,
        };
        console.log(data);
        const newLobby = [{ websocket: ws, userId: userId, name: data.name }];
        lobbies[lobbyId] = newLobby;
        ws.send(JSON.stringify(connection));
        return;
      } catch (error) {
        console.log(error);
      }
    }

    if (data.type == "joinLobby") {
      try {
        const lobbyId = data.lobbyId;
        if (!lobbies[data.lobbyId]) return;
        const userId = uuid();
        const connection = {
          type: "joinLobby",
          lobbyId: lobbyId,
          userId: userId,
          name: data.name,
        };
        lobbies[data.lobbyId].push({ websocket: ws, userID: userId });
        ws.send(JSON.stringify(connection));
      } catch (error) {
        console.log(error);
      }
    }
  });

  ws.on("close", () => {
    //iterate over all existing sessions
    console.log(lobbies);
    for (key in lobbies) {
      //iterate over all connection in a sessions
      for (let i = 0; i < lobbies[key].length; i++) {
        //find the disconnected websocket and remove this connection from the List
        if (lobbies[key][i].websocket == ws) {
          lobbies[key].splice(i, 1);
          console.log("gefunden!");
          break;
        }
      }
      if (lobbies[key].length == 0) {
        delete lobbies[key];
      }
    }
  });
});
