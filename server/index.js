const { uuid } = require("uuidv4");
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8083 });

const lobbies = {};
const fancyColors = ["#6ff542", "#d442f5"];

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

        const newLobby = [{ websocket: ws, userId: userId, name: data.name }];
        lobbies[lobbyId] = newLobby;
        ws.send(JSON.stringify(connection));

        const userNames = [];

        for (let i = 0; i < lobbies[lobbyId].length; i++) {
          userNames.push({
            name: lobbies[lobbyId][i].name,
            color: fancyColors[i],
          });
        }

        const userNamesMessage = { type: "newUser", userNames };

        lobbies[lobbyId].forEach((userConnection) => {
          userConnection.websocket.send(JSON.stringify(userNamesMessage));
        });
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
        ws.send(JSON.stringify(connection));

        lobbies[data.lobbyId].push({
          websocket: ws,
          userID: userId,
          name: data.name,
        });

        const userNames = [];

        for (let i = 0; i < lobbies[data.lobbyId].length; i++) {
          userNames.push({
            name: lobbies[data.lobbyId][i].name,
            color: fancyColors[i],
          });
        }
        const userNamesMessage = { type: "newUser", userNames };

        lobbies[data.lobbyId].forEach((userConnection) => {
          userConnection.websocket.send(JSON.stringify(userNamesMessage));
        });
      } catch (error) {
        console.log(error);
      }
    }
  });

  ws.on("close", () => {
    try {
      let tempKey;
      //iterate over all existing sessions
      console.log(lobbies);

      for (key in lobbies) {
        //iterate over all connection in a sessions
        for (let i = 0; i < lobbies[key].length; i++) {
          //find the disconnected websocket and remove this connection from the List
          if (lobbies[key][i].websocket == ws) {
            tempKey = key;
            lobbies[key].splice(i, 1);
            break;
          }
        }
      }

      const userNames = [];

      for (let i = 0; i < lobbies[tempKey].length; i++) {
        userNames.push({
          name: lobbies[tempKey][i].name,
          color: fancyColors[i],
        });
      }
      const userNamesMessage = { type: "newUser", userNames };

      console.log(userNamesMessage);

      lobbies[tempKey].forEach((userConnection) => {
        userConnection.websocket.send(JSON.stringify(userNamesMessage));
      });

      if (lobbies[key].length == 0) {
        delete lobbies[key];
      }
    } catch (error) {
      console.log(error);
    }
  });
});
