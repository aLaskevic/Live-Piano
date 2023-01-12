import { useState } from "react";
import React from "react";
import ws from "../wsClient/socket";
import "./welcome.css";

function welcome() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [connection, setConnection] = useState(false);

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

    setConnection(true);
    setError("");
  }

  return (
    <div id="home">
      <div className="title">
        <span id="Live">Live</span>
        <span id="Piano">Piano</span>
        <div>Invite your friends to a session!</div>
      </div>
      {!connection ? (
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
          <div className="error">{error}</div>
          <button className="btn btn-primary" onClick={createLobby}>
            Create Lobby
          </button>
          <button className="btn btn-outlined-primary">Join Lobby</button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

export default welcome;
