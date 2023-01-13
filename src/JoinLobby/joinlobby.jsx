import { useState } from "react";
import React from "react";
import ws from "../wsClient/socket";
import "./joinlobby.css";

function jLobby(props) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  ws.addEventListener("message", (message) => {
    const data = JSON.parse(message.data);
    if (data.type == "joinLobby") {
      props.connection(data);
    }
  });

  function joinLobby(e) {
    e.preventDefault();

    if (ws.readyState != 1) {
      setError("Es konnte keine Verbindung hergestellt werden!");
      return;
    }

    const connection = { type: "joinLobby", lobbyId: id };
    ws.send(JSON.stringify(connection));

    setError("");
  }

  return (
    <>
      <div id="home">
        <div className="title">
          <span id="Live">Live</span>
          <span id="Piano">Piano</span>
          <div>Invite your friends to a session!</div>
        </div>
        <form>
          <input
            type="Text"
            placeholder="Name"
            className="input-text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <input
            type="Text"
            placeholder="Enter your code"
            className="input-text"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          ></input>
          <div className="error">{error}</div>
          <button className="btn btn-primary" onClick={joinLobby}>
            Join
          </button>
          <button
            className="btn btn-outlined-primary"
            onClick={(e) => {
              e.preventDefault();
              props.display(true);
            }}
          >
            Back
          </button>
        </form>
      </div>
    </>
  );
}

export default jLobby;
