import { useState } from "react";
import React from "react";
import ws from "../../wsClient/socket";
import "./joinlobby.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

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
        <div id="container">
          <div className="title">
            <span id="Live">Live</span>
            <span id="Piano">Piano</span>
            <div>Invite your friends to a session!</div>
          </div>
          <form>
            <input
              type="Text"
              placeholder="Enter your name"
              className="input-text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
            <div id="input-code">
              <input
                type="Text"
                placeholder="Sessionkey"
                className="input-text"
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                }}
              ></input>

              <FontAwesomeIcon
                icon={faCircleQuestion}
                className="input-code_question"
              ></FontAwesomeIcon>
              <div className="input-code_tooltip">
                You find the session key in the created session
              </div>
            </div>
            <div className="error">{error}</div>
            <button className="btn btn-primary" onClick={joinLobby}>
              Join session
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
      </div>
    </>
  );
}

export default jLobby;
