import { useState } from "react";
import React from "react";
import ws from "../../wsClient/socket";
import "./createlobby.css";

function cLobby(props) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  ws.addEventListener("message", (message) => {
    const data = JSON.parse(message.data);
    if (data.type == "initLobby") {
      props.connection(data);
      props.userList((prev) => {
        console.log(prev);
      });
    }
  });

  function createLobby(e) {
    e.preventDefault();
    if (name.length < 5) {
      setError("Name needs atleast 5 Letters!");
      return;
    }

    if (ws.readyState != 1) {
      setError("Es konnte keine Verbindung hergestellt werden!");
      return;
    }

    const connection = { type: "createLobby", name: name };

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
            <div className="error">{error}</div>
            <button className="btn btn-primary" onClick={createLobby}>
              Create session
            </button>
            <button
              className="btn btn-outlined-primary"
              onClick={(e) => {
                e.preventDefault();
                props.display(false);
              }}
            >
              Join session
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default cLobby;