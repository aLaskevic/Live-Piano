const { uuid } = require("uuidv4");
const WebSocket = require("ws");

const express = require("express");
const app = express();
const port = 3000;

const wss = new WebSocket.Server({ port: 8083 });

const sessions = {};
const fancyColors = ["#6ff542", "#d442f5"];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

wss.on("connection", (ws) => {
  ws.on("message", (buffer) => {
    const messageString = buffer.toString();
    const data = JSON.parse(messageString);
    if (data.type == "playNote" || data.type == "stopNote") {
      try {
        sessions[data.sessionId].forEach((connection) => {
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
        const sessionId = userId;
        const connection = {
          type: "initLobby",
          sessionId: sessionId,
          userId: sessionId,
          name: data.name,
        };

        const newLobby = [{ websocket: ws, userId: userId, name: data.name }];
        sessions[sessionId] = newLobby;
        ws.send(JSON.stringify(connection));

        const userNames = [];

        for (let i = 0; i < sessions[sessionId].length; i++) {
          userNames.push({
            name: sessions[sessionId][i].name,
            color: fancyColors[i],
          });
        }

        const userNamesMessage = { type: "newUser", userNames };

        sessions[sessionId].forEach((userConnection) => {
          userConnection.websocket.send(JSON.stringify(userNamesMessage));
        });
        return;
      } catch (error) {
        console.log(error);
      }
    }

    if (data.type == "joinLobby") {
      try {
        const sessionId = data.sessionId;
        if (!sessions[data.sessionId]) return;
        const userId = uuid();
        const connection = {
          type: "joinLobby",
          sessionId: sessionId,
          userId: userId,
          name: data.name,
        };
        ws.send(JSON.stringify(connection));

        sessions[data.sessionId].push({
          websocket: ws,
          userID: userId,
          name: data.name,
        });

        const userNames = [];

        for (let i = 0; i < sessions[data.sessionId].length; i++) {
          userNames.push({
            name: sessions[data.sessionId][i].name,
            color: fancyColors[i],
          });
        }
        const userNamesMessage = { type: "newUser", userNames };

        sessions[data.sessionId].forEach((userConnection) => {
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
      for (key in sessions) {
        //iterate over all connection in a sessions
        for (let i = 0; i < sessions[key].length; i++) {
          //find the disconnected websocket and remove this connection from the List
          if (sessions[key][i].websocket == ws) {
            tempKey = key;
            sessions[key].splice(i, 1);
            break;
          }
        }
      }

      const userNames = [];

      if (sessions.tempKey == undefined) return;

      for (let i = 0; i < sessions[tempKey].length; i++) {
        userNames.push({
          name: sessions[tempKey][i].name,
          color: fancyColors[i],
        });
      }
      const userNamesMessage = { type: "newUser", userNames };

      sessions[tempKey].forEach((userConnection) => {
        userConnection.websocket.send(JSON.stringify(userNamesMessage));
      });

      if (sessions[key].length == 0) {
        delete sessions[key];
      }
    } catch (error) {
      console.log(error);
    }
  });
});
